/*
 * @Author: xigu.io
 * @Date: 2018-07-21 11:05:37
 * @Last Modified by: yarn🤡
 * @Last Modified time: 2018-07-21 13:39:47
 * 网盘资源控制器
 */

import { Controller } from 'egg';
import { StatusError } from '../entity/status_error';

export default class ResourceCtrl extends Controller {
  /**
   * @description 获取网盘资源列表
   * @memberof ResourceCtrl
   */
  public async list() {
    const { request, helper, model, response } = this.ctx;
    const rules = {
      page: { type: 'numberString', field: 'page', required: false },
      size: { type: 'numberString', field: 'size', required: false },
      category: { type: 'numberString', field: 'category', required: false}
    };
    let { page = 1, size = 10, category } = helper.validateParams(
      rules,
      request.query,
      this.ctx,
    );
    page = +page;
    size = +size;
    const filter = category && category != 0 ? { categoryId: category } : {};
    const { count, rows: list } = await model.Resource.findAndCountAll({
      where: filter,
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
   * @description 更新网盘资源信息
   * @memberof ResourceCtrl
   */
  public async update() {
    const { request, helper, model, response } = this.ctx;
    const rules = {
      id: { type: 'numberString', field: 'id' },
    };
    const {
      id,
      categoryId,
      title,
      thumbnail,
      cname,
      ename,
      years,
      producingArea,
      releaseDate,
      duration,
      director,
      palywright,
      mainRole,
      description,
      deleted,
      createTime,
    } = helper.validateParams(rules, request.body, this.ctx);
    const params = {
      categoryId,
      title,
      thumbnail,
      cname,
      ename,
      years,
      producingArea,
      releaseDate,
      duration,
      director,
      palywright,
      mainRole,
      description,
      deleted,
      createTime,
    };
    const [affectedCount] = await model.Resource.update(
      helper.removeAttribute(params),
      { where: { id } },
    );
    if (affectedCount) {
      response.body = await model.Resource.findOne({ where: { id }, raw: true });
    } else {
      throw new StatusError('无数据更新', StatusError.ERROR_STATUS.DATA_ERROR);
    }
  }

  /**
   * @description 查询网盘资源详情
   * @memberof ResourceCtrl
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
    const data = await model.Resource.findOne({
      where: { id }
    });
    if (data) {
      response.body = data;
    } else {
      throw new StatusError('数据不存在', StatusError.ERROR_STATUS.DATA_ERROR);
    }
  }
}
