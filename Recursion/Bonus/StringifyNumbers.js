/*
stringifyNumbers

Write a function called stringifyNumbers which takes in 
an object and finds all of the values which are numbers 
and converts them to strings. 
Recursion would be a great way to solve this!
*/

function stringifyNumbers(object) {
  const newObj = {};
  for (const key in object) {
    if (typeof object[key] === 'number') newObj[key] = object[key].toString();
    else if (typeof object[key] === 'object' && !Array.isArray(object[key]))
      newObj[key] = stringifyNumbers(object[key]);
    else newObj[key] = object[key];
  }
  return newObj;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
      thisIsAnArray: [1, 'vishnu', true],
    },
  },
};

console.log(stringifyNumbers(obj));

/*
Output:

{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
