--first Solution
SELECT Request_at Day, ROUND(SUM(Status)/COUNT(*),2) `Cancellation Rate` FROM (SELECT IF(Status = 'completed', 0, 1) Status, Request_at FROM Trips t LEFT JOIN Users t1 ON t.Client_Id = t1.Users_Id LEFT JOIN Users t2 ON t.Driver_Id = t2.Users_Id WHERE t1.Banned = 'No' AND t2.Banned = 'No'AND Request_at BETWEEN '2013-10-01' AND '2013-10-03') tt2 GROUP BY Request_at;

--second Solution
SELECT Request_at Day, ROUND(SUM(IF(Status = 'completed', 0, 1))/COUNT(*),2) `Cancellation Rate` FROM Trips t LEFT JOIN Users t1 ON t.Client_Id = t1.Users_Id LEFT JOIN Users t2 ON t.Driver_Id = t2.Users_Id WHERE t1.Banned = 'No' AND t2.Banned = 'No'AND Request_at BETWEEN '2013-10-01' AND '2013-10-03' GROUP BY t.Request_at;