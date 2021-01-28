import { DefaultConfig } from './config.default';

export default () => {
  const config: DefaultConfig = {};
  config.sequelize = {
    dialect: 'mysql',
    database: 'shau',
    host: 'localhost',
    port: 3306,
    username: 'shau',
    password: 'yourpassword',
  };
  return config;
};
