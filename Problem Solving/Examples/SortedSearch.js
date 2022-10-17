const args = [[1, 2, 3, 4, 5, 6, 7, 8, 23, 34, 56, 77], 33];

//Naive Approach - O(n)
function sortedSearch1(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      return i;
    }
  }
  return -1;
}

console.log(sortedSearch1(...args));

//Divide and Conquer Approach(Binary Search) - O(log n)
function sortedSearch2(arr, n) {
  let first = 0;
  let last = arr.length - 1;

  while (first <= last) {
    let middle = Math.floor((first + last) / 2);
    if (arr[middle] > n) {
      last = middle - 1;
    } else if (arr[middle] < n) {
      first = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(sortedSearch2(...args));
