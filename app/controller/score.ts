/*
 * @Author: xigu.io
 * @Date: 2018-07-21 11:05:37
 * @Last Modified by: yarn🤡
 * @Last Modified time: 2018-07-21 13:39:47
 * 积分控制器
 */

import { Controller } from 'egg';
import { StatusError } from '../entity/status_error';

export default class ScoreCtrl extends Controller {
  /**
   * @description 获取积分记录列表
   * @memberof ScoreCtrl
   */
  public async list() {
    const { request, helper, model, response } = this.ctx;
    const rules = {
      page: { type: 'numberString', field: 'page', required: false },
      size: { type: 'numberString', field: 'size', required: false },
      keywords: { type: 'string', field: 'keywords', required: false, allowEmpty: true }
    };
    let { page = 1, size = 12 } = helper.validateParams(
      rules,
      request.query,
      this.ctx,
    );
    page = +page;
    size = +size;
    const { count, rows: list } = await model.Score.findAndCountAll({
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
   * @description 查询积分记录详情
   * @memberof ScoreCtrl
   */
  public async detail() {
    const { response, model, request, helper } = this.ctx;
    const rules = {
      id: { type: 'numberString', field: 'id', required: true },
    };
    let { id } = helper.validateParams(
      rules,
      request.query,
      this.ctx,
    );
    const data = await model.Score.findOne({
      where: { id }
    });
    if (data) {
      response.body = data;
    } else {
      throw new StatusError('数据不存在', StatusError.ERROR_STATUS.DATA_ERROR);
    }
  }
}
