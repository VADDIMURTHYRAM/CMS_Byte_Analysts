-- create a database
-- create a table (user) with user_id Primary key
-- create a table (customer) with cust_id Primary key and user_id as foreign key 
-- retrieve that infor

create database customer_db

create table new_user
	(UserID int identity(1,1) NOT NULL PRIMARY KEY,
	username varchar(50) NOT NULL,
	passwd varchar(50) NOT NULL)

select * from new_user


create table new_customer
	(UserID int,
	CustomerID int identity(1,1) PRIMARY KEY NOT NULL,
	Customer_Name varchar(50) NOT NULL,
	DOB date,
	Addr varchar(250),
	City varchar(20),
	Pincode nchar(6),
	Contact nchar(10),
	Email varchar(100)
	FOREIGN KEY (UserID) REFERENCES new_user(UserID))

select * from new_customer

create procedure cust_search @name varchar(50) as
select * 
from new_customer
where Customer_Name = @name;

exec cust_search 'Manny';
