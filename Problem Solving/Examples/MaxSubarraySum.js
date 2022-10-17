/*
Sliding Window - maxSubarraySum

Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null
Constraints:

Time Complexity - O(N)
Space Complexity - O(1)
*/

const args = [[1, 2, 5, 2, 8, 1, 4], 4];

// Naive Solution - O(n * m)
function maxSubarraySum1(arr, n) {
  if (n > arr.length) {
    return null;
  }

  let max = -Infinity;

  for (let i = 0; i <= arr.length - n; i++) {
    let temp = 0;
    for (let j = 0; j < n; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

console.log(maxSubarraySum1(...args));

//Sliding Window Approach - O(n + m)
function maxSubarraySum2(arr, n) {
  if (arr.length < n) {
    return null;
  }

  let tempSum = 0;
  let maxSum = 0;

  for (let i = 0; i < n; i++) {
    tempSum += arr[i];
  }
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum + arr[i] - arr[i - n];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
    // maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

console.log(maxSubarraySum2(...args));
