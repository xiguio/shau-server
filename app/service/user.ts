import { Service } from 'egg';

/**
 * User Service
 */

interface IFilter {
  id?: number | string,
  qqOpenid?: string,
  weixinOpenid?: string,
}

export default class User extends Service {
  /**
   * 获取用户信息
   * @param filter - 查询条件
   */
  public async detail(filter: IFilter) {
    const { model } = this.ctx;
    let user = await model.User.findOne({
      where: filter,
      attributes: ['id', 'nickname', 'gender', 'avatar', 'birthday', 'amount', 'mobile', 'score', 'signAt', 'signCount', 'inviter', 'inviterCode'],
      raw: true,
    });
    return user;
  }
}
