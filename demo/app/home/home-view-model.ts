import { Observable, PropertyChangeData } from "@nativescript/core/data/observable";
import { Sha1, Sha224, Sha256, Sha384, Sha512, HmacSha1, HmacSha224, HmacSha256, HmacSha384, HmacSha512 } from 'nativescript-sha';

export class HomeViewModel extends Observable {
	constructor() {
		super();
		this.set("hintInput", "Enter text to hash");
		this.set("textInput", "");
		this.set("hintKey", "Enter key for HMAC");
		this.set("textKey", "");
		this.on(Observable.propertyChangeEvent, (propertyChangeData: PropertyChangeData) => {
			if(propertyChangeData.propertyName === "textInput") {
				this.set("textInput", propertyChangeData.value);
			}
			if (propertyChangeData.propertyName === "textKey") {
				this.set("textKey", propertyChangeData.value);
			}
		});
	}

	public process() {
		console.log(`Data is ${this.get("textInput")}`);
		console.log(`Key is ${this.get("textKey")}`);

		this.set("hash1", Sha1(this.get("textInput")));
		console.log(`SHA-1 is ${this.get("hash1")}`);

		this.set("hash224", Sha224(this.get("textInput")));
		console.log(`SHA-224 is ${this.get("hash224")}`);

		this.set("hash256", Sha256(this.get("textInput")));
		console.log(`SHA-256 is ${this.get("hash256")}`);

		this.set("hash384", Sha384(this.get("textInput")));
		console.log(`SHA-384 is ${this.get("hash384")}`);

		this.set("hash512", Sha512(this.get("textInput")));
		console.log(`SHA-512 is ${this.get("hash512")}`);

		this.set("hmac1", HmacSha1(this.get("textKey"), this.get("textInput")));
		console.log(`HMAC SHA-1 is ${this.get("hmac1")}`);

		this.set("hmac224", HmacSha224(this.get("textKey"), this.get("textInput")));
		console.log(`HMAC SHA-224 is ${this.get("hmac224")}`);

		this.set("hmac256", HmacSha256(this.get("textKey"), this.get("textInput")));
		console.log(`HMAC SHA-256 is ${this.get("hmac256")}`);

		this.set("hmac384", HmacSha384(this.get("textKey"), this.get("textInput")));
		console.log(`HMAC SHA-384 is ${this.get("hmac384")}`);

		this.set("hmac512", HmacSha512(this.get("textKey"), this.get("textInput")));
		console.log(`HMAC SHA-512 is ${this.get("hmac512")}`);
	}
}
