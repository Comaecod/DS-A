/*
Frequency Counter / Multiple Pointers - areThereDuplicates

Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
Restrictions:

Time - O(n)
Space - O(n)

Bonus:

Time - O(n log n)
Space - O(1)
*/

const args = ['a', 'b', 'c', 'a'];

//Naive Approach - Bruteforce, TC => O(n^2), SC => O(1)
function areThereDuplicatesNaive(...args) {
  for (let i = 0; i < args.length; i++) {
    let counter = 0;
    for (let j = 0; j < args.length; j++) {
      if (args[i] === args[j]) {
        counter++;
      }
      if (counter === 2) {
        return true;
      }
    }
  }
  return false;
}

//One Liner Solution - In-built methods, TC => O(n), SC => O(1)
function areThereDuplicatesOneLiner(...args) {
  return new Set(args).size !== args.length;
}

//Frequency Counter Pattern - TC => O(n), SC => O(n)
function areThereDuplicatesFrequencyCounter(...args) {
  const numObj = {};

  for (const key of args) {
    if (numObj[key]) {
      return true;
    }
    numObj[key] = true;
  }
  return false;
}

//Multiple Counter Pattern(need to sort the array first) - TC => O(n log n), SC => O(1)
function areThereDuplicatesMultiplePointers(...args) {
  args.sort();

  for (let i = 0; i < args.length - 1; i++) {
    if (args[i] === args[i + 1]) {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicatesNaive(...args));
console.log(areThereDuplicatesOneLiner(...args));
console.log(areThereDuplicatesFrequencyCounter(...args));
console.log(areThereDuplicatesMultiplePointers(...args));
