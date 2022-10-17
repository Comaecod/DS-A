const arr = [-4, -3, -2, -1, 0, 1, 2, 5];

//Naive Approach - TC => O(n^2), SC => O(1)
function sumZero1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

console.log(sumZero1([...arr]));

//Multiple Pointers - TC => O(n), SC => O(1)
function sumZero2(arr) {
  let first = 0;
  let last = arr.length - 1;
  while (first < last) {
    let sum = arr[first] + arr[last];
    if (sum === 0) {
      return [arr[first], arr[last]];
    } else if (sum > 0) {
      last--;
    } else {
      first++;
    }
  }
}

console.log(sumZero2([...arr]));
