import { LightningElement,api } from 'lwc';
import Type from '@salesforce/schema/Account.Type';
import Industry from '@salesforce/schema/Account.Industry';       //this is for record form and not for recordview/edit form
import Phone from '@salesforce/schema/Account.Phone';


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