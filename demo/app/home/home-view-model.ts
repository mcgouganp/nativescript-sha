import { Observable, PropertyChangeData } from "tns-core-modules/data/observable";
import { Sha1, Sha224, Sha256, Sha384, Sha512 } from 'nativescript-sha';

export class HomeViewModel extends Observable {
	constructor() {
		super();
		this.set("hint", "Enter text to hash");
		this.set("text", "");
		this.on(Observable.propertyChangeEvent, (propertyChangeData: PropertyChangeData) => {
			if(propertyChangeData.propertyName === "text") {
				this.set("text", propertyChangeData.value);
			}
		});
	}

	public doHash() {
		console.log(`Data is ${this.get("text")}`);

		this.set("hash1", Sha1(this.get("text")));
		console.log(`SHA-1 is ${this.get("hash1")}`);

		this.set("hash224", Sha224(this.get("text")));
		console.log(`SHA-224 is ${this.get("hash224")}`);

		this.set("hash256", Sha256(this.get("text")));
		console.log(`SHA-256 is ${this.get("hash256")}`);

		this.set("hash384", Sha384(this.get("text")));
		console.log(`SHA-384 is ${this.get("hash384")}`);

		this.set("hash512", Sha512(this.get("text")));
		console.log(`SHA-512 is ${this.get("hash512")}`);
	}
}
