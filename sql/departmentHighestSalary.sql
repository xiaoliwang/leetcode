--first solusion
select t2.Name Department,t1.Name Employee,t1.Salary from Employee t1, Department t2, (select DepartmentId, max(Salary) Salary from Employee group by DepartmentId) t3 where t1.Salary = t3.Salary and t1.DepartmentId = t3.DepartmentId and t2.Id = t3.DepartmentId order by Salary desc;
--seconde solusion
select t2.Name Department, t1.Name Employee, t1.Salary from Employee t1, Department t2 where t1.DepartmentId = t2.id and (DepartmentId, Salary) in (select DepartmentId, max(Salary) Salary from Employee group by DepartmentId) order by Salary desc;
--third solusion
SELECT D.Name,A.Name,A.Salary 
FROM 
    Employee A,
    Department D   
WHERE A.DepartmentId = D.Id 
  AND NOT EXISTS 
  (SELECT 1 FROM Employee B WHERE B.Salary > A.Salary AND A.DepartmentId = B.DepartmentId);