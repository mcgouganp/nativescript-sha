import { Sha1, Sha224, Sha256, Sha384, Sha512, HmacSha1, HmacSha224, HmacSha256, HmacSha384, HmacSha512 } from 'nativescript-sha';

describe("Sha1()", () => {
	it("Function exists", () => {
		expect(Sha1).toBeDefined();
	});
	it("HASH(abcdefghijklmnopqrstuvwxyz)", () => {
		expect(Sha1("abcdefghijklmnopqrstuvwxyz")).toEqual("32d10c7b8cf96570ca04ce37f2a19d84240d3a89");
	});
	it("HASH(The quick brown fox jumps over the lazy dog)", () => {
		expect(Sha1("The quick brown fox jumps over the lazy dog")).toEqual("2fd4e1c67a2d28fced849ee1bb76e7391b93eb12");
	});
	it("HASH()", () => {
		expect(Sha1("")).toEqual("da39a3ee5e6b4b0d3255bfef95601890afd80709");
	});
});


describe("Sha224()", () => {
	it("Function exists", () => {
		expect(Sha224).toBeDefined();
	});
	it("HASH(abcdefghijklmnopqrstuvwxyz)", () => {
		expect(Sha224("abcdefghijklmnopqrstuvwxyz")).toEqual("45a5f72c39c5cff2522eb3429799e49e5f44b356ef926bcf390dccc2");
	});
	it("HASH(The quick brown fox jumps over the lazy dog)", () => {
		expect(Sha224("The quick brown fox jumps over the lazy dog")).toEqual("730e109bd7a8a32b1cb9d9a09aa2325d2430587ddbc0c38bad911525");
	});
	it("HASH()", () => {
		expect(Sha224("")).toEqual("d14a028c2a3a2bc9476102bb288234c415a2b01f828ea62ac5b3e42f");
	});
});


describe("Sha256()", () => {
	it("Function exists", () => {
		expect(Sha256).toBeDefined();
	});
	it("HASH(abcdefghijklmnopqrstuvwxyz)", () => {
		expect(Sha256("abcdefghijklmnopqrstuvwxyz")).toEqual("71c480df93d6ae2f1efad1447c66c9525e316218cf51fc8d9ed832f2daf18b73");
	});
	it("HASH(The quick brown fox jumps over the lazy dog)", () => {
		expect(Sha256("The quick brown fox jumps over the lazy dog")).toEqual("d7a8fbb307d7809469ca9abcb0082e4f8d5651e46d3cdb762d02d0bf37c9e592");
	});
	it("HASH()", () => {
		expect(Sha256("")).toEqual("e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855");
	});
});


describe("Sha384()", () => {
	it("Function exists", () => {
		expect(Sha384).toBeDefined();
	});
	it("HASH(abcdefghijklmnopqrstuvwxyz)", () => {
		expect(Sha384("abcdefghijklmnopqrstuvwxyz")).toEqual("feb67349df3db6f5924815d6c3dc133f091809213731fe5c7b5f4999e463479ff2877f5f2936fa63bb43784b12f3ebb4");
	});
	it("HASH(The quick brown fox jumps over the lazy dog)", () => {
		expect(Sha384("The quick brown fox jumps over the lazy dog")).toEqual("ca737f1014a48f4c0b6dd43cb177b0afd9e5169367544c494011e3317dbf9a509cb1e5dc1e85a941bbee3d7f2afbc9b1");
	});
	it("HASH()", () => {
		expect(Sha384("")).toEqual("38b060a751ac96384cd9327eb1b1e36a21fdb71114be07434c0cc7bf63f6e1da274edebfe76f65fbd51ad2f14898b95b");
	});
});


describe("Sha512()", () => {
	it("Function exists", () => {
		expect(Sha512).toBeDefined();
	});
	it("HASH(abcdefghijklmnopqrstuvwxyz)", () => {
		expect(Sha512("abcdefghijklmnopqrstuvwxyz")).toEqual("4dbff86cc2ca1bae1e16468a05cb9881c97f1753bce3619034898faa1aabe429955a1bf8ec483d7421fe3c1646613a59ed5441fb0f321389f77f48a879c7b1f1");
	});
	it("HASH(The quick brown fox jumps over the lazy dog)", () => {
		expect(Sha512("The quick brown fox jumps over the lazy dog")).toEqual("07e547d9586f6a73f73fbac0435ed76951218fb7d0c8d788a309d785436bbb642e93a252a954f23912547d1e8a3b5ed6e1bfd7097821233fa0538f3db854fee6");
	});
	it("HASH()", () => {
		expect(Sha512("")).toEqual("cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e");
	});
});

describe("HmacSha1()", () => {
	it("Function exists", () => {
		expect(HmacSha1).toBeDefined();
	});
	it("HMAC('SECRETKEY', 'abcdefghijklmnopqrstuvwxyz')", () => {
		expect(HmacSha1("SECRETKEY", "abcdefghijklmnopqrstuvwxyz")).toEqual("bf486edfc9f612fa2dffa152b7058454b3fb48e6");
	});
	it("HMAC('SECRETKEY', 'The quick brown fox jumps over the lazy dog')", () => {
		expect(HmacSha1("SECRETKEY", "The quick brown fox jumps over the lazy dog")).toEqual("e60a26a595145e764b6a93bbeddf0837f7e80041");
	});
	it("HMAC('SECRETKEY', '')", () => {
		expect(HmacSha1("SECRETKEY", "")).toEqual("9669459c37e33323b340b698265a8c5ea7fce2d9");
	});
});


