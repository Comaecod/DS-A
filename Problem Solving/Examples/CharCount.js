const charCount1 = (str) => {
  let charCounter = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      charCounter[char] = ++charCounter[char] || 1;
    }
  }
  return charCounter;
};

//-----------------------------------------

const charCount2 = (str) => {
  let charCounter = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (isAlphaNumeric(char)) {
      charCounter[char] = ++charCounter[char] || 1;
    }
  }
  return charCounter;
};

const isAlphaNumeric = (char) => {
  char = char.charCodeAt(0);
  if (
    (char > 47 && char < 58) ||
    (char > 64 && char < 91) ||
    (char > 96 && char < 123)
  ) {
    return true;
  }
  return false;
};

console.log(charCount1('Vishnu IS Good!!!'));
console.log(charCount2('Vishnu IS Good!!!'));

// { v: 1, i: 2, s: 2, h: 1, n: 1, u: 1, g: 1, o: 2, d: 1 }
// { v: 1, i: 2, s: 2, h: 1, n: 1, u: 1, g: 1, o: 2, d: 1 }
