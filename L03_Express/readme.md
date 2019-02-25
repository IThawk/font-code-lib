1.打开数据库可视化：
	地址：http://localhost/phpmyadmin/
	host：localhost
	用户名：root
	密码：空

2.库
	1.创建仓库：
	2.删除仓库：
		语句：DROP DATABASE `web009`

3.表：
	1.表的描述：在一个库下面可以承载若干张表
	  表里面可以存在字段(列)
	2.表的设计
		字段     类型     是否为空     索引    自增      注意：一张表只能存在一个主键
		id       int        是         主键    自增
		name     text       否
		age      int        否
		number   int        否
	3.创建表：
		CREATE TABLE IF NOT EXISTS `user`(
  			`id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
		  	`name` text NOT NULL,
		  	`age`  int(11) NOT NULL 
		);
	4.删除表：
		DROP TABLE `user`

4.增删改查
	
	1.增：
		insert into:命令
		values:添加的值
		INSERT INTO `student`(`id`, `name`, `age`, `number`) VALUES (null,'locik',12,100007)

		INSERT INTO student values(null,'ice',30,1000012)
	
	2.删：
		delete命令
		from student删除那张表
		where条件 （id=4）
		DELETE FROM student WHERE id=4

	3.改：
		update:命令
		set：修改信息
		where条件（id=3）
		1.UPDATE student SET `number`=1000008 WHERE id=3

		修改多条数据,多条数据中间用逗号隔开
		2.UPDATE student SET `name`='lock',`number`=1000007 WHERE id=3

	4.查：
		select：命令
		*:全部信息
		form student：查询那张表
		1.SELECT * FROM `student` 

		name：查询整张表，只显示name
		2.SELECT name FROM student

		where查询条件，只查询id=2的这条数据
		3.SELECT * FROM student WHERE id=2

		查询id等于2的数据，并且只显示name，age和number
		4.SELECT name,age,number FROM student where id=2

		根据具体内容进行查询数据
		5.SELECT * FROM student WHERE `name`='iwen'

		多条件查询，根绝多条内容限制查询
		6.SELECT * FROM student WHERE `name`='iwen' AND `age`=20

		根据你需要的数据数量来进行查询
		limit：参数1：开始位置   参数2：查询数量
		7.SELECT * FROM student LIMIT 0,3

		or运算的查询
		8.SELECT `id`, `name`, `age`, `number` FROM `student` WHERE `name`='iwen' AND `age`='20' OR `name`='iwen' AND `number`=null
		


