/*
 * @Author: xigu.io
 * @Date: 2018-07-01 18:43:58
 * @Last Modified by: yarn🤡
 * @Last Modified time: 2018-07-10 20:44:07
 * 商品分类表
 */
import { Application } from 'egg';
import Sequelize, { INTEGER, STRING, Instance } from 'sequelize';

export interface ISignAttr {
  id: number;
  name: string;
  sort: number;
  score: number;
}

interface ISignInst extends Instance<ISignAttr>, ISignAttr {}

interface ISignModel extends Sequelize.Model<ISignInst, ISignAttr> {}

export default (app: Application) => {
  const sequelize = app.model;

  const sign = sequelize.define('sign', {
    id: {
      type: INTEGER(11).UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: STRING(90),
      allowNull: false,
      defaultValue: '',
    },

    sort: {
      type: INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },

    score: {
      type: INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: 1,
    },
  }, {
    timestamps: false,
    charset: 'utf8mb4',
    initialAutoIncrement: '1',
  }) as ISignModel;

  return sign;
};
