import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  const apiPrefix = app.config.apiPrefix;

  const needLogin = app.role.can('login');

  router.get('/', controller.home.index);
  router.get(apiPrefix + '/home/list', controller.home.list);

  // 网盘资源
  router.get(apiPrefix + '/resource/list', controller.resource.list);
  router.get(apiPrefix + '/resource/detail', controller.resource.detail);
  
  // 分类
  router.get(apiPrefix + '/category/list', controller.category.list);

  // 用户相关
  router.get(apiPrefix + '/user/list', needLogin, controller.user.list);
  router.post(apiPrefix + '/user/update', needLogin, controller.user.update);
  router.get(apiPrefix + '/user/detail', needLogin, controller.user.detail);
  
  // 会员等级列表
  router.get(apiPrefix + '/vip/list', controller.vip.list);

  // 微信登录
  router.post(apiPrefix + '/auth/wechatMPLogin', controller.auth.wechatMPLogin);

  // 系统设置
  router.get(apiPrefix + '/system/index', controller.system.index);
};
