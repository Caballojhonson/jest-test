const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function numberifyMessage(raw) {
	let numbers = [];

	Array.from(raw).forEach((char) => {
		if (char === ' ' || char === '.' || char === ',') numbers.push(char);
		else numbers.push(alphabet.indexOf(char));
	});

	return numbers;
}

function offsetNums(nums, offset) {
	let processed = [];

	nums.forEach((num) => {
		if (num === ' ' || num === '.' || num === ',') processed.push(num);
		else {
			let sum = num + offset;

			if (sum > 25) sum = sum - 26;

			processed.push(sum);
		}
	});

	return processed;
}

function stringify(nums) {
	let chars = [];
	nums.forEach((num) => {
		if (num === ' ' || num === '.' || num === ',') chars.push(num);
		else chars.push(alphabet[num]);
	});
	return chars.join('');
}

function caesar(shift, string) {
	return stringify(offsetNums(numberifyMessage(string), shift));
}

module.exports = caesar;
