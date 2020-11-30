import { LightningElement,wire } from 'lwc';
import getActs from '@salesforce/apex/WiredActsController.getActs'

export default class TestingGit1 extends LightningElement {
    name='SriLakshmi';
    result;
    error;
    

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