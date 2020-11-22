/*
 * @Author: xigu.io
 * @Date: 2018-06-28 14:19:27
 * @Last Modified by: yarn🤡
 * @Last Modified time: 2018-06-28 14:25:21
 * 携带状态码的错误对象
 */

export class StatusError extends Error {

  static ERROR_STATUS = {
    // 服务器错误
    SERVER_ERROR: -1,
    // 请求参数错误
    REQUEST_PARAMS_ERROR: -2,
    // 会话过期
    SESSION_EXPIRED: 401,
    // 数据错误（数据库数据缺失等）
    DATA_ERROR: -4,
    // 权限不足
    PERMISSION_ERROR: -5,
  };

  status: number;

  constructor (message: string, status: number = StatusError.ERROR_STATUS.SERVER_ERROR) {
    super(message);
    this.status = status;
  }
}
