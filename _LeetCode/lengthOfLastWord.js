function lengthOfLastWord(s) {
  return s.trim().split(' ').slice(-1)[0].length;

  // s = s.trim();
  // let counter = 0;
  // for (let i = s.length-1; i >= 0; i--) {
  //     if (s[i] === ' ') {
  //         return counter;
  //     }
  //     counter++;
  // }
}

console.log(lengthOfLastWord('My Name is Vishnu  '));
