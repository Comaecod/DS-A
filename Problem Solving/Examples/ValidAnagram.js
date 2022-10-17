const strings = ['anagrams', 'nagarams'];

//My Solution (using Frequency Counter Approach) - O(3n)
function validAnagram1(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const str1Obj = {};
  const str2Obj = {};

  for (const char of str1) {
    // str1Obj[char] ? str1Obj[char]++ : (str1Obj[char] = 1);
    str1Obj[char] = ++str1Obj[char] || 1;
  }

  for (const char of str2) {
    // str2Obj[char] ? str2Obj[char]++ : (str2Obj[char] = 1);
    str2Obj[char] = ++str2Obj[char] || 1;
  }

  for (const key in str1Obj) {
    if (!str2Obj[key]) {
      return false;
    }
    if (str1Obj[key] !== str2Obj[key]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram1(...strings));

//Better solution (using Frequency Counter Approach) - O(2n)
function validAnagram2(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const strObj = {};

  for (const char of str1) {
    // strObj[char] ? strObj[char]++ : (strObj[char] = 1);
    strObj[char] = ++strObj[char] || 1;
  }

  for (const char of str2) {
    if (!strObj[char]) {
      return false;
    } else {
      strObj[char]--;
    }
  }
  return true;
}

console.log(validAnagram2(...strings));

//Naive solution (using Array Method Chaining)
function validAnagram3(str1, str2) {
  if (str1.length !== str2.length) return false;
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(validAnagram3(...strings));
