import { LightningElement } from 'lwc';
import getCnts from '@salesforce/apex/forValidationClass.getCnts'


export default class ValidationsLwc extends LightningElement {
    checkingData={};

    setHandlerData(event){
        var targetElement=event.target;
        this.checkingData =targetElement.value;
    }
    SaveContact(event)
    {

    }
}