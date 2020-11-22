CREATE TABLE `user_coupons` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `coupon_id` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `coupon_number` varchar(20) NOT NULL DEFAULT '',
  `userId` int(11) unsigned NOT NULL DEFAULT '0',
  `used_time` int(10) unsigned NOT NULL DEFAULT '0',
  `order_id` mediumint(8) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`)
) ENGINE=MyISAM AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4;