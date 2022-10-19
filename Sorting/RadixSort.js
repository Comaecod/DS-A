function getDigit(num, place) {
  num = Math.abs(num);
  const getToPlace = Math.pow(10, place);
  const placeValue = Math.floor(num / getToPlace) % 10;
  return placeValue;
}

function digitCount(num) {
  num = Math.abs(num);
  if (num === 0) return 1;
  return Math.floor(Math.log10(num)) + 1;
}

function maxDigitsInList(nums) {
  let max = 0;
  for (const val of nums) {
    max = Math.max(max, digitCount(val));
  }
  return max;
}

function radixSort(nums) {
  const numberOfBucketLoops = maxDigitsInList(nums);
  for (let k = 0; k < numberOfBucketLoops; k++) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      const digit = getDigit(nums[i], k);
      buckets[digit].push(nums[i]);
    }
    nums = [].concat(...buckets);
  }
  return nums;
}

console.log(radixSort([12, 3456, 123, 67, 859, 75, 6824, 9708]));
