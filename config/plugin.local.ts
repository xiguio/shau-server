/*
 * @Author: qiao
 * @Date: 2018-06-28 11:30:36
 * @Last Modified by: yarn🤡
 * @Last Modified time: 2018-06-28 15:21:47
 * 开发环境插件加载配置
 */
import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  security: {
    enable: false,
  },

  cors: {
    enable: true,
    package: 'egg-cors',
  },
};

export default plugin;
