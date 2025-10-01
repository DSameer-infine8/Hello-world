create database insta;
use insta;
create table user(
	id int primary key,
	name varchar(30) not null,
    email varchar(50),
    followers int default 0,
    following int default 0,
    age int,
    constraint age_check check(age>=13)
);

insert into user (id, name , email , followers, following, age) values
(101,"sam","sam@gmail.com", 530, 270, 23),
(102,"bob","bob@gmail.com", 30, 20, 25),
(103,"raja","raj@gmail.com", 0,0 , 25),
(104,"panda","pandu@gmail.com", 50, 70, 20),
(105,"anju","anju@gmail.com", 888, 709, 27);

select * from user;

create table posts(
	post_id int not null,
    user_id int not null,
    caption varchar(100),
    foreign key (user_id) references user(id)
);

insert into posts (post_id, user_id, caption) values
(1001, 101, "i love coding"),
(1002, 102, "hello there"),
(1003, 102, "travel to west"),
(1004, 105, "discover the new you"),
(1005, 103, "YO");

select * from posts;
    