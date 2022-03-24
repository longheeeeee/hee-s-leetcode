/**
 * @param {number[]} numbers
 * @return {number}
 */

// 暴力法 + 二分
var minArray = function(numbers) {
  if (numbers.length === 1) return numbers[0]
  let left = 0, right = numbers.length - 1
  while(left !== right) {
    const mid = Math.floor((right - left) / 2) + left
    if (numbers[left] > numbers[mid]) {
      right = mid
    }
    else if (numbers[right] < numbers[mid]) {
      left = mid + 1
    }
    else {
      right -= 1
    }
  }
  return numbers[left]
};

// 暴力法
//  var minArray = function(numbers) {
//   if (numbers.length === 1) return numbers[0]
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i-1] > numbers[i]) return numbers[i]    
//   }
//   return numbers[0]
// };
// 某种奇奇怪怪的解法
// var minArray = function(numbers) {
//   // return Math.min(...numbers)
// };