import { LightningElement, wire } from 'lwc';
import { updateRecord } from 'lightning/uiRecordApi';
import getSingleContact from '@salesforce/apex/ContactController.getSingleContact';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import ID_FIELD from '@salesforce/schema/Contact.Id';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex'


export default class UpdateRecordApi extends LightningElement {
    error;
   
    //property wire
    @wire(getSingleContact)
    contact;                                          //it will return data and error


   
    updateContact(event) {
        console.log('entered update button');
        const fields = {};

        fields[ID_FIELD.fieldApiName] = this.contact.data.Id;                   

        const fstNameInp = this.template.querySelector("[data-field=FirstName]");
        fields[FIRSTNAME_FIELD.fieldApiName] = fstNameInp.value;        //**data-field is used as aura:id in input tag ,not only field we can write anything after data.
        
        const lastNameInp = this.template.querySelector("[data-field=LastName]");
        fields[LASTNAME_FIELD.fieldApiName] = lastNameInp.value;          //** data-id,data-name also can be written , see for example qrySelectorExp

        const recordInput = { fields };                    //recordInput is used to send as a parameter to updaterecord.
        updateRecord(recordInput)
            .then(result => {
                
                console.log(JSON.stringify(result));
                this.dispatchEvent(
                    new ShowToastEvent
                        ({
                            title: 'Success',
                            message: 'Contact Updated',
                            variant: 'success'
                        })
                );
                return refreshApex(this.contact);
                
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error Creating Record',
                        message: error.body.message,
                        variant: 'error'
                    })
                );

            })
    }
}