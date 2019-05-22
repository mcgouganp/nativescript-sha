

export function Sha256(input: string): string {
	var javaStr;
	if (input)
		javaStr = new java.lang.String(input);
	else
		return null;
	var md, strDes;
	var bt = javaStr.getBytes();
	try {
		md = java.security.MessageDigest.getInstance('SHA-256');
		md.update(bt);
		strDes = toHexString(md.digest());
	}
	catch (e) {
		return null;
	}
	return strDes;
}

function toHexString(input: string): string {
	var des = '', tmp;
	for (var i = 0; i < input.length; i++) {
		const ch:number = input.charCodeAt(i);
		tmp = java.lang.Integer.toHexString(ch);
		if (tmp.length == 1) {
			des += '0';
		}
		des += tmp;
	}
	return des;
}

