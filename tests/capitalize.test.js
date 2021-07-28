const capitalize = require("../code/capitalize");

test('first char is capitalized', () => {
	expect(capitalize('shieeee')).toBe('Shieeee');
});