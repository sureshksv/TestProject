import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import ACCOUNT_OBJECT from'@salesforce/schema/Account';

export default class GetListUi extends LightningElement {
   // accountList;
    //err;
   /* //function wire

    @wire(getListUi,{objectApiName : ACCOUNT_OBJECT , listViewApiName : 'NewThisWeek'})
    accountListFn({data,error})                                          
     {
        console.log(JSON.stringify(data));
        if(data)                                      //we dont write if statement then we are not getting data
        {
        this.accountList=data.records.records;
        this.err=error;
        }
        
         
     }*/
      
     //property wire
     @wire(getListUi,{objectApiName : ACCOUNT_OBJECT , listViewApiName : 'AllAccounts'})
     accountListpro
     
    
}