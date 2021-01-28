/*
 Navicat Premium Data Transfer

 Source Server         : 本地
 Source Server Type    : MySQL
 Source Server Version : 50723
 Source Host           : localhost:3306
 Source Schema         : shau

 Target Server Type    : MySQL
 Target Server Version : 50723
 File Encoding         : 65001

 Date: 02/12/2020 17:30:46
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for categories
-- ----------------------------
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(90) NOT NULL DEFAULT '',
  `sort` int(10) unsigned NOT NULL DEFAULT '0',
  `parentId` int(11) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of categories
-- ----------------------------
BEGIN;
INSERT INTO `categories` VALUES (1, '电影', 0, 0);
INSERT INTO `categories` VALUES (2, '电视剧', 0, 0);
INSERT INTO `categories` VALUES (3, '综艺', 0, 0);
INSERT INTO `categories` VALUES (4, '动漫', 0, 0);
INSERT INTO `categories` VALUES (6, '喜剧', 1, 1);
INSERT INTO `categories` VALUES (7, '爱情', 1, 1);
INSERT INTO `categories` VALUES (8, '恐怖', 1, 1);
INSERT INTO `categories` VALUES (9, '动作', 1, 1);
INSERT INTO `categories` VALUES (10, '科幻', 1, 1);
INSERT INTO `categories` VALUES (11, '剧情', 1, 1);
INSERT INTO `categories` VALUES (12, '战争', 1, 1);
INSERT INTO `categories` VALUES (13, '警匪', 1, 1);
INSERT INTO `categories` VALUES (14, '犯罪', 1, 1);
INSERT INTO `categories` VALUES (15, '动画', 1, 1);
INSERT INTO `categories` VALUES (16, '奇幻', 1, 1);
INSERT INTO `categories` VALUES (17, '武侠', 1, 1);
INSERT INTO `categories` VALUES (18, '冒险', 1, 1);
INSERT INTO `categories` VALUES (19, '枪战', 1, 1);
INSERT INTO `categories` VALUES (20, '悬疑', 1, 1);
INSERT INTO `categories` VALUES (21, '惊悚', 1, 1);
INSERT INTO `categories` VALUES (22, '经典', 1, 1);
INSERT INTO `categories` VALUES (23, '青春', 1, 1);
INSERT INTO `categories` VALUES (24, '文艺', 1, 1);
INSERT INTO `categories` VALUES (25, '微电影', 1, 1);
INSERT INTO `categories` VALUES (26, '古装', 1, 1);
INSERT INTO `categories` VALUES (27, '历史', 1, 1);
INSERT INTO `categories` VALUES (28, '运动', 1, 1);
INSERT INTO `categories` VALUES (29, '农村', 1, 1);
INSERT INTO `categories` VALUES (30, '儿童', 1, 1);
INSERT INTO `categories` VALUES (31, '网络电影', 1, 1);
COMMIT;

-- ----------------------------
-- Table structure for resources
-- ----------------------------
DROP TABLE IF EXISTS `resources`;
CREATE TABLE `resources` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `categoryId` int(11) unsigned NOT NULL DEFAULT '0',
  `title` varchar(128) NOT NULL DEFAULT '',
  `thumbnail` varchar(256) DEFAULT '',
  `cname` varchar(1024) DEFAULT '',
  `ename` varchar(1024) DEFAULT '',
  `years` int(11) unsigned DEFAULT '0',
  `producingArea` varchar(64) DEFAULT '',
  `releaseDate` varchar(512) DEFAULT '',
  `duration` varchar(512) DEFAULT '',
  `director` varchar(512) DEFAULT '',
  `palywright` varchar(255) DEFAULT '',
  `mainRole` varchar(1024) DEFAULT '',
  `description` text,
  `deleted` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `createTime` varchar(13) NOT NULL DEFAULT '0',
  `downloadUrl` varchar(128) DEFAULT '',
  `downloadPassword` varchar(128) DEFAULT '',
  `originUrl` varchar(128) DEFAULT '',
  `subCategoryId` varchar(128) DEFAULT '',
  `imdbRate` decimal(10,1) unsigned DEFAULT '0.0',
  `doubanRate` decimal(10,1) unsigned DEFAULT '0.0',
  `language` varchar(128) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10623 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for signs
-- ----------------------------
DROP TABLE IF EXISTS `signs`;
CREATE TABLE `signs` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(90) NOT NULL DEFAULT '',
  `sort` int(10) unsigned NOT NULL DEFAULT '0',
  `score` int(11) unsigned NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of signs
-- ----------------------------
BEGIN;
INSERT INTO `signs` VALUES (1, '1天', 1, 1);
INSERT INTO `signs` VALUES (2, '2天', 2, 2);
INSERT INTO `signs` VALUES (3, '3天', 3, 4);
INSERT INTO `signs` VALUES (4, '4天', 4, 8);
INSERT INTO `signs` VALUES (5, '5天', 5, 16);
INSERT INTO `signs` VALUES (6, '6天', 6, 32);
INSERT INTO `signs` VALUES (7, '7天', 7, 88);
COMMIT;

-- ----------------------------
-- Table structure for systems
-- ----------------------------
DROP TABLE IF EXISTS `systems`;
CREATE TABLE `systems` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL DEFAULT '',
  `about` text NOT NULL,
  `wechatMPVersion` int(10) unsigned NOT NULL DEFAULT '100',
  `shortDescription` varchar(512) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of systems
-- ----------------------------
BEGIN;
INSERT INTO `systems` VALUES (1, '鲨鱼CMS', '自带裂变属性的CMS', 106, '自带裂变属性的CMS');
COMMIT;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `gender` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `birthday` varchar(13) NOT NULL DEFAULT '0',
  `registerTime` varchar(13) NOT NULL DEFAULT '0',
  `lastLoginTime` varchar(13) NOT NULL DEFAULT '0',
  `lastLoginIp` varchar(15) NOT NULL DEFAULT '',
  `nickname` varchar(60) NOT NULL,
  `mobile` varchar(20) DEFAULT '',
  `registerIp` varchar(45) NOT NULL DEFAULT '',
  `avatar` varchar(255) DEFAULT '',
  `weixinOpenid` varchar(50) DEFAULT '',
  `amount` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
  `score` int(11) unsigned NOT NULL DEFAULT '1',
  `inviterCode` varchar(50) NOT NULL,
  `inviter` varchar(50) DEFAULT '',
  `registerFrom` tinyint(1) unsigned NOT NULL DEFAULT '1',
  `unionid` varchar(50) DEFAULT '',
  `qqOpenid` varchar(50) DEFAULT '',
  `signAt` varchar(50) DEFAULT '',
  `signCount` int(11) unsigned DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10006 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES (10000, 1, '0', '1606383585729', '1606894249870', '', 'yarn🤡', '', '', 'https://thirdwx.qlogo.cn/mmopen/vi_32/ajNVdqHZLLDzbUqiahRwfcznlYqtRaBdgC7TmqibkUm6icrUJA34geWGl68yxz16ichMhIrO4rdOyxEnun8kcXWVBw/132', 'oZLnK5drnb8Fw0P3ngG_cnrwms1Q', 0.00, 1, 'EAYPVGKHM', '', 1, '', '', '1606899971989', 1);
COMMIT;

-- ----------------------------
-- Table structure for vips
-- ----------------------------
DROP TABLE IF EXISTS `vips`;
CREATE TABLE `vips` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `score` int(11) unsigned NOT NULL DEFAULT '0',
  `consumeScore` int(11) unsigned NOT NULL DEFAULT '0',
  `rechargeScore` int(11) unsigned NOT NULL DEFAULT '0',
  `inviteScore` int(11) unsigned NOT NULL DEFAULT '0',
  `description` text NOT NULL,
  `image` varchar(255) NOT NULL DEFAULT '',
  `isShowInProgress` tinyint(1) unsigned NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10004 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of vips
-- ----------------------------
BEGIN;
INSERT INTO `vips` VALUES (10000, '青铜级', 0, 1, 0, 0, '青铜级', 'https://img.xigu.pro/FsNJD14EdK2OGEBeE2e2O01eiyVj', 0);
INSERT INTO `vips` VALUES (10001, '白银级', 88, 2, 0, 0, '白银级', 'https://img.xigu.pro/FsNJD14EdK2OGEBeE2e2O01eiyVj', 1);
INSERT INTO `vips` VALUES (10002, '黄金级', 264, 4, 0, 0, '黄金级', 'https://img.xigu.pro/FsNJD14EdK2OGEBeE2e2O01eiyVj', 1);
INSERT INTO `vips` VALUES (10003, '钻石级', 580, 8, 0, 0, '钻石级', 'https://img.xigu.pro/FsNJD14EdK2OGEBeE2e2O01eiyVj', 1);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
