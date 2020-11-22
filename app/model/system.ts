/*
 * @Author: xigu.io
 * @Date: 2018-07-09 15:30:02
 * @Last Modified by: yarn🤡
 * @Last Modified time: 2018-07-15 19:10:58
 * 系统设置表
 */
import { Application } from 'egg';
import Sequelize, { MEDIUMINT, STRING, TINYINT, Instance } from 'sequelize';

interface ISystemAttr {
  id?: number;
  name: string;
  about: string;
  isConcise: number;
}

interface ISystemInst extends Instance<ISystemAttr>, ISystemAttr {}

interface ISystemModel extends Sequelize.Model<ISystemInst, ISystemAttr> {}

export default (app: Application) => {
  const sequelize = app.model;

  const system = sequelize.define('system', {
    id: {
      type: MEDIUMINT(8).UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: STRING(60),
      allowNull: false,
      defaultValue: '',
    },

    about: {
      type: Sequelize.TEXT,
      allowNull: false,
      defaultValue: '',
    },

    isConcise: {
      type: TINYINT(1).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '是否是简洁模式',
    },
  }, {
    timestamps: false,
    charset: 'utf8mb4',
    initialAutoIncrement: '10000',
  }) as ISystemModel;

  return system;
};
