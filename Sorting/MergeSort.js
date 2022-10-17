function mergeSort() {}

function mergeSortedArrays(arr1, arr2) {
  let i = 0;
  let j = 0;
  let result = [];

  for (let index = 0; index < arr1.length + arr2.length; index++) {
    if (arr1[i] < arr2[j] && i < arr1.length) {
      result.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j] && j < arr2.length) {
      result.push(arr2[j]);
      j++;
    }
  }
  return result;
}

console.log(mergeSortedArrays([1, 10, 12, 34], [2, 8, 11, 22, 31]));
