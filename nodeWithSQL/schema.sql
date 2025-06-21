create table user(
    id varchar(50) primary key,
    name varchar(50) unique,
    email varchar(50) unique not null,
    password varchar(50) unique not null
);