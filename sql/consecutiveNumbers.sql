SELECT DISTINCT t2.Num FROM 
	(SELECT Num, @consecutiveTimes := IF((@prev = (@prev := Num)), @consecutiveTimes + 1, 1) times FROM 	Logs, (SELECT @prev := -1) t1) t2 WHERE times > 2;