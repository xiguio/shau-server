import { DefaultConfig } from './config.default';

export default () => {
  const config: DefaultConfig = {};
  config.sequelize = {
    dialect: 'mysql',
    database: 'vstore',
    host: 'localhost',
    port: 3306,
    username: 'vstore',
    password: 'yourpassword',
  };
  return config;
};
