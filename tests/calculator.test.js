const calculator = require("../code/calculator");

test('sums 2 numbers', () => {
    expect(calculator.sum(2, 6)).toBe(8)
});

test('substracts 2 numbers', () => {
    expect(calculator.sub(5, 5)).toBe(0)
})

test('multiplies 2 numbers', () => {
    expect(calculator.mul(5, 5)).toBe(25)
})

test('divides 2 numbers', () => {
    expect(calculator.div(10, 3)).toBeCloseTo(3.3, 2)
});