const { expect } = require("@jest/globals")
const caesar = require("../code/caesar")

test('Encripts a simple lowercase string', () => {
    expect(caesar(2, 'abz')).toBe('cdb')
})

test('Encripts a long lowercase string', () => {
    expect(caesar(3, 'shitty titties')).toBe('vklwwb wlwwlhv')
})

