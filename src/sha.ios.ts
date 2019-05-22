
export function Sha256(input: string): string {
	const nsStr: NSString = NSString.stringWithString(input);
	const nsData: NSData = nsStr.dataUsingEncoding(NSUTF8StringEncoding);
	const hash: NSMutableData = NSMutableData.dataWithLength(32);

	CC_SHA256(nsData.bytes, nsData.length, <string><unknown>hash.mutableBytes);

	const sha256: NSData = NSData.dataWithBytesLength(hash.mutableBytes, 32);
	return sha256.toString().replace(/[<>\s]/g, '');
}
