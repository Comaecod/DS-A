const arr = [1, 1, 1, 1, 1, 1, 2, 2, 3, 4];

// My Approach
function countUniqueValues1(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;
  let j = i + 1;

  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    j++;
  }
  return i + 1;
}

console.log(countUniqueValues1([...arr]));

// Tutor's Approach
function countUniqueValues2(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues2([...arr]));
