function reverse(str) {
    let newStr = '';
    function recursive(str) {
        if (str.length === 0) return;
        newStr += str[str.length - 1];
        recursive(str.slice(0, str.length - 1));
    }
    recursive(str);
    return newStr;
}

reverse('vishnu');

function reverse(str) {
    return str.length <= 1 ? str : reverse(str.slice(1)) + str[0];
}

reverse('vishnu');