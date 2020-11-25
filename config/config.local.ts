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

  config.cors = {
    origin: 'http://localhost:7001',
    // 允许跨域的时候，request携带cookie
    credentials: true,
  };

  return config;
};
