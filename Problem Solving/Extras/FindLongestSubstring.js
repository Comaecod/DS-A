const string = 'rithmschool';
/*
Sliding Window - findLongestSubstring

Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6

Time Complexity - O(n)
*/

// O(n^3) - Naive Approach
function longestSubstring1(str) {
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      const substring = str.slice(i, j + 1);
      // const substring = str.substring(i, j + 1);
      // console.log(substring);
      if (isUnique(substring)) {
        max = Math.max(substring.length, max);
      }
    }
  }
  return max;
}

function isUnique(substring) {
  const set = new Set();
  for (let i = 0; i < substring.length; i++) {
    if (set.has(substring[i])) {
      return false;
    }
    set.add(substring[i]);
  }
  return true;
}

console.log(`%cO(n^3) \t- Max Substring for '${string}' => ${longestSubstring1(string)}`, 'color: lightgreen');

//O(n^2) - using sets, could be better using map.

function longestSubstring3(str) {
  const seen = new Set();
  let start = 0;
  let max = 0;

  for (let end = 0; end < str.length; end++) {
    const char = str[end];

    while (seen.has(char)) {
      seen.delete(str[start]);
      start++;
    }

    seen.add(char);
    max = Math.max(max, end - start + 1);
  }
  return max;
}

console.log(`%cO(n^2) \t- Max Substring for '${string}' => ${longestSubstring3(string)}`, 'color: orange');

// O(n) using objects or hash maps to remember previously visited character
function longestSubstring2(str) {
  let start = 0;
  let max = 0;
  let seen = {};

  for (let end = 0; end < str.length; end++) {
    let char = str[end];
    if (seen[char] !== undefined && seen[char] >= start) {
      start = seen[char] + 1;
    }
    seen[char] = end;
    max = Math.max(max, end - start + 1);
  }
  return max;
}

console.log(`%cO(n) \t- Max Substring for '${string}' => ${longestSubstring2(string)}`, 'color: cyan');

//O(n) best solution by tutor - JS.
function longestSubstring4(str) {
  let seen = {};
  let start = 0;
  let longest = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }
  return longest;
}

console.log(`%cO(n)~ \t- Max Substring for '${string}' => ${longestSubstring4(string)}`, 'color: yellow');

'Completed';