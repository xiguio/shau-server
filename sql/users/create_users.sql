/*
 * @Author: xigu.io 
 * @Date: 2018-07-09 15:47:37 
 * @Last Modified by: yarn🤡
 * @Last Modified time: 2018-07-09 15:47:58
 * 创建用户表
 */

 CREATE TABLE `users` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(60) NOT NULL DEFAULT '',
  `password` varchar(32) NOT NULL DEFAULT '',
  `gender` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `birthday` int(11) unsigned NOT NULL DEFAULT '0',
  `registerTime` int(11) unsigned NOT NULL DEFAULT '0',
  `lastLoginTime` int(11) unsigned NOT NULL DEFAULT '0',
  `lastLoginIp` varchar(15) NOT NULL DEFAULT '',
  `userLevelId` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `nickname` varchar(60) NOT NULL,
  `mobile` varchar(20) NOT NULL,
  `registerIp` varchar(45) NOT NULL DEFAULT '',
  `avatar` varchar(255) NOT NULL DEFAULT '',
  `weixinOpenid` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_name` (`username`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4;
