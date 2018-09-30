module.exports = function getZerosCount(number) {
	let zerosCount = 0;
	for (var i = 5; number/i >= 1; i = i * 5)
		zerosCount = zerosCount + Math.floor(number/i);
	return zerosCount;
}
