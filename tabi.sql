/*
Navicat MySQL Data Transfer

Source Server         : 我的连接
Source Server Version : 50729
Source Host           : localhost:3306
Source Database       : tabi

Target Server Type    : MYSQL
Target Server Version : 50729
File Encoding         : 65001

Date: 2020-04-18 18:19:53
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for area
-- ----------------------------
DROP TABLE IF EXISTS `area`;
CREATE TABLE `area` (
  `areaId` int(11) NOT NULL AUTO_INCREMENT,
  `areaName` varchar(20) NOT NULL,
  `overSea` int(2) NOT NULL,
  `zhou` varchar(20) NOT NULL,
  `picSrc` varchar(64) NOT NULL,
  `about` varchar(1024) DEFAULT NULL,
  `areaName_en` varchar(32) DEFAULT NULL,
  `capital` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`areaId`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of area
-- ----------------------------
INSERT INTO `area` VALUES ('1', '中国大陆', '0', 'Asia', '/area/china.jpg', '中国，是以华夏文明为源泉、中华文化为基础，并以汉族为主体民族的多民族国家，通用汉语、汉字，汉族与少数民族被统称为“中华民族”，又自称为炎黄子孙、龙的传人。\r\n						中国是世界四大文明古国之一，有着悠久的历史，距今约5000年前，以中原地区为中心开始出现聚落组织进而形成国家，后历经多次民族交融和朝代更迭，直至形成多民族国家的大一统局面。20世纪初辛亥革命后，君主政体退出历史舞台，共和政体建立。1949年中华人民共和国成立后，在中国大陆建立了人民代表大会制度的政体。', 'ChinaMainLand', 'Beijing');
INSERT INTO `area` VALUES ('2', '日本国', '1', 'Asia', '/area/japan.jpg', '日本国（日语：にほんこく；英语：Japan），简称“日本”，国名意为“日出之国”，位于东亚，领土由北海道、本州、四国、九州四个大岛及6800多个小岛组成，总面积37.8万平方公里。主体民族为大和族，通用日语，总人口约1.26亿。日本三大都市圈是东京都市圈、大阪都市圈和名古屋都市圈。\r\n						日本是一个太平洋西岸的岛国。西隔东海、黄海、朝鲜海峡、日本海与中国、朝鲜、韩国等国相望。属温带海洋性季风气候，终年温和湿润。6月多梅雨，夏秋季多台风。', 'Japan', 'Tokyo');
INSERT INTO `area` VALUES ('3', '法国', '1', 'Europe', '/area/france.jpg', '法兰西共和国（法语：République française，英语：French Republic，France），简称“法国”，是一个本土位于西欧的半总统共和制国家，海外领土包括南美洲和南太平洋的一些地区。法国为欧洲国土面积第三大、西欧面积最大的国家，东与比利时、卢森堡、德国、瑞士、意大利接壤，南与西班牙、安道尔、摩纳哥接壤。本土地势东南高西北低，大致呈六边形，三面临水，南临地中海，西濒大西洋，西北隔英吉利海峡与英国相望，科西嘉岛是法国最大岛屿。', 'France', 'Paris');
INSERT INTO `area` VALUES ('4', '香港', '0', 'Asia', '/area/hk.jpg', '', 'Hongkong', 'Beijing');
INSERT INTO `area` VALUES ('5', '台湾', '0', 'Asia', '/area/taiwan.jpg', null, 'Taiwan', 'Beijing');
INSERT INTO `area` VALUES ('6', '英国', '1', 'Europe', '/area/britain.jpg', '大不列颠及北爱尔兰联合王国（United Kingdom of Great Britain and Northern Ireland，United Kingdom），简称“英国”。本土位于欧洲大陆西北面的不列颠群岛，被北海、英吉利海峡、凯尔特海、爱尔兰海和大西洋包围。英国是由大不列颠岛上的英格兰、威尔士和苏格兰以及爱尔兰岛东北部的北爱尔兰以及一系列附属岛屿共同组成的一个西欧岛国。除本土之外，其还拥有十四个海外领地， [1]  总人口超过6600万，其中以英格兰人（盎格鲁-撒克逊人）为主体民族，占全国总人口的83.9%。', 'UK', 'London');
INSERT INTO `area` VALUES ('7', '埃及', '1', 'Africa', '/area/Egypt.jpg', null, 'Egypt', 'Cairo');
INSERT INTO `area` VALUES ('8', '卢旺达', '1', 'Africa', '/area/Rwanda.jpg', null, 'Rwanda', 'Kigali');
INSERT INTO `area` VALUES ('9', '摩洛哥', '1', 'Africa', '/area/Morocco.jpg', null, 'Morocco', 'Rabat');
INSERT INTO `area` VALUES ('10', '乌干达', '1', 'Africa', '/area/Uganda.jpg', null, 'Uganda', 'Kampala');
INSERT INTO `area` VALUES ('11', '赞比亚', '1', 'Africa', '/area/Zambia.jpg', null, 'Zambia', 'Lusaka');
INSERT INTO `area` VALUES ('12', '摩纳哥', '1', 'Europe', '/area/Monnaco.jpg', null, 'Monnaco', 'Monaco-Ville');
INSERT INTO `area` VALUES ('13', '奥地利', '1', 'Europe', '/area/Austria.jpg', null, 'Austria', 'Vienna');
INSERT INTO `area` VALUES ('14', '德国', '1', 'Europe', '/area/Germany.jpg', null, 'Germany', 'Berlin');
INSERT INTO `area` VALUES ('15', '澳大利亚', '1', 'Oceania', '/area/Australia.jpg', null, 'Australia', 'Canberra');
INSERT INTO `area` VALUES ('16', '新西兰', '1', 'Oceania', '/area/New Zealand.jpg', null, 'New Zealand', 'Wellington');
INSERT INTO `area` VALUES ('17', '美国', '1', 'NA', '/area/USA.jpg', null, 'USA', 'Washington D.C');
INSERT INTO `area` VALUES ('18', '加拿大', '1', 'NA', '/area/Canada.jpg', '加拿大（英语/法语：Canada），位于北美洲最北端，英联邦国家之一，素有“枫叶之国”的美誉，首都是渥太华。加拿大西抵太平洋，东迄大西洋，北至北冰洋，东北部和丹麦领地格陵兰岛相望，东部和法属圣皮埃尔和密克隆群岛相望，南方与美国本土接壤，西北方与美国阿拉斯加州为邻。领土面积为998.467万平方公里，位居世界第二，人口主要集中在南部五大湖沿岸。著名城市有多伦多、温哥华等。官方语言有英语和法语两种，是典型的双语国家。', 'Canada', 'Ottawa');
INSERT INTO `area` VALUES ('19', '墨西哥', '1', 'NA', '/area/Mexico.jpg', null, 'Mexico', 'Mexico City');
INSERT INTO `area` VALUES ('20', '阿根廷', '1', 'SA', '/area/Argentina.jpg', null, 'Argentina', 'Buenos Aires');
INSERT INTO `area` VALUES ('21', '秘鲁', '1', 'SA', '/area/Peru.jpg', null, 'Peru', 'Lima');
INSERT INTO `area` VALUES ('22', '巴西', '1', 'SA', '/area/Brazil.jpg', null, 'Brazil', 'Brasilia');
INSERT INTO `area` VALUES ('23', '智利', '1', 'SA', '/area/Chile.jpg', null, 'Chile', 'Santiago');
INSERT INTO `area` VALUES ('24', '越南', '1', 'Asia', '/area/Vietnam.jpg', null, 'Vietnam', 'Ha Noi');
INSERT INTO `area` VALUES ('25', '韩国', '1', 'Asia', '/area/South Korea.jpg', null, 'South Korea', 'Seoul');
INSERT INTO `area` VALUES ('26', '马来西亚', '1', 'Asia', '/area/Malaysia.jpg', null, 'Malaysia', 'Kuala Lumpur');
INSERT INTO `area` VALUES ('27', '柬埔寨', '1', 'Asia', '/area/Cambodia.jpg', null, 'Cambodia', 'Phnom Penh');
INSERT INTO `area` VALUES ('28', '印度', '1', 'Asia', '/area/India.jpg', null, 'India', 'New Delhi');
INSERT INTO `area` VALUES ('29', '尼泊尔', '1', 'Asia', '/area/Nepal.jpg', null, 'Nepal', 'Kathmandu');
INSERT INTO `area` VALUES ('30', '新加坡', '1', 'Asia', '/area/Singapore.jpg', null, 'Singapore', 'Singapore City');

-- ----------------------------
-- Table structure for city
-- ----------------------------
DROP TABLE IF EXISTS `city`;
CREATE TABLE `city` (
  `cityId` int(11) NOT NULL AUTO_INCREMENT,
  `cityName` varchar(20) NOT NULL,
  `provinceId` int(11) NOT NULL,
  `cityHeadPic` varchar(64) NOT NULL,
  `profieWord` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`cityId`),
  KEY `province_foreign_provinceId` (`provinceId`),
  CONSTRAINT `province_foreign_provinceId` FOREIGN KEY (`provinceId`) REFERENCES `province` (`provinceId`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of city
-- ----------------------------
INSERT INTO `city` VALUES ('1', '重庆市', '1', '/citys/ch/cq.jpg', 'Exploring Different Visual Feasts in Chongqing');
INSERT INTO `city` VALUES ('2', '成都市', '4', '/citys/ch/cd.jpg', 'Explore the most down-to-earth market');
INSERT INTO `city` VALUES ('3', '北京市', '2', '/citys/ch/bj.jpg', 'Let\'s unveil the Forbidden City');
INSERT INTO `city` VALUES ('4', '上海市', '3', '/citys/ch/sh.jpg', 'Authentic local food tour');
INSERT INTO `city` VALUES ('5', '武汉市', '5', '/citys/ch/wh.jpg', '\r\nExperiences paused due to coronavirus (COVID-19)');
INSERT INTO `city` VALUES ('6', '泸州市', '4', '/citys/ch/luzhou.jpg', 'Explore the most down-to-earth market');
INSERT INTO `city` VALUES ('7', '南充市', '4', '/citys/ch/nanchong.jpg', 'Explore the most down-to-earth market');
INSERT INTO `city` VALUES ('8', '東京都', '6', '/citys/jp/tokyo.jpg', 'Experience the beauty of nature in Japan');
INSERT INTO `city` VALUES ('9', '札幌市', '8', '/citys/jp/sapporo.jpg', 'Experience the beauty of nature in Japan');
INSERT INTO `city` VALUES ('10', '小樽市', '8', '/citys/jp/otaru.jpg', 'Experience the beauty of nature in Japan');
INSERT INTO `city` VALUES ('11', '大阪府', '7', '/citys/jp/osaka.jpg', 'Experience the beauty of nature in Japan');
INSERT INTO `city` VALUES ('12', '高崎市', '10', '/citys/jp/takazaki.jpg', 'Experience the beauty of nature in Japan');
INSERT INTO `city` VALUES ('13', '京都府', '11', '/citys/jp/kyoto.jpg', 'Experience the beauty of nature in Japan');
INSERT INTO `city` VALUES ('14', 'Vancouver', '20', '/citys/ca/Vancouver.jpg', 'Beyond Walking Tour.');
INSERT INTO `city` VALUES ('15', 'Ottawa', '19', '/citys/ca/Ottawa.jpg', 'Beyond Walking Tour.');

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `commentId` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `paysageId` int(11) NOT NULL,
  `comment` varchar(512) NOT NULL,
  `commentTime` date NOT NULL,
  PRIMARY KEY (`commentId`),
  KEY `comment_foreign_userId` (`userId`),
  KEY `comment_foreign_paysageId` (`paysageId`),
  CONSTRAINT `comment_foreign_paysageId` FOREIGN KEY (`paysageId`) REFERENCES `paysage` (`paysageId`),
  CONSTRAINT `comment_foreign_userId` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES ('1', '1', '1', '我走过磁器口的石板小街，去过艺术涂鸦的川美学院，看过洪崖洞旁的江边夜景，拍过现实魔幻的轻轨“穿”楼，坐过新奇复古的长江索道，逛过门庭若市的解放碑……', '2020-04-14');
INSERT INTO `comment` VALUES ('2', '22', '1', '千厮门大桥，这座网红大桥不用特意来看，去解放碑或者洪崖洞的时候就能看见，重庆的夜景很美', '2020-04-13');
INSERT INTO `comment` VALUES ('3', '23', '1', '想去重庆 吃最辣的火锅 赏洪崖洞迷人的夜景', '2020-04-01');
INSERT INTO `comment` VALUES ('4', '24', '1', 'Superb experience in Chongqing. I would recommend everyone to try it. It was such an efficient tour that you would check out the most popular spots in one day with Patrick’s local tips and well planned route. ', '2020-03-20');
INSERT INTO `comment` VALUES ('5', '25', '1', '疯狂好评!!就是看洪崖洞吊脚楼啦，还有江景，确实比武汉好看', '2020-03-21');
INSERT INTO `comment` VALUES ('6', '26', '1', '重庆 重庆 重庆，漫游重庆 去洪崖洞，大足石刻，二厂，钟书阁，夜景公园，打卡网红景点……从你的全世界路过', '2020-03-18');
INSERT INTO `comment` VALUES ('10', '1', '1', 'eat lemon,eat lemon', '2019-12-28');
INSERT INTO `comment` VALUES ('11', '1', '1', 'Zzzzzzzz', '2020-04-18');
INSERT INTO `comment` VALUES ('12', '1', '2', '磁器口古镇,很漂亮.', '2020-04-18');

-- ----------------------------
-- Table structure for hotarea
-- ----------------------------
DROP TABLE IF EXISTS `hotarea`;
CREATE TABLE `hotarea` (
  `hotAreaId` int(11) NOT NULL AUTO_INCREMENT,
  `hotWord` varchar(64) NOT NULL,
  `hotPic1` varchar(64) NOT NULL,
  `hotPic2` varchar(64) NOT NULL,
  `areaId` int(11) NOT NULL,
  PRIMARY KEY (`hotAreaId`),
  KEY `areaId_foreign` (`areaId`),
  CONSTRAINT `areaId_foreign` FOREIGN KEY (`areaId`) REFERENCES `area` (`areaId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hotarea
-- ----------------------------
INSERT INTO `hotarea` VALUES ('1', '华夏文明为源泉', '/hotArea/bj1.jpg', '/hotArea/bj2.jpg', '1');
INSERT INTO `hotarea` VALUES ('2', '唯美和风 浪漫物語', '/hotArea/jp1.jpg', '/hotArea/jp2.jpg', '2');
INSERT INTO `hotarea` VALUES ('3', 'Vive la France!!', '/hotArea/fr1.jpg', '/hotArea/fr2.jpg', '3');
INSERT INTO `hotarea` VALUES ('4', '畅游香港', '/hotArea/hk1.jpg', '/hotArea/hk2.jpg', '4');
INSERT INTO `hotarea` VALUES ('5', '正宗台湾大鸡排', '/hotArea/tw1.jpg', '/hotArea/tw2.jpg', '5');
INSERT INTO `hotarea` VALUES ('6', '探索英伦之道', '/hotArea/uk1.jpg', '/hotArea/uk2.jpg', '6');

-- ----------------------------
-- Table structure for hotcity
-- ----------------------------
DROP TABLE IF EXISTS `hotcity`;
CREATE TABLE `hotcity` (
  `hotCityId` int(11) NOT NULL AUTO_INCREMENT,
  `cityId` int(11) NOT NULL,
  `hotWords` varchar(64) NOT NULL,
  `hotCityPic` varchar(64) NOT NULL,
  `areaId` int(11) DEFAULT NULL,
  PRIMARY KEY (`hotCityId`),
  UNIQUE KEY `cityId_unique` (`cityId`),
  KEY `hotCity_areId_forengn` (`areaId`),
  CONSTRAINT `hotCity_areId_forengn` FOREIGN KEY (`areaId`) REFERENCES `area` (`areaId`),
  CONSTRAINT `hotCity_id_foreign` FOREIGN KEY (`cityId`) REFERENCES `city` (`cityId`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hotcity
-- ----------------------------
INSERT INTO `hotcity` VALUES ('1', '1', 'The most beautiful mountain city', '/hotCity/cq1', '1');
INSERT INTO `hotcity` VALUES ('2', '2', 'Discover Pandas and Hot Pot tour', '/hotCity/cd1', '1');
INSERT INTO `hotcity` VALUES ('3', '8', 'Blue Sky and Blossom Tokyo Tower', '/hotCity/tk1', '2');
INSERT INTO `hotcity` VALUES ('4', '4', 'Building Shanghai Tower', '/hotCity/sh1', '1');
INSERT INTO `hotcity` VALUES ('5', '3', 'The Palace Museum ', '/hotCity/bj1', '1');
INSERT INTO `hotcity` VALUES ('6', '9', 'The most biggest City in Hokkaido', '/hotCity/sapporo1', '2');
INSERT INTO `hotcity` VALUES ('7', '11', 'Japan Osaka River', '/hotCity/osaka1', '2');
INSERT INTO `hotcity` VALUES ('8', '13', 'Over 2000 of shrines in Kyoto', '/hotCity/kyoto1', '2');

-- ----------------------------
-- Table structure for img
-- ----------------------------
DROP TABLE IF EXISTS `img`;
CREATE TABLE `img` (
  `picId` int(11) NOT NULL AUTO_INCREMENT,
  `paysageId` int(11) NOT NULL,
  `srcPath` varchar(64) NOT NULL,
  `picProfie` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`picId`),
  KEY `pic_foreign_paysageId` (`paysageId`),
  CONSTRAINT `pic_foreign_paysageId` FOREIGN KEY (`paysageId`) REFERENCES `paysage` (`paysageId`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of img
-- ----------------------------
INSERT INTO `img` VALUES ('1', '1', '/paysage/main/ch/hyd1.jpg', '洪崖洞景点入口');
INSERT INTO `img` VALUES ('2', '1', '/paysage/main/ch/hyd2.jpg', '洪崖洞白天全貌');
INSERT INTO `img` VALUES ('3', '1', '/paysage/main/ch/hyd3.jpg', '洪崖洞夜景');
INSERT INTO `img` VALUES ('4', '1', '/paysage/main/ch/hyd4.jpg', '网红大桥-千厮门大桥');
INSERT INTO `img` VALUES ('5', '1', '/paysage/main/ch/hyd5.jpg', '洪崖洞夜景');
INSERT INTO `img` VALUES ('6', '1', '/paysage/main/ch/hyd6.jpg', '洪崖洞江的对面，这里没有游人，但是却能以洪崖洞为背景拍摄出绝美的照片。');
INSERT INTO `img` VALUES ('7', '1', '/paysage/main/ch/hyd7.jpg', '千厮门大桥');
INSERT INTO `img` VALUES ('8', '1', '/paysage/main/ch/hyd8.jpg', '洪崖洞夜景');
INSERT INTO `img` VALUES ('9', '1', '/paysage/main/ch/hyd9.jpg', '45deg仰望千厮门大桥');
INSERT INTO `img` VALUES ('10', '1', '/paysage/main/ch/hyd10.jpg', '洪崖洞');
INSERT INTO `img` VALUES ('11', '1', '/paysage/main/ch/hyd11.jpg', '洪崖洞');
INSERT INTO `img` VALUES ('12', '2', '/paysage/main/ch/cqk1.jpg', '磁器口古镇水吧');
INSERT INTO `img` VALUES ('13', '2', '/paysage/main/ch/cqk2.jpg', '磁器口古镇');
INSERT INTO `img` VALUES ('14', '2', '/paysage/main/ch/cqk3.jpg', '磁器口江边,外部大门');
INSERT INTO `img` VALUES ('15', '2', '/paysage/main/ch/cqk4.jpg', '磁器口古镇入口');
INSERT INTO `img` VALUES ('16', '2', '/paysage/main/ch/cqk5.jpg', '磁器口周边古玩');
INSERT INTO `img` VALUES ('17', '2', '/paysage/main/ch/cqk6.jpg', '磁器口古镇街景');
INSERT INTO `img` VALUES ('18', '2', '/paysage/main/ch/cqk7.jpg', '磁器口古镇,传统手艺竹杯子');
INSERT INTO `img` VALUES ('19', '2', '/paysage/main/ch/cqk8.jpg', '感受一下被十几只猫围绕的感觉');
INSERT INTO `img` VALUES ('20', '2', '/paysage/main/ch/cqk9.jpg', '位于磁器口的猫吧。');
INSERT INTO `img` VALUES ('21', '2', '/paysage/main/ch/cqk10.jpg', '喵酱茶屋 猫咪课堂上的深度吸猫，在磁器口的老街上');
INSERT INTO `img` VALUES ('22', '2', '/paysage/main/ch/cqk11.jpg', '磁器口古镇烧烤');
INSERT INTO `img` VALUES ('23', '3', '/paysage/main/ch/dz1.jpg', '大足石刻');
INSERT INTO `img` VALUES ('24', '3', '/paysage/main/ch/dz2.jpg', '大足石刻');
INSERT INTO `img` VALUES ('25', '3', '/paysage/main/ch/dz3.jpg', '大足石刻');
INSERT INTO `img` VALUES ('26', '3', '/paysage/main/ch/dz4.jpg', '大足石刻');
INSERT INTO `img` VALUES ('27', '3', '/paysage/main/ch/dz5.jpg', '大足石刻');
INSERT INTO `img` VALUES ('28', '3', '/paysage/main/ch/dz6.jpg', '大足石刻');
INSERT INTO `img` VALUES ('29', '3', '/paysage/main/ch/dz7.jpg', '大足石刻');
INSERT INTO `img` VALUES ('30', '3', '/paysage/main/ch/dz8.jpg', '大足石刻');
INSERT INTO `img` VALUES ('31', '3', '/paysage/main/ch/dz9.jpg', '大足石刻');
INSERT INTO `img` VALUES ('32', '4', '/paysage/main/ch/xh1.jpg', '下浩老街');
INSERT INTO `img` VALUES ('33', '4', '/paysage/main/ch/xh2.jpg', '旧重庆的活化石');
INSERT INTO `img` VALUES ('34', '4', '/paysage/main/ch/xh3.jpg', '旧重庆的活化石');
INSERT INTO `img` VALUES ('35', '4', '/paysage/main/ch/xh4.jpg', '旧重庆的活化石');
INSERT INTO `img` VALUES ('36', '4', '/paysage/main/ch/xh5.jpg', '旧重庆的活化石');
INSERT INTO `img` VALUES ('37', '4', '/paysage/main/ch/xh6.jpg', '旧重庆的活化石');
INSERT INTO `img` VALUES ('38', '11', '/paysage/main/ca/sp1.jpg', 'Stanley Park 随拍');
INSERT INTO `img` VALUES ('39', '11', '/paysage/main/ca/sp2.jpg', 'Stanley Park 随拍');
INSERT INTO `img` VALUES ('40', '11', '/paysage/main/ca/sp3.jpg', 'Stanley Park 随拍');
INSERT INTO `img` VALUES ('41', '11', '/paysage/main/ca/sp4.jpg', 'Stanley Park 随拍');
INSERT INTO `img` VALUES ('42', '11', '/paysage/main/ca/sp5.jpg', 'Stanley Park 随拍');
INSERT INTO `img` VALUES ('43', '11', '/paysage/main/ca/sp6.jpg', 'Stanley Park 随拍');
INSERT INTO `img` VALUES ('44', '12', '/paysage/main/ca/dt1.jpg', '繁华的DownTown');
INSERT INTO `img` VALUES ('45', '12', '/paysage/main/ca/sp2.jpg', '繁华的DownTown');
INSERT INTO `img` VALUES ('46', '12', '/paysage/main/ca/sp3.jpg', '繁华的DownTown');
INSERT INTO `img` VALUES ('47', '12', '/paysage/main/ca/sp4.jpg', '繁华的DownTown');
INSERT INTO `img` VALUES ('48', '12', '/paysage/main/ca/sp5.jpg', '繁华的DownTown');
INSERT INTO `img` VALUES ('49', '12', '/paysage/main/ca/sp6.jpg', '繁华的DownTown');
INSERT INTO `img` VALUES ('50', '13', '/paysage/main/jp/dl1.jpg', '东京迪斯尼乐园景点图片');
INSERT INTO `img` VALUES ('51', '13', '/paysage/main/jp/dl2.jpg', '东京迪斯尼乐园景点图片');
INSERT INTO `img` VALUES ('52', '13', '/paysage/main/jp/dl3.jpg', '东京迪斯尼乐园景点图片');
INSERT INTO `img` VALUES ('53', '13', '/paysage/main/jp/dl4.jpg', '东京迪斯尼乐园景点图片');
INSERT INTO `img` VALUES ('55', '13', '/paysage/main/jp/dl5.jpg', '东京迪斯尼乐园景点图片');
INSERT INTO `img` VALUES ('56', '13', '/paysage/main/jp/dl6.jpg', '东京迪斯尼乐园景点图片');

-- ----------------------------
-- Table structure for paysage
-- ----------------------------
DROP TABLE IF EXISTS `paysage`;
CREATE TABLE `paysage` (
  `areaId` int(11) NOT NULL,
  `paysageId` int(11) NOT NULL AUTO_INCREMENT,
  `paysageName` varchar(30) NOT NULL,
  `paysageProfie` varchar(1024) NOT NULL,
  `paysageCover` varchar(64) NOT NULL,
  `cityId` int(11) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `verticalPic1` varchar(64) DEFAULT NULL,
  `verticalPic2` varchar(64) DEFAULT NULL,
  `horizonPic1` varchar(64) DEFAULT NULL,
  `horizonPic2` varchar(64) DEFAULT NULL,
  `about` varchar(2048) DEFAULT NULL,
  `info` varchar(1024) DEFAULT NULL,
  PRIMARY KEY (`paysageId`),
  KEY `paysage_foreign_cityId` (`cityId`),
  KEY `paysage_foreign_areaId` (`areaId`),
  CONSTRAINT `paysage_foreign_areaId` FOREIGN KEY (`areaId`) REFERENCES `area` (`areaId`),
  CONSTRAINT `paysage_foreign_cityId` FOREIGN KEY (`cityId`) REFERENCES `city` (`cityId`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of paysage
-- ----------------------------
INSERT INTO `paysage` VALUES ('1', '1', '洪崖洞', '洪崖洞，原名洪崖门，是古重庆城门之一，位于重庆市渝中区解放碑沧白路，地处长江、嘉陵江两江交汇的滨江地带，是兼具观光旅游、休闲度假等功能的旅游区 [1]  。以其巴渝传统建筑和民俗风貌特色而被评为国家AAAA级旅游景区。2006年，由重庆市人民政府总投资3.85亿元兴建而成 [2]  。', '/paysage/cover/ch/hongyadong.jpg', '1', '重庆市渝中区嘉陵江滨江路109-10号', '/paysage/main/ch/hongyadong1.jpg', '/paysage/main/ch/hongyadong2.jpg', '/paysage/main/ch/hongyadong3.jpg', '/paysage/main/ch/hongyadong4.jpg', '吊脚楼属于栏式建筑，依山就势，沿江而建，房屋构架简单，开间灵活、形无定式，让解放碑直达江滨。随坡就势的吊脚楼群，形成线性道路空间，吊脚楼的下部架空成虚，上部围成实体。洪崖洞是重庆历史文化的见证和重庆城市精神的象征。洪崖洞民俗风貌区位于重庆市渝中区。北临嘉陵江，南接解放碑沧白路，项目沿江全长约600米，商业建筑总面积逾60000平米，以具有巴渝传统建筑特色的“吊脚楼”风貌为主体，通过分层筑台、吊脚、错叠、临崖等山地建筑手法，把餐饮、娱乐、休闲、保健、酒店和特色文化购物等六大业态有机整合在一起，形成了别具一格的“立体式空中步行街”，成为具有层次与质感的城市景区、商业中心. 洪崖洞一共有11层，夜晚灯光是从晚上6点开灯，10点熄灯。 可望吊脚群楼观洪崖滴翠，逛山城老街赏巴渝文化，烫山城火锅看两江汇流，品天下美食。形成了“一态、三绝、四街、八景”的经营形态，体现了巴渝文化休闲业态。“一态”指的是文化休闲业态。“三绝”指的是吊脚楼、集镇老街、巴文化；“四街”指洪崖洞的四条街：动感酒吧街、巴渝风情街、盛宴街美食街、城市阳台异域风情街。四条大街分别融汇了时尚元素，主题迥异特色鲜明。成为重庆娱乐生活、夜生活的标向。“八景”指的是洪崖滴翠、两江汇流、吊脚楼群、洪崖群雕、城市阳台、巴文化柱、滨江好吃街、嘉陵夕照。', '地址：</br>嘉陵江滨江路109-10号</br>营业时间：</br>周一至周日 10:00-22:00电话：02363039999,02363039995');
INSERT INTO `paysage` VALUES ('1', '2', '磁器口', '磁器口古镇原名瓷器口镇、白崖镇、白岩场镇，因明帝朱允炆退位后隐居于此，也叫龙隐镇。位于重庆市沙坪坝区，比邻嘉陵江。自明、清时期以来磁器口一直是重要的水陆码头，为嘉陵江下游物资集散地。磁器口是重庆主城区内少有的能领略老重庆风味的地方，被称为“小重庆”。', '/paysage/cover/ch/ciqikou.jpg', '1', '重庆市沙坪坝区，比邻嘉陵江。', '/paysage/main/ch/cqk_v_1.jpg', '/paysage/main/ch/cqk_v_2.jpg', '/paysage/main/ch/cqk_h_1.jpg', '/paysage/main/ch/cqk_h_2 .jpg', '磁器口古镇，原名龙隐镇 [1]  ，国家AAAA级景区，中国历史文化名街，重庆市重点保护传统街，重庆“新巴渝十二景”，巴渝民俗文化旅游圈。\r\n磁器口古镇位于重庆市沙坪坝区嘉陵江畔，始建于宋代，拥有“一江两溪三山四街”的独特地貌，形成天然良港，是嘉陵江边重要的水陆码头。曾经“白日里千人拱手，入夜后万盏明灯”繁盛一时。磁器口古镇开发有榨油、抽丝、制糖、捏面人、川戏等传统表演项目和各种传统小吃、茶馆等，每年春节举办的磁器口庙会是最具特色的传统活动，吸引数万市民前往参与。磁器口最早的名字叫白岩场，始于（998—1003年）宋真宗咸平年间，因为这里曾有一座白岩寺而得名。明建文四年，建文帝朱允炆被其四叔朱棣篡位，逃出皇宫后削发为僧。当他流落到巴渝一带时，曾在白岩山上的宝轮寺隐匿长达四五年。世人知情后，就以皇帝真龙天子曾经隐居在此的事实而将宝轮寺改名为龙隐寺，白岩场也被改称为龙隐镇。\r\n清朝初年，瓷器在很长一段时间里成为龙隐镇的主要产业。1918年，瓷器本地商绅集资在镇中青草坡创建了新工艺制瓷的“蜀瓷厂”，远销蜀外。后来随着工艺进步，瓷器品种增多，名气也扩大了起来。龙隐镇里，瓷器业最发达时有70多家。', '地址: </br>重庆市沙坪坝区磁南街1号</br> 到达方式：</br> 公交\r\n		</br>\r\n		市内乘坐公交车在【磁器口】站下车即到。\r\n		</br>\r\n		地铁\r\n		</br>\r\n		乘坐轨道交通1号线 在磁器口站下车即可。\r\n		</br>\r\n		出租车\r\n		</br>\r\n		磁器口古镇距沙坪坝3公里，乘坐出租车车费为8元。</br> 开放时间: 全天 </br> 门票 : 免费');
INSERT INTO `paysage` VALUES ('1', '3', '大足石刻', '大足石刻位于中央直辖市重庆大足区境内，距重庆主城九区167公里，有74处5万余尊宗教石刻造像。它是唐末、宋初时期的宗教摩崖石刻，以佛教题材为主，儒、道教造像并陈，尤以北山摩崖造像和宝顶山摩崖造像为著。北山摩崖造像位于重庆市大足区城北1.5公里的北山。北山摩崖造像长约三百多米，是全国重点文物保护单位、世界文化遗产。', '/paysage/cover/ch/dazushike.jpg', '1', '重庆市大足县北山路7号', '/paysage/main/ch/dz_v_1.jpg', '/paysage/main/ch/dz_v_2.jpg', '/paysage/main/ch/dz_h_1.jpg', '/paysage/main/ch/dz_h_2.jpg', '大足石刻位于中央直辖市重庆大足区境内，距重庆主城九区167公里，有74处5万余尊宗教石刻造像。它是唐末、宋初时期的宗教摩崖石刻，以佛教题材为主，儒、道教造像并陈，尤以北山摩崖造像和宝顶山摩崖造像为著。北山摩崖造像位于重庆市大足区城北1.5公里的北山。北山摩崖造像长约三百多米，是全国重点文物保护单位、世界文化遗产。大足石刻群有石刻造像70多处，总计10万多躯，其中以宝顶山和北山摩崖石刻最为著名，其以佛教造像为主，是中国晚期石窟造像艺术的典范。与敦煌莫高窟、云冈石窟、龙门石窟、麦积山石窟等中国四大石窟齐名。[1] 1999年12月1日在摩洛哥历史文化名城马拉喀什举行的联合国教科文组织世界遗产委员会第23届会议上表决通过，将大足石刻中的北山、宝顶山、南山、石篆山、石门山五处摩崖造像，正式列入世界文化遗产。大足石刻代表了公元9—13世纪世界石窟艺术的最高水平，是人类石窟艺术史上最后的丰碑。它从不同侧面展示了唐、宋时期中国石窟艺术风格的重大发展和变化，具有前期石窟不可替代的历史、艺术、科学价值。并以规模宏大、雕刻精美、题材多样、内涵丰富、保存完好而著称于世。1999年12月，以宝顶山、北山、南山、石门山、石篆山“五山”为代表的大足石刻，被联合国教科文组织列入《世界遗产名录》。 [2]大足石刻现为国家AAAAA级旅游景区，全国重点文物保护单位，重庆十大文化符号， [3]  2016年国庆假期旅游“综合秩序最佳景区”。 [4]  2018年12月7日，入选由中央广播电视总台央视财经频道和盈科旅游主办的2018《魅力中国城》文化旅游魅力榜。 [5]', '交通: 客车 </br> 重庆市内于菜园坝长途汽车站或者陈家坪长途汽车站，乘坐开往大足县的高速公路直达大巴。时间90分钟，车费单程50左右，视季节变化不同程度上涨和下调。\r\n			</br>\r\n			到达大足城区后：</br>\r\n			1.宝顶石刻景区：东关红绿灯处中巴客车3元/人。</br>\r\n			2.北山石刻景区：步行20分钟左右</br>\r\n			3.南山石刻景区：步行20分钟左右</br>\r\n			出租车</br>\r\n			1.宝顶石刻景区：15分钟到达（约40元）</br>\r\n			2.北山石刻景区：10分钟到达（约10元）</br>\r\n			3.南山石刻景区：10分钟到达（约10元）</br>');
INSERT INTO `paysage` VALUES ('1', '4', '下浩老街', '这是重庆新的网红景点，重庆这个网红城市总是给人不一样的惊喜啊。这里的建筑都十分的古老，基本属于要拆迁的，在山城这个地方，一条条街道，伴随着老旧的建筑。不乏是很多文艺青年打卡的圣地。', '/paysage/cover/ch/xiahao.jpg', '1', '下浩老街，重庆市南岸区临近南滨路，紧靠东水门长江大桥的一个斜坡上的街区', '/paysage/main/ch/xh_v_1.jpg', '/paysage/main/ch/xh_v_2.jpg', '/paysage/main/ch/xh_h_1.jpg', '/paysage/main/ch/xh_h_2.jpg', '下浩老街曾经是到长江边上龙门浩码头的必经之路，陪都时期龙门浩码头就是连接渝中半岛与南岸的交通要道。上世纪六七十年代不少小型企业陆续迁入下浩正街，上世纪80年代以前下浩街区一直是南岸长江边上繁华的街道。\r\n如今，随着南滨路的开发，长江大桥东水门大桥的修建，下浩老街曾经的繁华已经衰落。漫步在下浩街头，“拆”及“危险”字样随处可见，重庆这一老街的残存片断，也许在不久的将来彻底消失。 [2]下浩老街还包括下浩正街、觉林寺、米市街、望耳楼、葡萄院等小街。据说，这一地区在清乾隆时期就已经形成街市。这条街连接长江，解放前，龙门浩老码头是重庆一个客货两用码头，从码头去上新街，下浩正街和董家桥是必经之路，再加上巴渝名刹觉林寺也在此地，百年前的下浩一带十分热闹。 [3] \r\n', '南岸女侠 : </br>敖溦并不是原住民。2014年，热爱历史的她被下浩老街的建筑与生活方式吸引，便搬了过来，开了一个小茶室。搬至这里后，敖溦过起了“慢生活”。她每天买菜、洗衣、打扫清洁、修剪屋顶花园上的植物，用她的话说，“就差劈柴喂马了”。\r\n有一天，隔壁大姐探出头来说，“姑娘，你这个花园好漂亮，帮我也弄一个吧。”想到附近有一块废弃的空地，敖溦灵机一动：干脆就为街坊建一个公共的街心花园吧。“即便老街要拆，我也想让拆迁之前的生活过得美好。”于是，她联合朋友在网上发起了一个众筹活动。她的生活方式与老街的历史“俘虏”了众多网友。几星期后，她筹集到了7000多元的资金。这个计划也引起了下浩街道居委会的重视，居委会为此专门举行了“居民自治启动仪式”，号召社区居民为街心花园的建设出一份力。\r\n敖溦和下浩老街一同出名了。2016年6月15日，老街花园项目正式启动。敖溦和朋友一起，围栅栏、种植物，她还邀请艺术家、小朋友在老街斑驳的墙上涂鸦，甚至找来废弃的窗户、板凳做装置艺术。2016年7月17日，敖溦受邀参加TED（全球知名的演讲大会）在重庆的演讲活动，她与下浩老街的故事被更多人知道。人们称她为“南岸女侠”。下浩老街再次变得生龙活虎起来，充满魅力。 [1] </br>媒体评价</br>在《美国国家地理》杂志的文章里，称下浩老街是“另一个世界”：在这个世界里有两种人，一种是下浩的原住民，他们保留着老重庆的生活方式；第二种是一群在下浩开茶馆的年轻人，他们为衰败的下浩增添了一抹色彩。 [4]');
INSERT INTO `paysage` VALUES ('1', '6', '缙云山', '缙云山位于重庆市北碚区嘉陵江温塘峡畔，古名巴山。是七千万年前“燕山运动”造就的“背斜”山岭。山间白云缭绕，似雾非雾，似烟非烟，磅礴郁积，气象万千。早晚霞云，姹紫嫣红，五彩缤纷。古人称“赤多白少”为“缙”，故名缙云山。缙云山与嘉陵江小三峡、合川钓鱼城一并被定为国家级自然风景名胜区。缙云山总占地面积76平方千米，海拔350米-951米。缙云山景色宜人，植物资源丰富，素有北有缙云、南有石笋之美誉。', '/paysage/cover/ch/jinyunshan.jpg', '1', '重庆市北碚区嘉陵江温塘峡畔', '', null, null, null, null, null);
INSERT INTO `paysage` VALUES ('1', '7', '金刀峡', '金刀峡位于重庆市北碚区金刀峡镇，华蓥山西南麓，海拔880米。距重庆市中心90公里，距北碚城区62公里。金刀峡是国家4A级旅游景区，主要经典有藏刀洞、中峡天然浴场。狮头峡、弥勒佛等，景区有峡险、山雄、水秀、瀑多、潭碧等特点。2014年5月，北碚区金刀峡风景区正式被国家旅游局批准为国家AAAA（4A）级风景名胜区。', '/paysage/cover/ch/jindaoxia.jpg', '1', '重庆市北碚区东北部华蓥山西南麓', null, null, null, null, null, null);
INSERT INTO `paysage` VALUES ('1', '8', '云阳龙缸国家地质公园', '龙缸是一个深550米的椭圆形天坑，这一深度位居中国第三位，世界第五位。缸内壁如削，缸底四季吐翠，因形状为一个天然大石缸，还流传樵夫与龙女爱情的美妙传说，而得名龙缸，又被誉为“天下第一缸”。龙缸口呈椭圆形，口下有一块天然条石平伸入内，可以俯瞰坑内的景物。云阳龙缸最具吸引力的主体景观，是以龙缺天坑为代表的岩溶地貌和以石笋河大峡谷为代表的峡谷景观。', '/paysage/cover/ch/yunyang.jpg', '1', '\r\n重庆市云阳县清水乡', null, null, null, null, null, null);
INSERT INTO `paysage` VALUES ('1', '9', '茶山竹海', '风光旖旎的茶山竹海国家森林公园曾因诸葛亮赐名“箕山”而号称“天下第一隐山”。位于永川区城北2公里处，占地116平方公里，拥有2万亩大型连片茶园和5万亩竹海。形成我国乃至世界罕见的茶竹共生景观。森林覆盖率达97%，负氧离子含量达每立方厘米20000个，是当之无愧的“天然氧吧”。茶山竹海与江津石笋山一样受旅游爱好者所青睐，石笋山是因为铁拐李之修道成仙处而闻名遐迩。茶山竹海主要景点有桂山茶园、青龙茶园等三大片茶园和金盆竹海、竹海迷宫等六大片竹海，另外还有朱德楼、田坝子古墓、天子殿、薄刀岭等景点。薄刀岭海拔1025米，为渝西最高峰。景区内有中华茶艺山庄、天然居休闲山庄、翠竹山庄、金盆湖别墅度假酒店、茶竹天街等酒店和40余户旅游定点农家乐。游客在茶山竹海可品尝到茶水豆花、绿茶排骨、竹燕窝、竹笋炒腊肉等茶、竹系列特色菜品，可欣赏到茶艺表演，还可参与采茶、制茶、制陶、篝火晚会等游乐活动。', '/paysage/cover/ch/chashanzuhai.jpg', '1', '重庆永川区茶山竹海街道办事处箕山林场', null, null, null, null, null, null);
INSERT INTO `paysage` VALUES ('1', '10', '长江三峡', '江三峡西起奉节白帝城，东至湖北宜昌南津关，全长193千米。沿途两岸奇峰陡立、峭壁对峙，自西向东依次为瞿塘峡、巫峡、西陵峡。[1] 巫山县境内，有大宁河小三峡、马渡河小小三峡。长江沿线重庆境内，有“水下碑林”白鹤梁，“东方神曲之乡”丰都鬼城，建筑风格奇特的石宝寨、“巴蜀胜境”张飞庙、蜀汉皇帝刘备的托孤堂、龙骨坡巫山文化遗址等景观。', '/paysage/cover/ch/changjiang.jpg', '1', '西起重庆奉节的白帝城，东至湖北宜昌的南津关', null, null, null, null, null, null);
INSERT INTO `paysage` VALUES ('18', '11', 'Stanley Park', '这座公园坐落在温哥华繁华的街区中，内有遮天蔽日的浓密森林、宽阔而平静的湖泊、与人类和谐共处的成群结队的鸟类，是一个慢跑、骑车、滑旱冰或散步的绝佳地点。此外，这里还有形态各异的图腾柱供参观。\r\n\r\n\r\n公园中设有长约2公里的小型铁路，穿越大片森林，沿途风景优美。如果在节日期间前往，小火车也会被装饰以不同主题。', '/paysage/cover/ca/StanleyParkCover.jpg', '14', 'Stanley Park, Vancouver, B.C, Canada', '/paysage/main/ca/sp_v_1.jpg', '/paysage/main/ca/sp_v_2.jpg', '/paysage/main/ca/sp_h_1.jpg', '/paysage/main/ca/sp_v_2.jpg', '斯坦利公园位于乔治亚街的公园入口处，是一大片美丽的玫瑰园，每年夏天到了玫瑰花季，玫瑰园中各种品种、各种颜色的玫瑰争相盛放，娇媚至极。在斯坦利公园北端，是横跨海湾的狮门大桥的一端。狮门大桥与旧金山的金门大桥并称，桥身两侧以弧形钢索悬吊，长约1660多米的大桥可容3条车道，是连接温哥华市与西温哥华和北温哥华的交通要道。在公园东部，有几根形状不一的印第安木刻图腾柱，它们不仅是印第安人文化艺术的体现，也为公园增添了一处历史景观。在斯坦利公园中，除了常可看到的可爱浣熊，还有一座动物园和温哥华水族馆。建于1956年的温哥华水族馆是加拿大最大的水族馆，种植着大片亚马逊热带植物。温哥华水族馆内有8000多种水中生物供游人参观，其中不乏杀人鲸、小白鲸等珍稀海洋生物，水族馆内还有各种鸟类和猴子。温哥华水族馆还会为儿童举办关于环保和保护动物的教育性节目，寓教于乐，很受儿童和家长的欢迎。斯坦利公园的环岛道路是游人散步和自行车爱好者的天堂，在两侧景色优美的道路上，还时可见到滑轮好手的身姿。而公园中的网球场和高尔夫球场是喜爱运动的温哥华市民常到的地方。除了森林美景，濒临英国湾的斯坦利公园还有几个长长的海滩，让人体验海滩美景，在这里不管是欣赏海景，还是体味沙滩乐趣，都是一种享受。', '到达方式：</br>公园里有停车场，可自驾进入；到达此处的公交车也很多，包括直接进入斯坦利公园的专车19路（停靠在Lost Lagoon或Stanley Park Loop），也可乘坐250、251、252、253、246等线路至EB Davie St FS Denman St，下车后步行至公园</br>开放时间: 全天 </br>门票 : </br>入园免费；根据季节及主题，乘小火车的价格旅游不同，成人约5-10加元，18岁以下青少年、儿童、65岁以上老人享有折扣，3岁以下儿童免费 </br> 电话: +1-604-681-6728');
INSERT INTO `paysage` VALUES ('18', '12', 'Downtown', '温哥华市中心(Downtown Vancouver)位于加拿大温哥华市的北部，是整个大温地区的商业、文化、经济、政治和娱乐中心。这里高楼林立，上班的人西装革履步履匆匆，到了晚上又满城灯火，街上餐馆咖啡馆充满了人，体现出这座加拿大西岸城市的繁华。温哥华著名的城市公园斯坦利公园也在这里，占据了半岛的一个角落。', '/paysage/cover/ca/downtown.jpg', '14', '\r\nDowntown，Vancouver，B.C, Canada', '/paysage/main/ca/dt_v_1.jpg', '/paysage/main/ca/dt_v_2.jpg', '/paysage/main/ca/dt_h_1.jpg', '/paysage/main/ca/dt_h_2.jpg', 'Downtown is Vancouver\'s primary business district, houses many arts, entertainment, and sports venues, and is close to several vibrant residential communities. A peninsula, Downtown is bounded by Burrard Inlet on the north, False Creek and the popular district of Yaletown to the south. The West End neighbourhood and world-famous Stanley Park are to the west, and the popular historic districts of Gastown, Chinatown, and Strathcona are to the east.Just over a century ago, Vancouver was a two-block collection of buildings called Granville (now known as Gastown). This location on Burrard Inlet was competing to be the west coast terminus of the Canadian Pacific Railway. By 1887, a year after the City of Vancouver was incorporated, the first passenger train arrived at the foot of Howe Street, and future growth was assured. In the next seven years, a building boom began to move the city centre from Water and Cordova Streets up to Georgia and Granville Streets. Streetcar service was initiated in 1890, joining the waterfront to Granville, Pender and Cordova Streets.', '到达方式：\r\n天车Canada Line至Vancouver City Centre， Expo Line至Granville Street或Millennium Line至Burrard Street都是市区。');
INSERT INTO `paysage` VALUES ('1', '13', '東京ディズニーランド', '分为迪士尼乐园(東京ディズニーランド / Tokyo Disneyland)和迪士尼海洋(東京ディズニーシー / Tokyo DisneySea)两个游乐园，其中后者是全球唯一以海洋为主题的迪士尼乐园。除了各项娱乐设施，园内的表演和盛装游行也非常精彩。建于1982年的东京迪士尼乐园位于千叶县，这座被誉为亚洲第一的游乐园占地面积为46公顷，分为世界集市、冒险岛、西部牛仔、动物世界、梦幻岛、米奇之家和未来世界7个主题园区，每个区内都设有多个广场和舞台，定时举行各种游行活动。', '/paysage/cover/jp/desney.jpg', '8', '千葉県浦安市舞浜1-1', '/paysage/main/jp/dl_v_1.jpg', '/paysage/main/jp/dl_v_2.jpg', '/paysage/main/jp/dl_h_1.jpg', '/paysage/main/jp/dl_h_2.jpg', '东京迪士尼乐园主要分为世界市集、探险乐园、西部乐园、动物天地、梦幻乐园、卡通城及明日乐园等7个区，园内的舞台以及广场上定时会有各种各样的游行活动。 在迪士尼正门的中心，可以看到高耸的“灰姑娘城”这座主建筑，在它的周围则建造了多种主题的游乐场和游乐馆，例如冒险宫、世界著名故事、传说宫、风景宫、闲游宫、宇宙宫、幻想宫等。每一个游乐宫都配有详细的情节解说和音乐。乐园保持了美国迪士尼乐园的正宗风格，使人可以体会到它的“非日常性的”演出特色。在东京迪士尼乐园里还可以看到大型的游行表演。\r\n东京迪士尼乐园有五个主题乐园：维多利亚王朝时代式街景的世界市集、冒险和传奇的探险乐园、西部开拓时代的西部乐园、梦境和童话的梦幻乐园、未来、科学和宇宙的明日乐园。这五大主题乐园中共有35项精彩的表演，其共同特征是“一切都是活动的，有声有色的”。1998年10月，东京又动工兴建了迪斯尼海洋乐园，耗资约3380亿日元（1美元约合100日元）。', '到达方式 : \r\nJR京叶线、武藏野线，舞滨站下车。<br/> 开放时间：\r\n乐园区9:00-22:00(周一-周五)、8:00-22:00(周六、周日)。海洋区9:00-22:00(周一-周五)、8:30-22:00(周六、周日)。每日具体营业时间和表演活动详见官网。</br>门票：\r\n东京迪士尼把门票叫“护照”。护照分为好几种，有二日、三日、下午入园、夜间入园等多个种类，具体可在官网查询。一日护照的价格通常为：成人7400円，学生(12-17岁)6400円，儿童(4-11岁)4800円，老年票(65岁以上)6700円。当日票和预售票可到园区售票处购买购买；门票兑换券可在日本国内各大旅行社、JR各大车站以及便利店购买，进入园区前需要在售票处兑换为正式门票。<br/> 网址: 网址：\r\nhttp://www.tokyodisneyresort.co.jp </br> 电话：\r\n+81-45-330-5211');

-- ----------------------------
-- Table structure for province
-- ----------------------------
DROP TABLE IF EXISTS `province`;
CREATE TABLE `province` (
  `provinceId` int(11) NOT NULL AUTO_INCREMENT,
  `provinceName` varchar(20) NOT NULL,
  `areaId` int(11) NOT NULL,
  `picSrc` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`provinceId`),
  KEY `province_foreign_areaId` (`areaId`),
  CONSTRAINT `province_foreign_areaId` FOREIGN KEY (`areaId`) REFERENCES `area` (`areaId`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of province
-- ----------------------------
INSERT INTO `province` VALUES ('1', '重庆市', '1', '/province/ch/chongqing.jpg');
INSERT INTO `province` VALUES ('2', '北京市', '1', '/province/ch/beijing.jpg');
INSERT INTO `province` VALUES ('3', '上海市', '1', '/province/ch/shanghai.jpg');
INSERT INTO `province` VALUES ('4', '四川省', '1', '/province/ch/sichuan.jpg');
INSERT INTO `province` VALUES ('5', '湖北省', '1', '/province/ch/hubei.jpg');
INSERT INTO `province` VALUES ('6', '東京都', '2', '/province/jp/tokyoCover.jpg');
INSERT INTO `province` VALUES ('7', '大阪府', '2', '/province/jp/osaka.jpg');
INSERT INTO `province` VALUES ('8', '北海道', '2', '/province/jp/hokkaidou.jpg');
INSERT INTO `province` VALUES ('9', 'Paris', '3', '/province/fr/paris.jpg');
INSERT INTO `province` VALUES ('10', '群馬県', '2', '/province/jp/gunma.jpg');
INSERT INTO `province` VALUES ('11', '京都府', '2', '/province/jp/kyoto.jpg');
INSERT INTO `province` VALUES ('12', '江西省', '1', '/province/ch/jiangxi.jpg');
INSERT INTO `province` VALUES ('13', '福建省', '1', '/province/ch/fujian.jpg');
INSERT INTO `province` VALUES ('14', '黑龙江省', '1', '/province/ch/heilongjiang.jpg');
INSERT INTO `province` VALUES ('15', '辽宁省', '1', '/province/ch/liaoning.jpg');
INSERT INTO `province` VALUES ('16', '贵州省', '1', '/province/ch/guizhou.jpg');
INSERT INTO `province` VALUES ('17', '甘肃省', '1', '/province/ch/gansu.jpg');
INSERT INTO `province` VALUES ('18', '新疆省', '1', '/province/ch/xinjiang.jpg');
INSERT INTO `province` VALUES ('19', 'Ontario', '18', '/province/ca/Ontario.jpg');
INSERT INTO `province` VALUES ('20', 'British Columbia', '18', '/province/ca/Columbia.jpg');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `userId` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `userNickName` varchar(32) NOT NULL DEFAULT '',
  `password` varchar(15) NOT NULL COMMENT '密码',
  `email` varchar(30) DEFAULT NULL,
  `phone` varchar(11) NOT NULL COMMENT '手机号,使用手机号登录',
  `userHeadPic` varchar(64) DEFAULT '/userHead/userDefault' COMMENT '用户头像path',
  `sex` int(1) NOT NULL DEFAULT '0',
  `liveCity` varchar(64) NOT NULL DEFAULT 'China',
  `aboutMe` varchar(255) NOT NULL,
  `birthday` date DEFAULT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `user_phone_unique` (`phone`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'mitsuki_ymmt@0311', '123123123', 'yamamoto@gmail.com', '13982312345', '\\userHead\\71d3190496b3f00fa4f97c433279c5eb', '2', 'Tokyo, Japan', '干啥啥不行,吃啥啥不够', '2020-04-17');
INSERT INTO `user` VALUES ('22', 'shizuka', '123123', 'shizuka@gmail.com', '13212323234', '/userHead/userDefault', '1', '', '', null);
INSERT INTO `user` VALUES ('23', 'takumi_02321', '123123', 'takumi@gmail.com', '13912312324', '/userHead/userDefault', '1', '', '', null);
INSERT INTO `user` VALUES ('24', 'nanase_nishino@1209', '123123', 'nanase@gmail.com', '13232123126', '/userHead/userDefault', '1', '', '', null);
INSERT INTO `user` VALUES ('25', '吃骨头的猫', '123123', 'neko123@gmail.com', '123123', '/userHead/userDefault', '1', '', '', null);
INSERT INTO `user` VALUES ('26', 'Andy', '123123', 'Andy@outlook.com', '19132485342', '/userHead/userDefault', '1', '', '', null);
