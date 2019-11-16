export function Sha1(input: string): string {
	let javaStr: java.lang.String;
	if (input) {
		javaStr = new java.lang.String(input);
	} else {
		javaStr = new java.lang.String("");
	}
	const bt = javaStr.getBytes();
	let result: string = '';
	try {
		let md = java.security.MessageDigest.getInstance('SHA-1');
		md.update(bt);
		const out = md.digest();
		result = _Format(out);
	} catch (e) {
		console.log(`SHA-1 error - ${e}`);
		return null;
	}
	return result;
}


export function Sha224(input: string): string {
	let javaStr: java.lang.String;
	if (input) {
		javaStr = new java.lang.String(input);
	} else {
		javaStr = new java.lang.String("");
	}
	const bt = javaStr.getBytes();
	let result: string = '';
	try {
		let md = java.security.MessageDigest.getInstance('SHA-224');
		md.update(bt);
		const out = md.digest();
		result = _Format(out);
	} catch (e) {
		console.log(`SHA-224 error - ${e}`);
		return null;
	}
	return result;
}


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
		result = _Format(out);
	} catch(e) {
		console.log(`SHA-256 error - ${e}`);
		return null;
	}
	return result;
}


export function Sha384(input: string): string {
	let javaStr: java.lang.String;
	if (input) {
		javaStr = new java.lang.String(input);
	} else {
		javaStr = new java.lang.String("");
	}
	const bt = javaStr.getBytes();
	let result: string = '';
	try {
		let md = java.security.MessageDigest.getInstance('SHA-384');
		md.update(bt);
		const out = md.digest();
		result = _Format(out);
	} catch (e) {
		console.log(`SHA-384 error - ${e}`);
		return null;
	}
	return result;
}


export function Sha512(input: string): string {
	let javaStr: java.lang.String;
	if (input) {
		javaStr = new java.lang.String(input);
	} else {
		javaStr = new java.lang.String("");
	}
	const bt = javaStr.getBytes();
	let result: string = '';
	try {
		let md = java.security.MessageDigest.getInstance('SHA-512');
		md.update(bt);
		const out = md.digest();
		result = _Format(out);
	} catch (e) {
		console.log(`SHA-512 error - ${e}`);
		return null;
	}
	return result;
}


// ----------------------------------------------------------------------------
// Internal

function _Format(data: native.Array<number>): string {
	let result: string = '';
	let tmp: string;
	for (let i = 0; i !== data.length; i++) {
		tmp = java.lang.Integer.toHexString((data[i] + 256) % 256);
		if (tmp.length % 2 === 1) {
			result += '0';
		}
		result += tmp;
	}
	return result;
}
