function insertionSort(arr) {
  let counter = 0;
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      let temp = arr[j];
      arr[j] = currentVal;
      arr[j + 1] = temp;
      // OR -> [arr[j], arr[j + 1]] = [currentVal, arr[j]];
      counter++;
    }
  }
  return [arr, counter];
}

console.log(insertionSort([2, 34, 34, 76, 0]));
