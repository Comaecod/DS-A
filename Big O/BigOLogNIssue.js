function thisIsBigOLogN(val) {
  let counter = 0;
  let lastIValue = 0;
  for (let i = val; i > 0; i = Math.floor(i / 2)) {
    lastIValue = i;
    counter++;
  }
  return [counter, lastIValue];
}

function thisIsAWeirdBigOLogN(val) {
  let counter = 0;
  let lastIValue = 0;
  for (let i = val; i > 0; i /= 2) {
    lastIValue = i;
    counter++;
  }
  return [counter, lastIValue];
}

const val = 1; //try setting this to '1'.

const lite = thisIsBigOLogN(val);
console.log('Integer Division');
console.log('Number of loops:', lite[0]);
console.log("Last Divided 'i' value:", lite[1]);

console.log('--------------------------------');

const heavy = thisIsAWeirdBigOLogN(val);
console.log('Float Division');
console.log('Number of loops:', heavy[0]);
console.log("Last Divided 'i' value:", heavy[1]);
