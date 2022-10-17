// const arr = [213, 42, 3, 2, 1, 23, 4, 235, 5, 125, 5, 6, 74];
const arr = [235, 1, 2, 3, 4, 5, 5, 6, 23, 42, 74, 125, 213];

// Unptimized Bubble Sort
function bubbleSortUnoptimized(arr) {
  let counter = 0;
  for (let i = arr.length; i > 0; i--)
    for (let j = 0; j < i - 1; j++) {
      counter++;
      arr[j] > arr[j + 1] ? swap(arr, j, j + 1) : null;
    }
  return [arr, counter];
}

// Optimized Bubble Sort (can help for nearly sorted arrays)
function bubbleSortOptimized(arr) {
  let counter = 0;
  for (let i = arr.length; i > 0; i--) {
    let wasSwapped = true;
    for (let j = 0; j < i - 1; j++) {
      counter++;
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        wasSwapped = false;
      }
    }
    if (wasSwapped) break;
  }
  return [arr, counter];
}

// Optimized Bubble Sort using While Loop (can help for nearly sorted arrays)
function bubbleSortOptimizedWhile(arr) {
  let wasSwapped = true;
  let counter = 0;
  let reduceArrayLengthby1 = arr.length - 1;
  while (wasSwapped) {
    wasSwapped = false;
    for (let i = 0; i < reduceArrayLengthby1; i++) {
      counter++;
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        wasSwapped = true;
      }
    }
    reduceArrayLengthby1--;
  }
  return [arr, counter];
}

// Swap Function
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log('Unoptimized: ', bubbleSortUnoptimized([...arr]));
console.log('Optimized: ', bubbleSortOptimized([...arr]));
console.log('Optimized While: ', bubbleSortOptimizedWhile([...arr]));
