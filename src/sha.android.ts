
export function Sha256(input: string): string {
	let javaStr: java.lang.String;
	if(input) {
		javaStr = new java.lang.String(input);
	} else {
		javaStr = new java.lang.String("");
	}
	const bt = javaStr.getBytes();
	let result: string = '';
	try {
		let md = java.security.MessageDigest.getInstance('SHA-256');
		md.update(bt);
		const out = md.digest();
		let tmp: string;
		for(let i = 0; i !== out.length; i++) {
			tmp = java.lang.Integer.toHexString((out[i] + 256) % 256);
			if(tmp.length % 2 === 1) {
				result += '0';
			}
			result += tmp;
		}
	} catch(e) {
		console.log(`Sha256 error - ${e}`);
		return null;
	}
	return result;
}
