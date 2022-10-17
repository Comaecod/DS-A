/*
Frequency Counter - sameFrequency

Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
*/

const args = [122, 212];

function sameFrequency(num1, num2) {
  num1 = num1 + '';
  num2 = num2 + '';

  const numObj = {};

  for (const key of num1) {
    numObj[key] = ++numObj[key] || 1;
  }

  for (const key of num2) {
    if (!numObj[key]) {
      return false;
    } else {
      numObj[key]--;
    }
  }

  return true;
}

console.log(sameFrequency(...args));
