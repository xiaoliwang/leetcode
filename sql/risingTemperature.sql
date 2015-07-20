--first solusion
select t1.id from Weather t1, Weather t2 where t1.Temperature > t2.Temperature and date_sub(t1.Date, interval 1 day) = t2.Date;
--second solusion
SELECT wt1.Id FROM Weather wt1, Weather wt2 WHERE wt1.Temperature > wt2.Temperature AND TO_DAYS(wt1.DATE)-TO_DAYS(wt2.DATE)=1;