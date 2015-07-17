--First solution
select t.Score, t3.Rank from Scores t left join (select Score, (@rownum := @rownum + 1) Rank from (select distinct Score from Scores) t1, (select @rownum := 0) t2 order by Score desc) t3 on t.Score = t3.Score order by Score desc;
--Second solution
select Scores.Score, count(t1.Score) as rank from Scores t, (select distinct Score from Scores) t1 where t.Score <= t1.Score group by Scores.Id, Scores.Score Order By Scores.Score Desc
--Third solution
SELECT
  Score,
  @rank := @rank + (@prev <> (@prev := Score)) Rank
FROM
  Scores,
  (SELECT @rank := 0, @prev := -1) init
ORDER BY Score desc
--forth solution
SELECT
  Score,
  (SELECT count(*) FROM (SELECT distinct Score s FROM Scores) tmp WHERE s >= Score) Rank
FROM Scores
ORDER BY Score desc