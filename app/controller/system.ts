/*
 * @Author: xigu.io
 * @Date: 2018-07-21 11:05:37
 * @Last Modified by: yarn🤡
 * @Last Modified time: 2018-07-21 13:39:47
 * 系统设置控制器
 */

import { Controller } from 'egg';
import { StatusError } from '../entity/status_error';

export default class SystemCtrl extends Controller {
  /**
   * @description 获取系统设置
   * @memberof SystemCtrl
   */
  public async index() {
    const { response, model } = this.ctx;
    const data = await model.System.findOne({
      attributes: {
        exclude: ['id'],
      }
    });
    if (data) {
      response.body = data;
    } else {
      throw new StatusError('数据不存在', StatusError.ERROR_STATUS.DATA_ERROR);
    }
  }
}
