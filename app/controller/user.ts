/*
 * @Author: xigu.io
 * @Date: 2018-07-21 11:05:37
 * @Last Modified by: yarn🤡
 * @Last Modified time: 2018-07-21 13:39:47
 * 用户控制器
 */

import { Controller } from 'egg';
import { StatusError } from '../entity/status_error';

export default class UserCtrl extends Controller {
  /**
   * @description 获取用户列表
   * @memberof UserCtrl
   */
  public async list() {
    const { request, helper, model, response } = this.ctx;
    const rules = {
      page: { type: 'numberString', field: 'page', required: false },
      size: { type: 'numberString', field: 'size', required: false },
    };
    let { page = 1, size = 10 } = helper.validateParams(
      rules,
      request.query,
      this.ctx,
    );
    page = +page;
    size = +size;

    const { count, rows: list } = await model.User.findAndCountAll({
      attributes: ['id', 'nickname', 'mobile', 'avatar', 'gender', 'birthday'],
      limit: size,
      offset: helper.pageOffset(page, size),
      raw: true,
    });

    response.body = {
      count,
      totalPages: helper.pageTotal(count, size),
      pageSize: size,
      currentPage: page,
      list,
    };
  }

  /**
   * @description 更新用户信息
   * @memberof UserCtrl
   */
  public async update() {
    const { request, helper, model, response } = this.ctx;
    const rules = {
      id: { type: 'numberString', field: 'id' },
    };
    const {
      id,
      gender,
      birthday,
      nickname,
      mobile,
      avatar,
      userLevelId,
      weixinOpenid,
      qqOpenid,
      unionid,
    } = helper.validateParams(rules, request.body, this.ctx);
    const params = {
      gender,
      birthday,
      nickname,
      mobile,
      avatar,
      userLevelId,
      weixinOpenid,
      qqOpenid,
      unionid,
    };
    const [affectedCount] = await model.User.update(
      helper.removeAttribute(params),
      { where: { id } },
    );
    if (affectedCount) {
      response.body = await model.User.findOne({ where: { id }, raw: true });
    } else {
      throw new StatusError('无数据更新', StatusError.ERROR_STATUS.DATA_ERROR);
    }
  }

  /**
   * @description 查询当前登录用户详情
   * @memberof UserCtrl
   */
  public async detail() {
    const { response, model, jwtSession } = this.ctx;
    const data = await model.User.findOne({
      where: { id: jwtSession.userId },
      attributes: ['id', 'nickname', 'gender', 'avatar', 'birthday', 'amount', 'mobile', 'score', 'inviter', 'inviterCode'],
    });
    if (data) {
      response.body = data;
    } else {
      throw new StatusError('数据不存在', StatusError.ERROR_STATUS.DATA_ERROR);
    }
  }
}
