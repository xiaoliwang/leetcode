--First solution
select max(Salary) from Employee where Salary != (select max(Salary) from Employee);
--Second solution
select ifnull((select distinct Salary from Employee order by Salary desc limit 1, 1), null);