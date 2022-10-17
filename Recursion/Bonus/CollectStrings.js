/*
collectStrings

Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string
*/

function collectStrings(o) {
  let arr = [];
  function recursive(o) {
    for (const key in o) {
      if (typeof o[key] === 'object') {
        return recursive(o[key]);
      } else if (typeof key === 'string') {
        arr.push(o[key]);
      }
    }
  }
  recursive(o);
  return arr;
}

const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj));

// ["foo", "bar", "baz"])
