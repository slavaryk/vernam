import { getUnicodeFromCharacter } from "@utility/getUnicodeFromCharacter";

describe("getUnicodeFromCharacter", () => {
	test("Should throw an error if the length of the argument is greater than 1", () => {
		expect(() => getUnicodeFromCharacter("abc")).toThrow();
	});

	test("Should throw an error if the length of the argument is less than 1", () => {
		expect(() => getUnicodeFromCharacter("")).toThrow();
	});

	test("Should return '48' for character '0'", () => {
		expect(getUnicodeFromCharacter("0")).toBe(48);
	});

	test("Should return '49' for character '1'", () => {
		expect(getUnicodeFromCharacter("1")).toBe(49);
	});

	test("Should return '97' for character 'a'", () => {
		expect(getUnicodeFromCharacter("a")).toBe(97);
	});

	test("Should return '113' for character 'q'", () => {
		expect(getUnicodeFromCharacter("q")).toBe(113);
	});

	test("Should return '233' for character 'é'", () => {
		expect(getUnicodeFromCharacter("é")).toBe(233);
	});
});
