const arr = [1, 7, 3, 6, 5, 6];

console.log(pivotIndexOnn(arr));
console.log(pivotIndexOn(arr));

// Bruteforce - O(n^2)
function pivotIndexOnn(nums) {
  let counter = 0;
  let pivot = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum1 = 0;
    let sum2 = 0;

    for (let j = 0; j < pivot; j++) {
      counter++;
      sum1 += nums[j];
    }

    for (let j = pivot + 1; j < nums.length; j++) {
      counter++;
      sum2 += nums[j];
    }

    if (sum1 === sum2) {
      return [pivot, counter];
    }

    pivot++;
  }
  return [-1, counter];
}

//Better Approach - O(n)
function pivotIndexOn(nums) {
  let counter = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    counter++;
    sum += nums[i];
  }

  //   OR -> let sum = nums.reduce((a, b) => a + b, 0);

  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < nums.length; i++) {
    counter++;
    rightSum = sum - leftSum - nums[i];
    if (leftSum === rightSum) {
      return [i, counter];
    }
    leftSum += nums[i];
  }
  return [-1, counter];
}
