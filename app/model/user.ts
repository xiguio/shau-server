/*
 * @Author: xigu.io
 * @Date: 2018-07-09 15:30:02
 * @Last Modified by: yarn🤡
 * @Last Modified time: 2018-07-15 19:10:58
 * 用户表
 */
import { Application } from 'egg';
import Sequelize, { MEDIUMINT, STRING, TINYINT, Instance, INTEGER, DECIMAL } from 'sequelize';

interface IUserAttr {
  id?: number;
  gender: number;
  birthday?: number;
  registerTime: number;
  lastLoginTime: number;
  lastLoginIp?: string;
  nickname: string;
  mobile: string;
  registerIp?: string;
  avatar?: string;
  weixinOpenid?: string;
  weixinUnionid?: string;
  amount: number;
  score: number;
}

interface IUserInst extends Instance<IUserAttr>, IUserAttr {
  userId: number;
}

interface IUserModel extends Sequelize.Model<IUserInst, IUserAttr> {
  reduceAmount: (money: number, userId: number, codeTime: string, title: string) => Promise<{ affectedCount: number; amount: number; recordId: number; }>;
}

export default (app: Application) => {
  const sequelize = app.model;

  const user = sequelize.define('user', {
    id: {
      type: MEDIUMINT(8).UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    gender: {
      type: TINYINT(1).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },

    birthday: {
      type: STRING(13),
      allowNull: false,
      defaultValue: 0,
    },

    registerTime: {
      type: STRING(13),
      allowNull: false,
      defaultValue: 0,
    },

    lastLoginTime: {
      type: STRING(13),
      allowNull: false,
      defaultValue: 0,
    },

    lastLoginIp: {
      type: STRING(15),
      allowNull: false,
      defaultValue: '',
    },

    nickname: {
      type: STRING(60),
      allowNull: false,
    },

    mobile: {
      type: STRING(20),
      allowNull: false,
      unique: true,
    },

    registerIp: {
      type: STRING(45),
      allowNull: false,
      defaultValue: '',
    },

    avatar: {
      type: STRING(255),
      allowNull: true,
      defaultValue: '',
    },

    weixinOpenid: {
      type: STRING(50),
      allowNull: true,
      defaultValue: '',
    },

    weixinUnionid: {
      type: STRING(50),
      allowNull: true,
      defaultValue: '',
    },

    amount: {
      type: DECIMAL(10, 2).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '账户余额',
    },

    score: {
      type: INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: '积分余额',
    },
  }, {
    timestamps: false,
    charset: 'utf8mb4',
    initialAutoIncrement: '10000',
  }) as IUserModel;

  return user;
};
