import { Sha1, Sha224, Sha256, Sha384, Sha512 } from 'nativescript-sha';

describe("Sha1()", () => {
	it("Function exists", () => {
		expect(Sha1).toBeDefined();
	});
	it("Test: abcdefghijklmnopqrstuvwxyz", () => {
		expect(Sha1("abcdefghijklmnopqrstuvwxyz")).toEqual("32d10c7b8cf96570ca04ce37f2a19d84240d3a89");
	});
	it("Test: The quick brown fox jumps over the lazy dog", () => {
		expect(Sha1("The quick brown fox jumps over the lazy dog")).toEqual("2fd4e1c67a2d28fced849ee1bb76e7391b93eb12");
	});
	it("Test: [EMPTY]", () => {
		expect(Sha1("")).toEqual("da39a3ee5e6b4b0d3255bfef95601890afd80709");
	});
});


describe("Sha224()", () => {
	it("Function exists", () => {
		expect(Sha224).toBeDefined();
	});
	it("Test: abcdefghijklmnopqrstuvwxyz", () => {
		expect(Sha224("abcdefghijklmnopqrstuvwxyz")).toEqual("45a5f72c39c5cff2522eb3429799e49e5f44b356ef926bcf390dccc2");
	});
	it("Test: The quick brown fox jumps over the lazy dog", () => {
		expect(Sha224("The quick brown fox jumps over the lazy dog")).toEqual("730e109bd7a8a32b1cb9d9a09aa2325d2430587ddbc0c38bad911525");
	});
	it("Test: [EMPTY]", () => {
		expect(Sha224("")).toEqual("d14a028c2a3a2bc9476102bb288234c415a2b01f828ea62ac5b3e42f");
	});
});


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


describe("Sha384()", () => {
	it("Function exists", () => {
		expect(Sha384).toBeDefined();
	});
	it("Test: abcdefghijklmnopqrstuvwxyz", () => {
		expect(Sha384("abcdefghijklmnopqrstuvwxyz")).toEqual("feb67349df3db6f5924815d6c3dc133f091809213731fe5c7b5f4999e463479ff2877f5f2936fa63bb43784b12f3ebb4");
	});
	it("Test: The quick brown fox jumps over the lazy dog", () => {
		expect(Sha384("The quick brown fox jumps over the lazy dog")).toEqual("ca737f1014a48f4c0b6dd43cb177b0afd9e5169367544c494011e3317dbf9a509cb1e5dc1e85a941bbee3d7f2afbc9b1");
	});
	it("Test: [EMPTY]", () => {
		expect(Sha384("")).toEqual("38b060a751ac96384cd9327eb1b1e36a21fdb71114be07434c0cc7bf63f6e1da274edebfe76f65fbd51ad2f14898b95b");
	});
});


describe("Sha512()", () => {
	it("Function exists", () => {
		expect(Sha512).toBeDefined();
	});
	it("Test: abcdefghijklmnopqrstuvwxyz", () => {
		expect(Sha512("abcdefghijklmnopqrstuvwxyz")).toEqual("4dbff86cc2ca1bae1e16468a05cb9881c97f1753bce3619034898faa1aabe429955a1bf8ec483d7421fe3c1646613a59ed5441fb0f321389f77f48a879c7b1f1");
	});
	it("Test: The quick brown fox jumps over the lazy dog", () => {
		expect(Sha512("The quick brown fox jumps over the lazy dog")).toEqual("07e547d9586f6a73f73fbac0435ed76951218fb7d0c8d788a309d785436bbb642e93a252a954f23912547d1e8a3b5ed6e1bfd7097821233fa0538f3db854fee6");
	});
	it("Test: [EMPTY]", () => {
		expect(Sha512("")).toEqual("cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e");
	});
});
