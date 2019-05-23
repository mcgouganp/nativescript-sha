import { Observable, PropertyChangeData } from "tns-core-modules/data/observable";
import { Sha256 } from 'nativescript-sha';

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
        this.set("hash", Sha256(this.get("text")));
        console.log(`Data is ${this.get("text")}`);
        console.log(`Sha is ${this.get("hash")}`);
    }
}
