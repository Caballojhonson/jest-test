function reverseString(string) {
    let split = string.split('');
    let reversed = split.reverse();
    return reversed.join('');
}

module.exports = reverseString;