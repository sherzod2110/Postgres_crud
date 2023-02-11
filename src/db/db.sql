CREATE DATABASE build_company;


create table buildCompany(
    company_id serial primary key,
    company_name varchar(64) not null,
    company_price integer not null
);

insert into buildCompany(company_name, company_price) values('Murod building', 10000000);
insert into buildCompany(company_name, company_price) values('Ahmad building', 12000000);