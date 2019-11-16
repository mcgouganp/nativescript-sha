
export function Sha256(input: string): string {
	const nsStr: NSString = NSString.stringWithString(input);
	const nsData: NSData = nsStr.dataUsingEncoding(NSUTF8StringEncoding);
	const hash: NSMutableData = NSMutableData.dataWithLength(32);

	CC_SHA256(nsData.bytes, nsData.length, <string><unknown>hash.mutableBytes);

	const sha256: NSData = NSData.dataWithBytesLength(hash.mutableBytes, 32);

	const buffer: ArrayBuffer = interop.bufferFromData(sha256);
	const view: Uint8Array = new Uint8Array(buffer);

	let result: string = "";
	for(let i = 0; i != 32; ++i) {
		let tmp: string = view[i].toString(16);
		if(tmp.length === 1) {
			result += "0";
		}
		result += tmp;
	}
	return result;

	/*
	let result: NSMutableString = NSMutableString.alloc().initWithCapacity(32 * 2);
	for(let i = 0; i != 32; ++i) {
		let tmp = sha256.bytes[i].toString();
		if(tmp.length === 1) {
			result.appendString("0");
		}
		result.appendString(tmp);
	}
	return result.copy();
	*/
}
