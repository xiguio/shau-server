/*
 * @Author: xigu.io
 * @Date: 2018-07-10 10:42:24
 * @Last Modified by: yarn🤡
 * @Last Modified time: 2018-07-10 14:29:35
 * 签到控制器
 */
import * as moment from 'moment';
import { Controller } from 'egg';
import { literal } from 'sequelize';
import { StatusError } from '../entity/status_error';

export default class SignCtrl extends Controller {
  public async list() {
    const { model, response } = this.ctx;
    const list = await model.Sign.findAll({ raw: true });
    response.body = list || [];
  }

  public async do() {
    const { request, helper, model, response } = this.ctx;
    const rules = {
      userId: { type: 'numberString', field: 'userId' },
      signId: { type: 'numberString', field: 'signId' },
      signScore: { type: 'numberString', field: 'signScore' },
      signAt: { type: 'string', field: 'signAt', allowEmpty: true },
    };
    const {
      userId,
      signId,
      signScore,
      signAt,
    } = helper.validateParams(rules, request.body, this.ctx);
    // 如果signAt为null，则说明没签过到days < 1为false
    // 现在和上次签到时间相差的天数
    const start = moment(moment(new Date(+signAt), 'YYYY-MM-DD')).set({
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0,
    });
    const end = moment(moment(new Date(), 'YYYY-MM-DD'));
    const days = end.diff(start, 'days');
    console.info('距离上次签到天数', days, signId);
    if (days < 1) {
      throw new StatusError('今天已签到，明天再来吧', StatusError.ERROR_STATUS.DATA_ERROR);
    }
    const now = new Date().getTime();
    const [affectedCount] = await model.User.update(
      {
        signCount: days > 1 ? 1 : literal('signCount+1'),
        signAt: `${now}`,
        score: literal(`score+${signScore}`)
      },
      { where: { id: userId } },
    );
    if (affectedCount) {
      response.body = await model.User.findOne({
        where: { id: userId },
        attributes: ['id', 'nickname', 'gender', 'avatar', 'birthday', 'amount', 'mobile', 'score', 'signAt', 'signCount', 'inviter', 'inviterCode'],
        raw: true,
      });
    } else {
      throw new StatusError('无数据更新', StatusError.ERROR_STATUS.DATA_ERROR);
    }
  }

}
