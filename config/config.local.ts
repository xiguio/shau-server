import { DefaultConfig } from './config.default';

export default () => {
  const config: DefaultConfig = {};

  // 数据库配置
  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'vstore',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'TAMMENY',
  };

  // 微信配置
  config.wechat = {
    appid: 'wx8bdf3c5dbde7654c',
    secret: '76f03a093732839bdbb95794e1896084',
    mch_id: '',
    partner_key: '',
    notify_url: '',
  };

  config.cors = {
    origin: 'http://localhost:7001',
    // 允许跨域的时候，request携带cookie
    credentials: true,
  };

  return config;
};
