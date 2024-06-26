 
-- 通过 * 把 users 表中所有的数据查询出来
  select * from users;

-- 从 users 表中把 username 和 password 对应的数据查询出来
 select username, userpwd from users;

-- 向 users 表中，插入新数据 
insert into users (username, userpwd) values ('tony master', '098123');
insert into users (username, userpwd) values ('lisa', '233dd');
insert into users (username, userpwd) values ('冯大哥', 'bng022');
insert into users (username, userpwd) values ('交易', 'geggg');
insert into users (username, userpwd,status) values ('rtx', 'admin001',1);
select * from users;

-- 将 id 为 4 的用户密码，更新成 888888
update users set userpwd='888888' where id=4;
select * from users;

-- 更新 id 为 2 的用户，把用户密码更新为 admin123  同时，把用户的状态更新为 1
update users set userpwd='admin123',status='1' where id=2;
select * from users;

-- 删除 users 表中， id 为 4 的用户
delete from users where id=4;
select * from users;

-- 演示 where 子句的使用
select * from users where status=1;
select * from users where id>=2;

select * from users where username<>'lisa'; -- 在某些版本的 SQL 中，操作符 <> 可以写为 !=
select * from users where username!='lisa';

-- 使用 AND 来显示所有状态为0且id小于3的用户
select * from users where status=0 and id<3;

-- 使用 or 来显示所有状态为1 或 username 为 冯大哥 的用户
 select * from users where status=1 or username='冯大哥';

-- 对users表中的数据，按照 status 字段进行升序排序
 select * from users order by status;

-- 按照 id 对结果进行降序的排序  desc 表示降序排序   asc 表示升序排序（默认情况下，就是升序排序的）
 select * from users order by id desc;

-- 对 users 表中的数据，先按照 status 进行降序排序，再按照 username 字母的顺序，进行升序的排序
 select * from users order by status desc, username asc;

-- 使用 count(*) 来统计 users 表中，状态为 0 用户的总数量user
select count(*) from users where status=0;

-- 使用 AS 关键字给列起别名
 select count(*) as total from users where status=0;
 select username as uname, userpwd as upwd from users;