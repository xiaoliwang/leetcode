<?php
function singleNumber($nums){
	$x1 = 0;
	$x2 = 0;
	$mask = 0;
	
	$len = count($nums);
	for ($i = 0; $i<$len; $i++){
		$x2 ^= $x1 & $nums[$i];
		$x1 ^= $nums[$i];
		echo 'x2before:'.decbin($x2)."\n";
		echo 'x1before:'.decbin($x1)."\n";
		$mask = ~($x1 & $x2);
		echo 'mask:'.decbin($mask)."\n";
		$x2 &= $mask;
		$x1 &= $mask;
		echo 'x2after:'.decbin($x2)."\n";
		echo 'x1after:'.decbin($x1)."\n";
		echo "\n";
	}
	return $x1;
}

echo 'end:"'.singleNumber([2,2,1,1,2])."\n";