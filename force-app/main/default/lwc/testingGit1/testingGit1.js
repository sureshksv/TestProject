import { LightningElement,wire,track } from 'lwc';
import getActs from '@salesforce/apex/WiredActsController.getActs'
import { refreshApex } from '@salesforce/apex';

export default class TestingGit1 extends LightningElement {
    name='SriLakshmi';
    result;
    error;

    handleClick(event)
    {
        console.log("hi i am refresh");
        refreshApex(this.result);
        
    }
    

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
}