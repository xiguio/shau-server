CREATE TABLE `addresses` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '',
  `userId` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `country_id` smallint(5) NOT NULL DEFAULT '0',
  `province_id` smallint(5) NOT NULL DEFAULT '0',
  `city_id` smallint(5) NOT NULL DEFAULT '0',
  `district_id` smallint(5) NOT NULL DEFAULT '0',
  `address` varchar(120) NOT NULL DEFAULT '',
  `mobile` varchar(60) NOT NULL DEFAULT '',
  `is_default` tinyint(1) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;