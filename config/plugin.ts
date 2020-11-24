/*
 * @Author: xigu.io
 * @Date: 2018-06-28 15:18:18
 * @Last Modified by: yarn🤡
 * @Last Modified time: 2020-08-18 14:47:09
 * 插件加载开关配置，所有插件都需要在这里设置开关
 */

import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },

  validate: {
    enable: true,
    package: 'egg-validate',
  },

  userrole: {
    package: 'egg-userrole',
  },
  
  security: {
    enable: false,
  },

  redis: {
    enable: true,
    package: 'egg-redis',
  }

};

export default plugin;
