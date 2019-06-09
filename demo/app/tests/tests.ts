import { Sha256 } from 'nativescript-sha';

describe("Sha256()", () => {
	it("Function exists", () => {
		expect(Sha256).toBeDefined();
	});
	it("Test: abcdefghijklmnopqrstuvwxyz", () => {
		expect(Sha256("abcdefghijklmnopqrstuvwxyz")).toEqual("71c480df93d6ae2f1efad1447c66c9525e316218cf51fc8d9ed832f2daf18b73");
	});
	it("Test: The quick brown fox jumps over the lazy dog", () => {
		expect(Sha256("The quick brown fox jumps over the lazy dog")).toEqual("d7a8fbb307d7809469ca9abcb0082e4f8d5651e46d3cdb762d02d0bf37c9e592");
	});
	it("Test: [EMPTY]", () => {
		expect(Sha256("")).toEqual("e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855");
	});
});

