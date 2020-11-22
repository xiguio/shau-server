/*
 * @Author: xigu.io
 * @Date: 2018-07-09 15:30:02
 * @Last Modified by: yarn🤡
 * @Last Modified time: 2018-07-15 19:10:58
 * 网盘资源表
 */
import { Application } from 'egg';
import Sequelize, { MEDIUMINT, STRING, TEXT, TINYINT, Instance, INTEGER } from 'sequelize';

interface IResourceAttr {
  id?: number;
  categoryId: number;
  title: string;
  thumbnail: string;
  cname: string;
  ename: string;
  years: number;
  producingArea: string;
  releaseDate: string;
  duration: string;
  director: string;
  palywright: string;
  mainRole: string;
  description: string;
  deleted: number;
  createTime: string;
  downloadUrl: string;
  downloadPassword: string;
  originUrl: string;
}

interface IResourceInst extends Instance<IResourceAttr>, IResourceAttr {}

interface IResourceModel extends Sequelize.Model<IResourceInst, IResourceAttr> {}

export default (app: Application) => {
  const sequelize = app.model;

  const resource = sequelize.define('resource', {
    id: {
      type: MEDIUMINT(8).UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    categoryId: {
      type: INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '所属分类id',
    },

    title: {
      type: STRING(128),
      allowNull: false,
      defaultValue: '',
      comment: '标题',
    },

    thumbnail: {
      type: STRING(256),
      allowNull: true,
      defaultValue: '',
      comment: '缩略图',
    },

    cname: {
      type: STRING(128),
      defaultValue: '',
      comment: '译名',
    },

    ename: {
      type: STRING(128),
      defaultValue: '',
      comment: '片名',
    },

    years: {
      type: INTEGER(11).UNSIGNED,
      defaultValue: 0,
      comment: '年代',
    },

    producingArea: {
      type: STRING(64),
      defaultValue: '',
      comment: '产地',
    },

    releaseDate: {
      type: STRING(64),
      defaultValue: '',
      comment: '上映日期',
    },

    duration: {
      type: STRING(64),
      defaultValue: '',
      comment: '片长',
    },

    director: {
      type: STRING(128),
      defaultValue: '',
      comment: '导演',
    },

    palywright: {
      type: STRING(255),
      defaultValue: '',
      comment: '编剧',
    },

    mainRole: {
      type: STRING(255),
      defaultValue: '',
      comment: '主演',
    },

    description: {
      type: TEXT(),
      defaultValue: '',
      comment: '简介',
    },

    deleted: {
      type: TINYINT(1).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '是否已删除',
    },

    createTime: {
      type: STRING(13),
      allowNull: false,
      defaultValue: 0,
      comment: '创建时间',
    },

    downloadUrl: {
      type: STRING(128),
      defaultValue: '',
      comment: '下载链接',
    },

    downloadPassword: {
      type: STRING(128),
      defaultValue: '',
      comment: '资源密码',
    },

    originUrl: {
      type: STRING(128),
      defaultValue: '',
      comment: '原始页面链接',
    },
  }, {
    timestamps: false,
    charset: 'utf8mb4',
    initialAutoIncrement: '1',
  }) as IResourceModel;

  return resource;
};
