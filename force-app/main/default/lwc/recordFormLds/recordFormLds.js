import { LightningElement,api } from 'lwc';
import Type from '@salesforce/schema/Account.type';
import Industry from '@salesforce/schema/Account.industry';       //this is for record form and not for recordview/edit form
import Phone from '@salesforce/schema/Account.phone';


export default class RecordFormLds extends LightningElement {
    @api recordId;
    @api objectApiName; 
    //fields=[Type,Industry,Phone];                //this is in record-form fields

    handleError()
    {

    }
    handleLoad()
    {

    }
    handleSuccess()
    {

    }
  
}