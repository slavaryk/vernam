import { getRandomNumberIncluded } from '@utility/getRandomNumberIncluded';

describe('getRandomNumberIncluded', () => {
	function testFunctionWithMinMaxNumbers(min: number, max: number) {
		const result = getRandomNumberIncluded(min, max);
		expect(result).toBeGreaterThanOrEqual(min);
		expect(result).toBeLessThanOrEqual(max);
	}

	test('Should return a number between 0 and 100', () => {
		testFunctionWithMinMaxNumbers(0, 100);
	});

	test('Should return a number between 0 and 10', () => {
		testFunctionWithMinMaxNumbers(0, 10);
	});

	test('Should return a number between -10 and 10', () => {
		testFunctionWithMinMaxNumbers(-10, 10);
	});

	test('Should return a number between -100 and 100', () => {
		testFunctionWithMinMaxNumbers(-100, 100);
	});
});
