import { LightningElement } from 'lwc';
import {createRecord} from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';

export default class RecApiCreateRecord extends LightningElement {
    name;
    accountId;
    handleNameChange(event)
    {
        this.name=event.target.value;
    } 
    
    //imperative way
    createAccount(event)
    {
        const fields = {};                                     //fields variable    
        fields[NAME_FIELD.fieldApiName] = this.name;             //user input name and assigning it to name field(fieldApiname)
        const recordInput = { apiName: ACCOUNT_OBJECT.objectApiName, fields };     //pass parameters to an var of apiname of object and pass the array of fields var 

      createRecord(recordInput)                             //createrecord is give method by SF and pass parameter -recordinput is variable
       .then(account=>{                                      //accountid is variable and create rec returns account as result
                  this.accountId= account.id;
                  this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Account created',
                        variant: 'success',
                    }),
                );
            })
            .catch(error=>{
                console.error(`Process failed : ${error.body.message}`);
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
            });
            
            
    }
}