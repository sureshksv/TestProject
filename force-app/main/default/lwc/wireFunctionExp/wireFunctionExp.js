import { LightningElement,wire } from 'lwc';
import getActs from '@salesforce/apex/WiredActsController.getActs'
import getCnts from '@salesforce/apex/WiredActsController.getCnts'

export default class WireFunctionExp extends LightningElement {
    result;
    error;
    contacts;
    contactError;

    //function call wire
    @wire(getActs) 
    handleApexData({data,error})
    {
        if(data)
        {
           
            this.result=data;
           
        }
        else
        {
            this.error=error;
        }
    }
    

    //wire Imperative way ,we will not use wire in imperative way
    handleLoad(){
        getCnts()                 //this is alias of apex method calling
        .then(resultcnts=>              //this is function with arrow with promises called (.then and .catch)
            {
            this.contacts = resultcnts;
             })
        .catch(error=>
            {
            //console.error(error)
            this.contactError = error;
            })
    }

   /* //wire Imperative way ,with passing parameters example.
    handleLoad(){
        getCnts({firstNumber:this.fName,lastNumber:this.lName})           //this is alias of apex method calling
        .then(resultcnts=>           //example if sending parameters to apex method   
            {
            this.contacts = resultcnts;
             })
        .catch(error=>
            {
            //console.error(error)
            this.contactError = error;
            })
    }
*/


}