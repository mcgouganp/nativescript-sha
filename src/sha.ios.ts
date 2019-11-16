export function Sha1(input: string): string {
	const nsStr: NSString = NSString.stringWithString(input);
	const nsData: NSData = nsStr.dataUsingEncoding(NSUTF8StringEncoding);
	const hash: NSMutableData = NSMutableData.dataWithLength(20);

	CC_SHA1(nsData.bytes, nsData.length, <string><unknown>hash.mutableBytes);

	const data: NSData = NSData.dataWithBytesLength(hash.mutableBytes, 20);

	return _Format(data);
}


export function Sha224(input: string): string {
	const nsStr: NSString = NSString.stringWithString(input);
	const nsData: NSData = nsStr.dataUsingEncoding(NSUTF8StringEncoding);
	const hash: NSMutableData = NSMutableData.dataWithLength(28);

	CC_SHA224(nsData.bytes, nsData.length, <string><unknown>hash.mutableBytes);

	const data: NSData = NSData.dataWithBytesLength(hash.mutableBytes, 28);

	return _Format(data);
}


export function Sha256(input: string): string {
	const nsStr: NSString = NSString.stringWithString(input);
	const nsData: NSData = nsStr.dataUsingEncoding(NSUTF8StringEncoding);
	const hash: NSMutableData = NSMutableData.dataWithLength(32);

	CC_SHA256(nsData.bytes, nsData.length, <string><unknown>hash.mutableBytes);

	const data: NSData = NSData.dataWithBytesLength(hash.mutableBytes, 32);

	return _Format(data);
}


export function Sha384(input: string): string {
	const nsStr: NSString = NSString.stringWithString(input);
	const nsData: NSData = nsStr.dataUsingEncoding(NSUTF8StringEncoding);
	const hash: NSMutableData = NSMutableData.dataWithLength(48);

	CC_SHA384(nsData.bytes, nsData.length, <string><unknown>hash.mutableBytes);

	const data: NSData = NSData.dataWithBytesLength(hash.mutableBytes, 48);

	return _Format(data);
}


export function Sha512(input: string): string {
	const nsStr: NSString = NSString.stringWithString(input);
	const nsData: NSData = nsStr.dataUsingEncoding(NSUTF8StringEncoding);
	const hash: NSMutableData = NSMutableData.dataWithLength(64);

	CC_SHA512(nsData.bytes, nsData.length, <string><unknown>hash.mutableBytes);

	const data: NSData = NSData.dataWithBytesLength(hash.mutableBytes, 64);

	return _Format(data);
}


// ----------------------------------------------------------------------------
// Internal

function _Format(data: NSData): string {
	const buffer: ArrayBuffer = interop.bufferFromData(data);
	const view: Uint8Array = new Uint8Array(buffer);

	let result: string = "";
	for (let i = 0; i !== data.length; ++i) {
		let tmp: string = view[i].toString(16);
		if (tmp.length === 1) {
			result += "0";
		}
		result += tmp;
	}
	return result;
}
