-- storing and retrieving customer details

create database cust_db
create table customer
	(CustomerID int identity(100000,1) PRIMARY KEY,
	Customer_Name varchar(50) NOT NULL,
	DOB date,
	Addr varchar(250),
	City varchar(20),
	Pincode nchar(6),
	Contact nchar(10),
	Email varchar(100));

alter table customer add is_deleted binary;

select * from customer

-- storing
insert into customer values('1', 'Tanmay', '2/2/1990', 'Ajmer-Rajasthan', 'Ajmer', '305001', '0123456789', 'tanmajain@deloitte.com'); 
insert into customer values('2', 'manny', '2/2/1990', 'Ajmer-Rajasthan', 'Ajmer', '305001', '0123456789', 'asdfasdin@deloitte.com');
-- (CustomerID, Customer_Name, DOB, Addr, City, Pincode, Contact, Email)



--retrieving 

create procedure customer_search @name varchar(50) as
select * 
from customer
where customer_Name = @name;

exec customer_search 'Manny';