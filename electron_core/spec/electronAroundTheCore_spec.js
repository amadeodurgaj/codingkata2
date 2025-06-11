describe('electronsAroundCores', function() {
	let electrons;

	beforeEach(function() {
		electrons = new ElectronsAroundCores();
	});

	it('should return 6 for 1,2,3,4,5', function() {
		expect(electrons.calc([1, 2, 3, 4, 5])).toEqual(6);
	});

	it('should return 4 for 2,2,3,3', function() {
		expect(electrons.calc([2, 2, 3, 3])).toEqual(4);
	});

	it('should return 2 for 6,6,4,4,1,3', function() {
		expect(electrons.calc([6, 6, 4, 4, 1, 3])).toEqual(2);
	});
	
	it('should return 12 for 3,5,3,5,4,2', function() {
		expect(electrons.calc([3, 5, 3, 5, 4, 2])).toEqual(12);
	});
});