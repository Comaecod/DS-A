/*
capitalizeWords

Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
*/

function capitalizedWords(arr) {
    if (arr.length === 1) {
        return [arr[0].toUpperCase()];
    }
    const res = capitalizedWords(arr.slice(0, -1));
    const string = arr[arr.length - 1].toUpperCase();
    res.push(string);
    return res;
}

let words = ['i', 'am', 'learning', 'recursion'];
capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']