/*
 * @Author: xigu.io
 * @Date: 2018-07-21 11:05:37
 * @Last Modified by: yarn🤡
 * @Last Modified time: 2018-07-21 13:39:47
 * 会员等级控制器
 */

import { Controller } from 'egg';

export default class VipCtrl extends Controller {
  /**
   * @description 获取会员等级列表
   * @memberof VipCtrl
   */
  public async list() {
    const { model, response } = this.ctx;
    const data = await model.Vip.findAll({
      raw: true,
    });
    response.body = data;
  }
}