describe("HmacSha224()", () => {
	it("Function exists", () => {
		expect(HmacSha224).toBeDefined();
	});
	it("HMAC('SECRETKEY', 'abcdefghijklmnopqrstuvwxyz')", () => {
		expect(HmacSha224("SECRETKEY", "abcdefghijklmnopqrstuvwxyz")).toEqual("6e2c4d6a60bc3ad1abdfed7390c49f655da138aeca187958d8a741b4");
	});
	it("HMAC('SECRETKEY', 'The quick brown fox jumps over the lazy dog')", () => {
		expect(HmacSha224("SECRETKEY", "The quick brown fox jumps over the lazy dog")).toEqual("e953a61f840218026bc3cf9f6a24f0f0076711dbd3a9cb8dfe0a0e20");
	});
	it("HMAC('SECRETKEY', '')", () => {
		expect(HmacSha224("SECRETKEY", "")).toEqual("c6a9a3f417f28b82b7ffccef2aaf3d79f44c1b718c61e9549419776f");
	});
});


describe("HmacSha256()", () => {
	it("Function exists", () => {
		expect(HmacSha256).toBeDefined();
	});
	it("HMAC('SECRETKEY', 'abcdefghijklmnopqrstuvwxyz')", () => {
		expect(HmacSha256("SECRETKEY", "abcdefghijklmnopqrstuvwxyz")).toEqual("4c572b9de26f9a79d43a00d28986f5b8c767c4ac916a78fd5197f490bccc39ca");
	});
	it("HMAC('SECRETKEY', 'The quick brown fox jumps over the lazy dog')", () => {
		expect(HmacSha256("SECRETKEY", "The quick brown fox jumps over the lazy dog")).toEqual("66e6d978cedec7cfdce5b9e0b6a573c548990ae77295e6c734f4c3d741685455");
	});
	it("HMAC('SECRETKEY', '')", () => {
		expect(HmacSha256("SECRETKEY", "")).toEqual("5acc8cd5cb7aa0e0b29b10766e170d303f2d03c3110dbe02efc4f578364f9e5c");
	});
});


describe("HmacSha384()", () => {
	it("Function exists", () => {
		expect(HmacSha384).toBeDefined();
	});
	it("HMAC('SECRETKEY', 'abcdefghijklmnopqrstuvwxyz')", () => {
		expect(HmacSha384("SECRETKEY", "abcdefghijklmnopqrstuvwxyz")).toEqual("e4cb54e8aa8ae0e57d989ec703fe44e2b669f9789ea29f14f9fb82c46a057ab70865102d3b1a3bd2cf79ef05b1d54b27");
	});
	it("HMAC('SECRETKEY', 'The quick brown fox jumps over the lazy dog')", () => {
		expect(HmacSha384("SECRETKEY", "The quick brown fox jumps over the lazy dog")).toEqual("c91323fc8dcecdfaa039229db50be13794ab22db33ad47f80df65ba98b0800aca136702205f79019ad440869bf51f88d");
	});
	it("HMAC('SECRETKEY', '')", () => {
		expect(HmacSha384("SECRETKEY", "")).toEqual("e48bef0099144280b3f2ca724d7ab60fe03da028e35ec49a5496f196f0365df92998b9ecef72ec4eae300393f084827b");
	});
});


describe("HmacSha512()", () => {
	it("Function exists", () => {
		expect(HmacSha512).toBeDefined();
	});
	it("HMAC('SECRETKEY', 'abcdefghijklmnopqrstuvwxyz')", () => {
		expect(HmacSha512("SECRETKEY", "abcdefghijklmnopqrstuvwxyz")).toEqual("5bfb2a5ea0cf629e0ee77a7a67d1e4e125b089a9bfcba0cd5e3e02f1acb19ebecd76143b5a32fa52b67a32d30df54423121a804c17632d6b8ebfd1a893dd6150");
	});
	it("HMAC('SECRETKEY', 'The quick brown fox jumps over the lazy dog')", () => {
		expect(HmacSha512("SECRETKEY", "The quick brown fox jumps over the lazy dog")).toEqual("519965c696bb0f287149cb95b46c307316478b04187027f72471e79deb34c1cc0deab6825297dc1a6d435e15af6ff73131abdbb4478fdd34f4f5dccbf6840626");
	});
	it("HMAC('SECRETKEY', '')", () => {
		expect(HmacSha512("SECRETKEY", "")).toEqual("6b1b8ba124fb1f68d89fe6bb68998d3a06b5ab6591fdd48f92366149aea548e2b7206a4040566aa949a515c1f687f7aa2f0dd552d5136ce1616bd92593d94d28");
	});
});
