/*
 * @Author: qiao
 * @Date: 2018-07-01 11:15:47
 * @Last Modified by: yarn🤡
 * @Last Modified time: 2018-07-17 15:13:54
 * app启动文件，用于自定义启动时的初始化工作,只返回一个函数
 */
import { Application } from 'egg';
import useRole from './app/auth/role';

export default (app: Application) => {
  const { logger } = app;
  // 添加自定义校验规则
  const validator = app.validator;
  validator.addRule('numberString', (rule, value: string) => {
    // 不用校验required，只需要做类型转换和max与min的校验，如果require为false，并且
    // 参数中没有value，则不会调用此函数
    logger.info(rule);
    logger.info(value);

    const field = rule.field;
    if (!field) {
      throw new Error('validate error: the field is not set! the params is: ' + value);
    }
    // 正则校验
    const re = /^\d+(\.\d+)?$/;
    if (!re.test(value)) {
      throw new Error(`validate error: the value (${value}) is not a number! `);
    }

    const num = parseInt(value, 10);
    if (rule.max !== undefined && num > rule.max) {
      throw new Error(`validate error: the value (${value}) is bigger then ${rule.max}!`);
    }

    if (rule.min !== undefined && num < rule.min) {
      throw new Error(`validate error: the value (${value}) is smaller then ${rule.min}!`);
    }
    // params[field] = num;
  });

  app.beforeStart(async () => {

    app.logger.info('app beforeStart');

    if (app.env === 'local') {
      // app.logger.info('sync db ...');
      await app.model.sync({ alter: true });
      // app.logger.info('sync db completed ...');
    }
  });

  // 加载egg-userrole配置
  useRole(app);
 };
