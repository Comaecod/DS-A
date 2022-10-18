// let counter = 0;
function swap(arr, i, j) {
  // counter++;
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    // counter++;
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, i, swapIndex);
    }
  }

  swap(arr, start, swapIndex);
  return swapIndex;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
  // counter++;
  if (start < end) {
    let pivotIndex = pivot(arr, start, end);
    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, end);
  }
  return arr;
}

// console.log(quickSort([10, 4, 5, 2, 7, 3, 8, 1, 9, 6]), counter);
console.log(quickSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), counter);
