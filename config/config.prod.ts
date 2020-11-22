import { DefaultConfig } from './config.default';

export default () => {
  const config: DefaultConfig = {};
  config.sequelize = {
    dialect: 'mysql',
    database: 'piandd',
    host: 'rm-uf6a5e9knb2920pd9ao.mysql.rds.aliyuncs.com',
    port: 3306,
    username: 'piandd',
    password: '20wGbJv1R6eYyCI3',
  };
  return config;
};
