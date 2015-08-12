/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
   
   var i = 0;
   while (i < x) {
	   i = i * 10 + x % 10;
	   x = Math.floor(x / 10);
   }
   
   return (i === x || Math.floor(i / 10) === x);
};

module.exports = isPalindrome;