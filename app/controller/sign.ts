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
  
  // 获取签到时间表
  public async list() {
    const { model, response } = this.ctx;
    const list = await model.Sign.findAll({ raw: true });
    response.body = list || [];
  }

  // 用户签到
  public async do() {
    const { request, helper, model, service, response, jwtSession } = this.ctx;
    const rules = {
      signId: { type: 'numberString', field: 'signId' },
      signScore: { type: 'numberString', field: 'signScore' },
      signAt: { type: 'string', field: 'signAt', allowEmpty: true },
    };
    const {
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
    // 给用户添加积分，并生成积分流水
    const { affectedCount: scoreAffectedCount } = await model.Score.add(jwtSession.userId, signScore, '每日签到', '');
    if (!scoreAffectedCount) {
      throw new StatusError('更新用户积分失败', StatusError.ERROR_STATUS.DATA_ERROR);
    }
    // 更新用户连续签到天数和日期
    const [affectedCount] = await model.User.update(
      {
        signCount: days > 1 ? 1 : literal('signCount+1'),
        signAt: `${Date.now()}`,
      },
      { where: { id: jwtSession.userId } },
    );
    if (affectedCount) {
      response.body = await service.user.detail({ id: jwtSession.userId });
    } else {
      throw new StatusError('无数据更新', StatusError.ERROR_STATUS.DATA_ERROR);
    }
  }

}
