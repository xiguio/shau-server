/*
 Navicat Premium Data Transfer

 Source Server         : 本地
 Source Server Type    : MySQL
 Source Server Version : 50723
 Source Host           : localhost:3306
 Source Schema         : vstore

 Target Server Type    : MySQL
 Target Server Version : 50723
 File Encoding         : 65001

 Date: 24/11/2020 17:12:06
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
  `cname` varchar(128) DEFAULT '',
  `ename` varchar(128) DEFAULT '',
  `years` int(11) unsigned DEFAULT '0',
  `producingArea` varchar(64) DEFAULT '',
  `releaseDate` varchar(64) DEFAULT '',
  `duration` varchar(64) DEFAULT '',
  `director` varchar(128) DEFAULT '',
  `palywright` varchar(255) DEFAULT '',
  `mainRole` varchar(255) DEFAULT '',
  `description` text,
  `deleted` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `createTime` varchar(13) NOT NULL DEFAULT '0',
  `downloadUrl` varchar(128) DEFAULT '',
  `downloadPassword` varchar(128) DEFAULT '',
  `originUrl` varchar(128) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of resources
-- ----------------------------
BEGIN;
INSERT INTO `resources` VALUES (1, 1, '《姜子牙》百度云电影-在线观看-超清BD1080P|国语中字（2020）', 'https://img.xigu.pro/vstore/0b46f21fbe096b63957eb82e1c338744ebf8ac6d.jpeg', '姜子牙', 'Jiangziya', 0, '中国大陆', '2020-01-25', '90分钟', '程腾 / 李炜', '', '', '动画电影《姜子牙》的故事发生于封神大战之后。昆仑弟子姜子牙，率领众神战胜狐妖，推翻了残暴的商王朝，赢得封神大战的胜利，即将受封为众神之长。在巅峰时刻，他却因一时之过被贬下凡间。失去神力，被世人唾弃。为重回昆仑，姜子牙踏上旅途。在战后的废墟之上，他重新找到了自我，也发现了当年一切的真相。', 0, '0', 'https://pan.baidu.com/s/19JY60-CHLYvhiw5ZxlUS-A', 's7tn', 'https://www.rrdyw.cc/movie/2019/1215/7111.html');
INSERT INTO `resources` VALUES (2, 1, '《新变种人》百度云网盘电影|在线观看uc网盘|超清BD1080P|中字下载（2020）', 'https://img.xigu.pro/vstore/20201118101752845.jpg', '新变种人', 'X-Men: The New Mutants', 0, '美国', '2020-08-28', '98分钟', '约什·布恩', '约什·布恩 / 内特·李 / 克里斯·克雷蒙 / 莱恩·韦恩 / 戴夫·科克勒姆 / Bob McLeod', '麦茜·威廉姆斯 / 安雅·泰勒-乔伊 / 艾莉丝·布拉加 / 安东尼奥·班德拉斯 / 查理·希顿 / 海皮·安德森 / 亨利·扎格 / 布鲁·亨特 / 莎拉·贝纳尼 / Colbi Gannett / Tony Saquett / Thomas Kee / Mickey Gilmore / Jeffrey Corazzini', '当五位拥有特殊能力的青少年被关入秘密机构，有一股超自然恶势力正蠢蠢欲动，他们必须面对过去的罪恶，但内心的恐惧即将成真。神秘的背后似乎有巨大的阴谋正在成形，他们是否能勇敢对抗自身的力量，逃脱这一切枷锁……', 0, '0', 'https://pan.baidu.com/s/19JY60-CHLYvhiw5ZxlUS-A', 'aqzi', 'https://www.rrdyw.cc/movie/2020/1106/14176.html');
INSERT INTO `resources` VALUES (3, 1, '《一点就到家》百度云网盘电影|在线观看uc网盘|超清BD1080P|中字下载（2020）', 'https://img.xigu.pro/vstore/C58A7319EC17A102FEFC19B79157CAEC_w333h466.jpg', '一点就到家', 'Coffee or Tea', 0, '中国大陆', '2020-10-04', '97分钟', '许宏宇', '张冀 / 周运海', '刘昊然 / 彭昱畅 / 尹昉 / 谭卓 / 张琪 / 李佳琦', '魏晋北（刘昊然 饰）、彭秀兵（彭昱畅 饰）、李绍群（尹昉 饰）三个性格迥异的年轻人从大城市回到云南千年古寨，机缘巧合下共同创业，与古寨“格格不入”的他们用真诚改变了所有人，开启了一段非常疯狂、纯真的梦想之旅。', 0, '0', 'https://pan.baidu.com/s/19JY60-CHLYvhiw5ZxlUS-A', 's7tn', 'https://www.rrdyw.cc/movie/2019/1215/7111.html');
INSERT INTO `resources` VALUES (4, 1, '《鲍勃的圣诞礼物》百度云网盘电影|在线观看uc网盘|超清BD1080P|中字下载（2020）', 'https://img.xigu.pro/vstore/fa637ec82e9c41f1a22a13bd67210f13.jpeg', '鲍勃的圣诞礼物', 'A Gift From Bob', 0, '英国', '2020-11-06', '90分钟', '查尔斯·马丁·史密斯', '加里·詹金斯', '卢克·崔德威 / 猫鲍勃 / 安娜·威尔逊-琼斯 / 克里斯蒂娜·托内瑞·杨 / 妮娜·瓦迪娅 / 蒂姆· 普莱斯特 / 斯特芬·马克尔 / 法尔杜特·夏尔马 / 塞林·琼斯 / Daisy Badger / Sheena Bhattessa / 波皮·露 / Jamie Bacon / Stuart Whelan / Gerard Miller / 丹尼尔·厄根 / 艾拉·贾维斯 / 夏兰·凯利', '2016年的动物剧情喜剧《流浪猫鲍勃》将拍续集《鲍勃的礼物》(A Gift From Bob)，而主演小哥卢克·崔德威宣布回归，将继续饰演街头艺术家James Bowen，续集也继续聚焦他与闯入自己生活的流浪橘猫的故事。 《鲍勃的礼物》由查尔斯·马丁·史密斯(《一条狗的回家路》《海豚的故事》)执导，本月在伦敦开拍，预计2020年12月上映。', 0, '0', 'https://pan.baidu.com/s/19JY60-CHLYvhiw5ZxlUS-A', 's7tn', 'https://www.rrdyw.cc/movie/2019/1215/7111.html');
INSERT INTO `resources` VALUES (5, 4, '《在这世界的（还有更多的）角落》百度云网盘电影|在线观看uc网盘|超清BD1080P|中字下载（2019）', 'https://img.xigu.pro/vstore/83cec5a8efef4886b90e1f4c32a2a830.jpeg', '在这世界的角落', '', 0, '日本', '2019-12-20', '159分钟(特别先行版) / 168分钟', '片渊须直', '片渊须直', '能年玲奈 / 细谷佳正 / 尾身美词 / 稻叶菜月 / 岩井七世 / 小野大辅 / 潘惠美 / 牛山茂 / 新谷真弓 / 京田尚子 / 小山刚志 / 世弥きくよ / たちばなことね / 瀬田ひろ美 / 津田真澄 / 澁谷天外', '铃嫁给了周作，开始了在广岛县吴市的生活。正值1944年，日本处于战乱之中。当战况越发严峻，生活变得更加困难起来，但铃依然努力维持着日常生活。一天，她在花街遇见了凛。尽管有着不同境遇，她们产生了共鸣，逐渐熟悉起来。直到某天，铃意识到了凛和丈夫周作之间的联系，但她选择将秘密深埋心底。第二年，吴市遭到大规模的空袭，而铃也失去了她珍视的事物。', 0, '0', 'https://pan.baidu.com/s/19JY60-CHLYvhiw5ZxlUS-A', 's7tn', 'https://www.rrdyw.cc/movie/2019/1215/7111.html');
INSERT INTO `resources` VALUES (6, 1, '《女巫》百度云网盘电影|在线观看uc网盘|超清BD1080P|中字下载（2020）', 'https://img.xigu.pro/vstore/t01b0c729eb2f1e2fff.jpg', '怪诞黑巫后(港) / 女巫再现', 'witches', 0, '美国', '2020-10-22', '106分钟', '罗伯特·泽米吉斯', '罗伯特·泽米吉斯 / 肯尼亚·巴里斯 / 吉尔莫·德尔·托罗 / 罗尔德·达尔', '安妮·海瑟薇 / 奥克塔维亚·斯宾瑟 / 斯坦利·图齐 / 克里斯汀·肯诺恩斯 / 克里斯·洛克 / 查尔斯·爱德华兹 / 尤吉尼亚·克鲁索 / 西蒙·曼永达 / 菲利普·斯波 / 安格斯·瑞特 / 奥尔拉·欧鲁尔克 / 吉米·斯达', '该片基于罗尔德·达尔（《查理和巧克力工厂》原著作者）所著同名儿童小说，部分设定在挪威，部分设定在英国，讲述一个7岁小男孩和祖母住在一起，这个世界中存在着邪恶女巫，某次他偶遇女巫，被变成了老鼠，他必须尽力阻止她们破坏世界。', 0, '0', 'https://pan.baidu.com/s/19JY60-CHLYvhiw5ZxlUS-A', 's7tn', 'https://www.rrdyw.cc/movie/2019/1215/7111.html');
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of systems
-- ----------------------------
BEGIN;
INSERT INTO `systems` VALUES (1, '影视多', '电影电视剧网盘资源', 100);
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
  `mobile` varchar(20) NOT NULL,
  `registerIp` varchar(45) NOT NULL DEFAULT '',
  `avatar` varchar(255) DEFAULT '',
  `weixinOpenid` varchar(50) DEFAULT '',
  `weixinUnionid` varchar(50) DEFAULT '',
  `amount` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
  `score` int(11) unsigned NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mobile` (`mobile`),
  UNIQUE KEY `mobile_2` (`mobile`),
  UNIQUE KEY `mobile_3` (`mobile`),
  UNIQUE KEY `mobile_4` (`mobile`),
  UNIQUE KEY `mobile_5` (`mobile`),
  UNIQUE KEY `mobile_6` (`mobile`),
  UNIQUE KEY `mobile_7` (`mobile`),
  UNIQUE KEY `mobile_8` (`mobile`),
  UNIQUE KEY `mobile_9` (`mobile`),
  UNIQUE KEY `mobile_10` (`mobile`),
  UNIQUE KEY `mobile_11` (`mobile`),
  UNIQUE KEY `mobile_12` (`mobile`),
  UNIQUE KEY `mobile_13` (`mobile`),
  UNIQUE KEY `mobile_14` (`mobile`),
  UNIQUE KEY `mobile_15` (`mobile`),
  UNIQUE KEY `mobile_16` (`mobile`),
  UNIQUE KEY `mobile_17` (`mobile`),
  UNIQUE KEY `mobile_18` (`mobile`),
  UNIQUE KEY `mobile_19` (`mobile`),
  UNIQUE KEY `mobile_20` (`mobile`),
  UNIQUE KEY `mobile_21` (`mobile`),
  UNIQUE KEY `mobile_22` (`mobile`),
  UNIQUE KEY `mobile_23` (`mobile`),
  UNIQUE KEY `mobile_24` (`mobile`),
  UNIQUE KEY `mobile_25` (`mobile`),
  UNIQUE KEY `mobile_26` (`mobile`),
  UNIQUE KEY `mobile_27` (`mobile`),
  UNIQUE KEY `mobile_28` (`mobile`),
  UNIQUE KEY `mobile_29` (`mobile`),
  UNIQUE KEY `mobile_30` (`mobile`),
  UNIQUE KEY `mobile_31` (`mobile`),
  UNIQUE KEY `mobile_32` (`mobile`),
  UNIQUE KEY `mobile_33` (`mobile`),
  UNIQUE KEY `mobile_34` (`mobile`),
  UNIQUE KEY `mobile_35` (`mobile`),
  UNIQUE KEY `mobile_36` (`mobile`),
  UNIQUE KEY `mobile_37` (`mobile`),
  UNIQUE KEY `mobile_38` (`mobile`),
  UNIQUE KEY `mobile_39` (`mobile`),
  UNIQUE KEY `mobile_40` (`mobile`),
  UNIQUE KEY `mobile_41` (`mobile`),
  UNIQUE KEY `mobile_42` (`mobile`),
  UNIQUE KEY `mobile_43` (`mobile`),
  UNIQUE KEY `mobile_44` (`mobile`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES (1, 1, '0', '1606103586186', '1606199306827', '', 'yarn🤡', '', '', 'https://thirdwx.qlogo.cn/mmopen/vi_32/ajNVdqHZLLDzbUqiahRwfcznlYqtRaBdgC7TmqibkUm6icrUJA34geWGl68yxz16ichMhIrO4rdOyxEnun8kcXWVBw/132', 'oZLnK5drnb8Fw0P3ngG_cnrwms1Q', '', 0.00, 0);
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
