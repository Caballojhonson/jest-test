
const analyze = require("../code/analysis");

test('Contains average, min, max & length and values match', () => {
    expect(analyze([6,12,18,6,4,3,8,9])).toMatchObject({ average: 8.25, min: 3, max: 18, length: 8 })
})
