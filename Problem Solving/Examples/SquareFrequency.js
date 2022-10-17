const twoArrays1 = [
  [1, 2, 3, 4],
  [16, 9, 4, 1],
];
const twoArrays2 = [
  [1, 2, 3, 4],
  [16, 9, 4, 1],
];
const twoArrays3 = [
  [1, 2, 3, 4],
  [16, 9, 4, 1],
];

// ---------------------------------------------------------
// Naive approach without array methods - O(n^2)
function same1(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let index = findIndex(arr2, arr1[i] ** 2);
    if (index === -1) {
      return false;
    }
    removeElement(arr2, index);
  }
  return true;
}

function findIndex(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (val === arr[i]) {
      return i;
    }
  }
  return -1;
}

function removeElement(arr, index) {
  for (let i = index; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.pop();
  return arr;
}

console.log(same1(...twoArrays1));

// ---------------------------------------------------------
// Naive Approach using Array Methods - O(n^2)
function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let index = arr2.indexOf(arr1[i] ** 2);
    if (index === -1) {
      return false;
    }
    arr2.splice(index, 1);
  }
  return true;
}

console.log(same2(...twoArrays2));

// ---------------------------------------------------------
// Better approach using objects - O(n)
function same3(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const arr1Obj = {};
  const arr2Obj = {};

  for (let val of arr1) {
    arr1Obj[val] = ++arr1Obj[val] || 1;
  }

  for (let val of arr2) {
    arr2Obj[val] = ++arr2Obj[val] || 1;
  }

  for (let key in arr1Obj) {
    if (!arr2Obj[key ** 2]) {
      return false;
    }
    if (arr2Obj[key ** 2] !== arr1Obj[key]) {
      return false;
    }
  }
  return true;
}

console.log(same3(...twoArrays3));
