describe('electronsAroundCores', function() {
	let electrons;

	beforeEach(function() {
		electrons = new ElectronsAroundCores();
	});

	it('should return 6 for 1,2,3,4,5', function() {
		expect(electrons.calc([1, 2, 3, 4, 5])).toEqual(6);
	});
});