import { LightningElement,wire,api } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import OWNER_NAME_FIELD from '@salesforce/schema/Account.Owner.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

    
export default class GetRecordApi extends LightningElement {
   @api recordId;                      //record context variable so it is public property

    //property wire 
   @wire (getRecord,{recordId:'$recordId' , fields:[NAME_FIELD, INDUSTRY_FIELD], optionalFields:[PHONE_FIELD , OWNER_NAME_FIELD] }) 
   account;
    //return of account will be data and error

get name()
{
    return getFieldValue(this.account.data, NAME_FIELD);
    //getfieldvalue will take 2 parameters and we have to write in this form 
}
get industry()
{
    return getFieldValue(this.account.data, INDUSTRY_FIELD);
    //if there is no getfieldvalue then we have to write *return this.account.data.field.industry.value* in this form
}
get phone()
{
    return getFieldValue(this.account.data, PHONE_FIELD);
}
get owner()
{
    return getFieldValue(this.account.data, OWNER_NAME_FIELD);
}
}

//getrecord is method in apex class which is given by SF
//getFieldValue is a helper method to write in the above form instead of writing all dot notation**