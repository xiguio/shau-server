/*
 * @Author: xigu.io
 * @Date: 2018-07-21 11:05:37
 * @Last Modified by: yarn🤡
 * @Last Modified time: 2018-07-21 13:39:47
 * 首页设置控制器
 */

import { Controller } from 'egg';

export default class HomeCtrl extends Controller {
  /**
   * @description 首页
   * @memberof HomeCtrl
   */
  public async index() {
    const { response } = this.ctx;
    response.body = '鲨鱼CMS';
  }

  /**
   * @description 获取首页列表
   * @memberof HomeCtrl
   */
  public async list() {
    const { request, helper, model, response } = this.ctx;
    const rules = {
      limit: { type: 'numberString', field: 'limit', required: false },
    };
    let { limit = 12 } = helper.validateParams(
      rules,
      request.query,
      this.ctx,
    );
    const homeList = [];
    const categoryList = await model.Category.findAll({ where: { parentId: 0 }, raw: true });
    for (let i = 0, length = categoryList.length; i < length; i++) {
      const resourceList = await model.Resource.findAll({
        where: { categoryId: categoryList[i].id},
        order: [['createTime', 'desc']],
        limit,
        raw: true,
      });
      homeList.push({
        categoryName: categoryList[i].name,
        categoryId: categoryList[i].id,
        resourceList,
      });
    }
    response.body = homeList;
  }
}
