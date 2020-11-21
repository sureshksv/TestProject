import { LightningElement, wire } from 'lwc';
import getActsDataTable from '@salesforce/apex/WiredActsController.getActsDataTable'

export default class DataTableWithWire extends LightningElement {
    result;
    error;
    columns=[
      {label:'Label', fieldName:'Name', type:'text'},
      {label:'Phone', fieldName:'Phone', type:'phone'},
      {label:'Industry', fieldName:'Industry', type:'text'}]
      
      //if passing parameters in method wire (method alias ,{id : ----}) if have to send id we have to write like this
      //funtion wire way
      @wire (getActsDataTable) 
      accountRecords(data,error){
         if(data){
             this.result=data;
         }
         else{
             this.error=error;
         }
      }

}
