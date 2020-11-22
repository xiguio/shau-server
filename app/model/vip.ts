/*
 * @Author: xigu.io
 * @Date: 2018-07-01 13:13:34
 * @Last Modified by: yarn🤡
 * @Last Modified time: 2018-07-02 14:09:51
 * 会员等级表
 */

import { Application } from 'egg';
import Sequelize, { INTEGER, STRING, TINYINT, Instance } from 'sequelize';

interface IVipAttr {
  id: number;
  name: string;
  score: number;
  consumeScore: number,
  rechargeScore: number,
  inviteScore: number,
  description: string;
  image: string;
  isShowInProgress: number;
}

interface IVipInst extends Instance<IVipAttr>, IVipAttr {
}

interface IVipModel extends Sequelize.Model<IVipInst, IVipAttr> {
}

export default (app: Application) => {
  const sequelize = app.model;

  const vip = sequelize.define('vip', {
    id: {
      type: INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },

    score: {
      type: INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '积分余额',
    },

    consumeScore: {
      type: INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '当前等级每消费1元得n积分',
    },

    rechargeScore: {
      type: INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '当前等级每充值1元得n积分',
    },

    inviteScore: {
      type: INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '当前等级每邀请1人得n积分',
    },

    description: {
      type: Sequelize.TEXT,
      allowNull: false,
      defaultValue: '',
    },

    image: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },

    isShowInProgress: {
      type: TINYINT(1).UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: '是否在进度条显示： 1 显示， 0不显示',
    },
  }, {
    timestamps: false,
    charset: 'utf8mb4',
    // 设置增长初始值
    initialAutoIncrement: '10000',
  }) as IVipModel;

  return vip;
};