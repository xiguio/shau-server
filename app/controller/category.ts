/*
 * @Author: xigu.io
 * @Date: 2018-07-10 10:42:24
 * @Last Modified by: yarn🤡
 * @Last Modified time: 2018-07-10 14:29:35
 * 分类控制器
 */
import { Controller } from 'egg';

export default class CatalogCtrl extends Controller {
  public async list() {
    const { model, helper, request, response } = this.ctx;
    const rules = {
      parentId: { type: 'numberString', field: 'parentId', required: false },
    };
    let { parentId = 0 } = helper.validateParams(
      rules,
      request.query,
      this.ctx,
    );
    parentId = +parentId;
    const list = await model.Category.findAll({
      where: { parentId },
      raw: true,
    });

    response.body = list || [];
  }

}
