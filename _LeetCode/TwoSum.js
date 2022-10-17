var twoSum = function (nums, target) {
  let storedVals = {};
  let i = 0;
  for (const val of nums) {
    if (storedVals[target - val]) return [storedVals[target - val], i];
    storedVals[val] = i;
    i++;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
