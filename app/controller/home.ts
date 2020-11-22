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
   * @description 获取首页设置
   * @memberof HomeCtrl
   */
  public async index() {
    const { response } = this.ctx;
    response.body = '影视多';
  }
}
