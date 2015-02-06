var should = require('should');
var extend = require('../index');

describe('deep-extend', function() {
	it('can work with extend schemes', function () {
		var profileA = {
			data: {
				firstName: 'Ad',
				lastName: 'Lauters',
				fullName: 'Ad Lauters',
				address: 'Jantjesstraat 10'
			}
		};

		var profileB = {
			data: {
				firstName: 'Ad',
				lastName: 'Lauters',
				fullName: 'Ad Lauters',
				address: 'Pietjesstraat 10'
			}
		};

		var profileC = {
			data: {
				firstName: 'Ad',
				lastName: 'Lauters',
				fullName: 'Ad Lauters',
				address: 'Tentjesstraat 25'
			}
		};

		var profileD = {
			data: {
				firstName: 'Ad',
				lastName: 'Lauters',
				fullName: 'Ad Lauters',
				address: 'Tralalastraat 25'
			}
		};

		var extendScheme = {
			data: {
				address: Array
			}
		};

		var result = extend(profileA, profileB, profileC, {scheme: extendScheme});

		result.data.address.should.instanceOf(Array);
	});
});
