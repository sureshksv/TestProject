import { LightningElement,wire } from 'lwc';
import getActs from '@salesforce/apex/WiredActsController.getActs';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class SpinnerAndToast extends LightningElement {
    result;
    error;
    isLoaded=false;
    @wire(getActs) handleApex({data,error})
    {
        if(data)
        {
            this.result=data;
            this.isLoaded=true;
            const evt = new ShowToastEvent({
                title:"Success Loaded" ,
                message:"Your Account Details is successful",
                variant:"success",
                mode:"pester"
            });
            this.dispatchEvent(evt);
            console.log("Toast raised");
            
        }
        if(error)
        {
            this.error=error;

            const err = new ShowToastEvent({
                title:"ERROR in Loading" ,
                message:"Your Account Details got error",
                variant:"error",
                mode:"sticky"
            });
            this.dispatchEvent(err);
            console.log("Toast error");
        }
    }
}