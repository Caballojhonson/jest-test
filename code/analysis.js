

function analyze(arr) {

	const avg = () => {
		let sum = 0;
		arr.forEach((num) => {
			sum += num;
		});
		return sum / arr.length;
	};

    const getMin = (a, b) => Math.min(a, b)

    const getMax = (a, b) => Math.max(a, b)

	return {
		average: avg(),
        min: arr.reduce(getMin),
        max: arr.reduce(getMax),
        length: arr.length
	};
}

module.exports = analyze;
