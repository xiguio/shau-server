/*
 * @Author: xigu.pro
 * @Date: 2018-07-09 15:30:02
 * @Last Modified by: yarn🤡
 * @Last Modified time: 2018-07-15 19:10:58
 * 积分记录表
 */
import { Application } from 'egg';
import Sequelize, { MEDIUMINT, STRING, TEXT, TINYINT, Instance, INTEGER, literal } from 'sequelize';
import { StatusError } from '../entity/status_error';

interface IScoreAttr {
  id?: number;
  title: string;
  content: string;
  type: number;
  userId: number;
  score: number;
  totalScore: number;
  createTime: number;
}

interface IScoreInst extends Instance<IScoreAttr>, IScoreAttr {}

interface IScoreModel extends Sequelize.Model<IScoreInst, IScoreAttr> {
  add: (userId: number, value: number, title: string, content?: string) => Promise<{ affectedCount: number; score: number; scoreId: number; }>;
}

export default (app: Application) => {
  const sequelize = app.model;

  const score = sequelize.define('score', {
    id: {
      type: MEDIUMINT(8).UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    title: {
      type: STRING(128),
      allowNull: false,
      defaultValue: '',
    },

    content: {
      type: TEXT(),
      allowNull: false,
      defaultValue: '',
    },

    type: {
      type: TINYINT(1).UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: '1为支出,2为收入',
    },

    userId: {
      type: INTEGER(11).UNSIGNED,
      allowNull: false,
    },

    score: {
      type: INTEGER(11).UNSIGNED,
      defaultValue: 0,
      comment: '积分',
    },

    totalScore: {
      type: INTEGER(11).UNSIGNED,
      defaultValue: 0,
      comment: '总积分',
    },

    createTime: {
      type: STRING(13),
      allowNull: false,
      defaultValue: 0,
    }
  }, {
    timestamps: false,
    charset: 'utf8mb4',
    initialAutoIncrement: '10000',
  }) as IScoreModel;

  /**
   * 给用户添加积分，并记录积分流水
   * @param userId 用户id
   * @param value 要加的积分值
   * @param title 积分明细标题
   * @param content 积分明细内容
   */
  score.add = async (userId: number, value: number, title: string, content?: string)  => sequelize.transaction(async transaction => {
    const user = await app.model.User.findOne({
      where: { id: userId },
      attributes: ['score'],
      transaction,
    });
    if (!user) {
      throw new StatusError('用户不存在', StatusError.ERROR_STATUS.DATA_ERROR);
    }
    // 更新用户积分
    const [affectedCount] = await app.model.User.update(
      { score: literal(`score+${value}`) },
      { where: { id: userId }, transaction },
    );
    // 插入积分明细
    const result = await app.model.Score.create({
      title,
      content: content || title,
      type: 1,
      createTime: Date.now(),
      userId,
      score: value,
      totalScore: +user.score + value,
    }, { transaction });
    return { affectedCount, score: value, scoreId: result.id };
  });

  return score;
};
