/*
nestedEvenSum

Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.
*/

function nestedEvenSum1(o) {
  let sum = 0;
  function recursive(o) {
    for (let key in o) {
      if (typeof o[key] === 'number' && o[key] % 2 === 0)
        sum += o[key];
      else if (typeof o[key] === 'object')
        return recursive(o[key]);
    }
  }
  recursive(o);
  return sum;
}

function nestedEvenSum2(obj, sum = 0) {
  for (var key in obj) {
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
};

var obj2 = {
  a: 2,
  b: {
    b: 2,
    bb: {
      b: 3,
      bb: {
        b: 2
      }
    }
  },
  c: {
    c: {
      c: 2
    },
    cc: 'ball',
    ccc: 5
  },
  d: 1,
  e: {
    e: {
      e: 2
    },
    ee: 'car'
  }
};

nestedEvenSum1(obj1);// 6
nestedEvenSum2(obj2);// 10
