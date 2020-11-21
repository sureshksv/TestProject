import { LightningElement,wire } from 'lwc';
import getActs from '@salesforce/apex/WiredActsController.getActs'
import getActsByName from '@salesforce/apex/WiredActsController.getActsByName'
 
export default class WirePropertyExp extends LightningElement {
  
  srchToken ;
  
  //property
 // @wire(getActs) wiredActs ;

 //property with parameter
 // @wire(getActsByName,{nameToken:'di'}) wiredActs;

  //property with parameter by user input
  @wire(getActsByName,{nameToken:'$srchToken'}) wiredActs;

  handleClick(event)
  {
    var inp=this.template.querySelector("lightning-input");
    this.srchToken=inp.value;
    console.log(inp.value);
  }
get getCount()
{
  return this.wiredActs.data.length;
}

} 