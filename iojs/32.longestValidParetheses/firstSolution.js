/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  var stack = [];
  var len = s.length;
  var max = 0;
  var left = -1;
  for (var i = 0; i < len; ++i) {
  	if (s[i] === '(') {
  	  stack.push(i);
  	} else {
  	  if (stack) {
        stack.pop();
        if (!stack) {
          max = Math.max(max, i - left);
        } else {
          max = Math.max(max, i - stack.length);
        }
  	  } else {
  			left = i;
      }
  	}
  } 
  return max; 
};

var a = longestValidParentheses('(()())');
console.log(a);

