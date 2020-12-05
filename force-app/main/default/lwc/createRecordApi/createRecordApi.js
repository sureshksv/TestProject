import { LightningElement } from 'lwc';
import {createRecord} from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';


export default class CreateRecordApi extends LightningElement {
    name='';
    acctId;
    handlerNameChange(event)
    {
        //this.acctId=undefined;
        this.name=event.target.value;
    }

    createAccount()
    {
        
        //console.log("NameField"+JSON.stringify(NAME_FIELD));
        //console.log("ACCOUNT_OBJECT"+JSON.stringify(ACCOUNT_OBJECT));
        const fields={};
        fields[NAME_FIELD.fieldApiName]=this.name;                                   //the fields which are required are imported
        const recordInput ={apiName:ACCOUNT_OBJECT.objectApiName, fields};                   //recordInput is compulsary*****
        createRecord(recordInput)
        .then(account=>                                                            //createrecord is given by Sf which takes recordInput
            {
                this.acctId = account.id;
                console.log(`Account Id: ${account.id}`);
                console.log(JSON.stringify(account));
                this.dispatchEvent(
                  new ShowToastEvent({
                      title:'Success',
                      message:'Account created',
                      variant:'success',
                  }),
                );
            })
            .catch(error=>
                {
                    console.error(error);
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title:'Error Creating Record',
                            message:error.body.message,
                            variant:'error',
                        }),
                      );
                });
    }   
}