import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

// for config.{env}.ts
export type DefaultConfig = PowerPartial<EggAppConfig & IBizConfig>;

// app special config scheme
export interface IBizConfig {
  sourceUrl: string;
  apiPrefix: string;
  sequelize: {
    dialect: string;
    database: string;
    host: string;
    port: number;
    username: string;
    password: string;
    // 数据库表名前缀
    tablePrefix: string;
  };
  // jwt 会话设置
  jwtSession: {
    enable: boolean;
    match: RegExp[];
    // 设置token 的http header name
    tokenHeader: string;
    // jwt 的加密字符串
    secret: string;
  };
  // wechat 设置
  wechat: {
    appid: string;
    // 小程序密钥
    secret: string;
    // 商户帐号ID
    mch_id: string;
    // 微信支付密钥
    partner_key: string;
    // 微信异步通知，例：https://www.nideshop.com/api/pay/notify
    notify_url: string;
  };
}

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig> & IBizConfig;

  // app special config
  config.sourceUrl = `https://github.com/eggjs/examples/tree/master/${appInfo.name}`;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1530154885564_2259';

  // 微信配置
  config.wechat = {
    appid: 'wxa9475bcd73043e65',
    secret: 'c948e6fbc75b2486e5f7b78032503355',
    mch_id: '',
    partner_key: '',
    notify_url: '',
  };

  // add your config here
  config.middleware = [
    'jwtSession',
    'responseHandler',
  ];

  // 为中间件过滤请求
  config.responseHandler = {
    enable: true,
    match: [
      /\/api\//,
    ],
  };

  // 为jwt中间件设置config
  config.jwtSession = {
    enable: true,
    match: [
      /\/api\//,
    ],
    tokenHeader: 'X-VStore-Token',
    secret: 'S3LDLKdf2KDS3s23ssdd@#@@d%gf',
  };

  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'vstore',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'TAMMENY',
    tablePrefix: '',
  };

  config.validate = {
    convert: true,
    widelyUndefined: true,
  };

  config.redis = {
    client: {
      port: 6379,
      host: '127.0.0.1',
      password: '',
      keyPrefix: 'member:',
      db: 0,
    }
  };

  config.apiPrefix = '/api';
  return config;
};
