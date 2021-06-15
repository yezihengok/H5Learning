-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: my_db_01
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ev_article_cate`
--

DROP TABLE IF EXISTS `ev_article_cate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ev_article_cate` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL COMMENT '分类名称',
  `alias` varchar(45) NOT NULL COMMENT '分类别名',
  `is_delete` int NOT NULL DEFAULT '0',
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`),
  UNIQUE KEY `alias_UNIQUE` (`alias`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ev_article_cate`
--

LOCK TABLES `ev_article_cate` WRITE;
/*!40000 ALTER TABLE `ev_article_cate` DISABLE KEYS */;
INSERT INTO `ev_article_cate` VALUES (1,'哀嚎','as001',0),(2,'测试','T0',0),(3,'花花世界','T4',0),(4,'测试1','001',0),(5,'第三代','T2',0),(6,'SDFSD','T3',1);
/*!40000 ALTER TABLE `ev_article_cate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ev_article_list`
--

DROP TABLE IF EXISTS `ev_article_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ev_article_list` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `cate_name` varchar(45) NOT NULL COMMENT '分类',
  `time` varchar(45) DEFAULT NULL,
  `status` int NOT NULL COMMENT '状态： 0 已发布 1 草稿',
  `content` varchar(400) DEFAULT NULL COMMENT '内容',
  `cate_id` int NOT NULL,
  `cover_img` varchar(45) DEFAULT NULL,
  `author_id` int NOT NULL,
  `is_delete` int NOT NULL DEFAULT '0' COMMENT '0 未删除 1删除',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ev_article_list`
--

LOCK TABLES `ev_article_list` WRITE;
/*!40000 ALTER TABLE `ev_article_list` DISABLE KEYS */;
INSERT INTO `ev_article_list` VALUES (2,'a1','测试','1622801131703',0,'1234对方的分担房贷',0,NULL,0,1),(3,'a1','测试2','1622801131703',0,'1234对方的分担房贷',0,NULL,0,1),(4,'a12','测试3','1622801132703',0,'123房贷',0,NULL,0,0),(5,'a12','测试4','1622801132703',1,'释放',0,NULL,0,0),(6,'大概','花花世界','1623036943059',0,'<p>咕咕咕咕咕咕2</p>',3,'\\uploads\\fee41e07be5f7827313abeaabbea3af4',7,0),(7,'a12','测试4','1622801132703',1,'释放',1,'图片路径',105,0),(8,'小作坊','第三代','1623054135206',0,'<p>是佛挡杀佛</p>',5,'\\uploads\\8b3b0dff477e6854940c46cf39935865',7,0),(9,'巅峰','花花世界','1623131892514',0,'<p>神鼎飞丹砂放松放松发</p>',3,'\\uploads\\daa6841a886c16968b33946d938ba8f0',7,0);
/*!40000 ALTER TABLE `ev_article_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ev_users`
--

DROP TABLE IF EXISTS `ev_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ev_users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `nickname` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `user_pic` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ev_users`
--

LOCK TABLES `ev_users` WRITE;
/*!40000 ALTER TABLE `ev_users` DISABLE KEYS */;
INSERT INTO `ev_users` VALUES (1,'aaaa','123',NULL,NULL,NULL),(4,'aaaa1','12111111111111111111111111111111111111111113',NULL,NULL,NULL),(5,'a1','$2a$10$u8KtPMAnlfF6tnX1dCCwmuLrQ1zQqbmIHoA6lnSekzxzqtFZbWkZK',NULL,NULL,NULL),(6,'yezihengok','$2a$10$3nL5VMJyRPJfndXkwU.ra.4TmSgCZkVIWB0ulvk1jP2i.Fb0qitw6','史蒂夫1','1213@qq.com','/uploads/imgs/1622859135642.jpg'),(7,'yezihengko','$2a$10$SxgH9k1Xh6RoqYSGbAQ0H.bu9.2cHTxpXDkNJlHzn1n81xFB92Goa','撒大大','123@cv.com','/uploads/imgs/1623132229134.jpg');
/*!40000 ALTER TABLE `ev_users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-09 11:00:05
