// const arr = [213, 42, 3, 2, 1, 23, 4, 235, 5, 125, 5, 6, 74];
const arr = [235, 1, 2, 3, 4, 5, 5, 6, 23, 42, 74, 125, 213];

function selectionSort(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      counter++;
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    i !== min ? swap(arr, i, min) : null;
  }
  return [arr, counter];
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(selectionSort([...arr]));
