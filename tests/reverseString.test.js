const reverseString = require("../code/reverseString");

test('reverses string', () => {
    expect(reverseString('Shit')).toBe('tihS');
});