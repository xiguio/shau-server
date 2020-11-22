/*
 * @Author: xigu.io
 * @Date: 2018-07-15 14:52:42
 * @Last Modified by: yarn🤡
 * @Last Modified time: 2018-07-15 19:41:26
 * 解析jwt session的中间件
 * egg-session 与 egg-passport 都是基于 cookie来实现会话的，不知道
 * 从header中获取session应该怎么控制，只好自己实现一个session中间件
 */
import { Context } from 'egg';
import * as jwt from 'jsonwebtoken';

export default () => {
  return async function parseJwtSession(ctx: Context, next) {
    const { request } = ctx;
    const jwtSessionConfig = ctx.app.config.jwtSession;
    const token = request.get(jwtSessionConfig.tokenHeader);
    if (token) {
      // 尝试从http header中获取session
      const sessionInfo = jwt.verify(token, jwtSessionConfig.secret);
      if (sessionInfo && sessionInfo.userId) {
        ctx.logger.info(sessionInfo);
        ctx.jwtSession = sessionInfo;
      }
    }
    await next();
  };
};