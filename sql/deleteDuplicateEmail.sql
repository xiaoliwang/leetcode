--first solusion
delete from Person where Email in (select Email from (select Email from Person t1 group by Email having count(*) > 1) t) and  id not in (select id from (select id from Person t1 group by Email order by id) t1);
--second solusion
DELETE p1 FROM Person p1, Person p2 WHERE p1.Email = p2.Email AND p1.Id > p2.Id;