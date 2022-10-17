// Recursive Approach - General Example
function countDown1(num) {
  if (num === 0) {
    return 'Done';
  }
  console.log(num);
  num--;
  return countDown1(num);
}

console.log(`%cRecursive Approach => ${countDown1(3)}`, 'color: cyan');

// Iterative Approach - General Example, same as above
function countDown2(num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
  return 'Done';
}

console.log(`%cIterative Approach => ${countDown2(3)}`, 'color: yellow');

// Summing numbers from 1 to num - Recursion Example
function sumRange(num) {
  return num === 1 ? 1 : num + sumRange(num - 1);
}

sumRange(4);

// Factorial - Recursion Example
function factorial(num) {
  return num === 1 ? 1 : num * factorial(num - 1);
}

factorial(4);

// Helper Method Recursion - Collecting Odd numbers from a list example
function collectOdds1(arr) {
  const odds = [];
  function recursive(arr) {
    if (arr.length === 0) {
      return;
    }
    if (arr[0] % 2 !== 0) {
      odds.push(arr[0]);
    }
    recursive(arr.slice(1));
  }
  recursive(arr);
  return odds;
}

collectOdds1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Pure Recursive Method - Collecting Odd Numbers without helper recursive method, using 'concat'
function collectOdds2(arr) {
  let odds = [];
  if (arr.length === 0) {
    return odds;
  }
  if (arr[0] % 2 !== 0) {
    odds.push(arr[0]);
  }
  odds = odds.concat(collectOdds2(arr.slice(1)));
  return odds;
}

collectOdds2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
