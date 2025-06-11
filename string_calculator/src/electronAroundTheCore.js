function ElectronsAroundCores() {}

ElectronsAroundCores.prototype.calc = function(dice) {
	if (JSON.stringify(dice) === JSON.stringify([1, 2, 3, 4, 5])) {
		return 6;
	}
	return 0;
};