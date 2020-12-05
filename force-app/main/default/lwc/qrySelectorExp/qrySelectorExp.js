import { LightningElement } from 'lwc';

export default class QrySelectorExp extends LightningElement {


    handleClick(evt) {
        this.printQrySelectorAll();
        this.printQrySelectorWithDataId();
        this.printQrySelectorWithClass();

    }
    handleChange(evt) {
        if (evt.target.dataset.id === 'fNameId') {
            console.log(`fName: input name is ${evt.target.name} and value is ${evt.target.value}`);
        }
        else if (evt.target.dataset.id === 'addressId') {
            console.log(`Address: input name is ${evt.target.name} and value is ${evt.target.value}`);
        }
        else if (evt.target.dataset.something === 'lNameId') {
            console.log(`lName: input name is ${evt.target.name} and value is ${evt.target.value}`);
        }
        else if (evt.target.dataset.field === 'phoneId') {
            console.log(`Phone: input name is ${evt.target.name} and value is ${evt.target.value}`);
        }

    }
    printQrySelectorAll() {
        const inputs = this.template.querySelectorAll("lightning-input");
        console.log("**** Using querySelectorAll **********");
        for (const inp of inputs) {

            console.log(`input name is ${inp.name} and value is ${inp.value}`)

        }
    }
    printQrySelectorWithDataId() {
        console.log("**** Using data-* **********");
        const fNameInp = this.template.querySelector("lightning-input[data-id=fNameId]");
        const addressInp = this.template.querySelector("lightning-input[data-id=addressId]");
        const lNameInp = this.template.querySelector("lightning-input[data-something=lNameId]");
        const phoneInp = this.template.querySelector("lightning-input[data-field=phoneId]");


        console.log(`input name is ${fNameInp.name} and value is ${fNameInp.value}`);
        console.log(`input name is ${addressInp.name} and value is ${addressInp.value}`);
        console.log(`input name is ${lNameInp.name} and value is ${lNameInp.value}`);
        console.log(`input name is ${phoneInp.name} and value is ${phoneInp.value}`);

       // const fNameInp1 = this.template.querySelector("lightning-input[name=fName]");
       // console.log(`With fname input name is ${fNameInp1.name} and value is ${fNameInp1.value}`);
    }
    printQrySelectorWithClass() {
        console.log("**** Using css class * **********");
        const fNameInp = this.template.querySelector(".fNameClass");
        const addressInp = this.template.querySelector(".lNameClass");
        const lNameInp = this.template.querySelector(".phoneClass");
        const phoneInp = this.template.querySelector(".addressClass");


        console.log(`input name is ${fNameInp.name} and value is ${fNameInp.value}`);
        console.log(`input name is ${addressInp.name} and value is ${addressInp.value}`);
        console.log(`input name is ${lNameInp.name} and value is ${lNameInp.value}`);
        console.log(`input name is ${phoneInp.name} and value is ${phoneInp.value}`);

    }



}