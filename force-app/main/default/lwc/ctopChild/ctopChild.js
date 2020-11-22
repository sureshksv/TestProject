import { LightningElement } from 'lwc';

export default class CtopChild extends LightningElement {
   // inputValue;
    
   /*   handleStringChange(event)
    {
        this.inputValue=event.target.value;
    }*/

    handleClickEvent()
    {
        var inp=this.template.querySelector("lightning-input");            //using queryselector is always good way for querying
        //this.inputValue=inp.value;
        let per ={Name: inp.value, Age: 30}                               //passing to name in object    
        const eventSelect=new CustomEvent("passingnameevent",{           //creating event and 1.name of event 2.data given to detail
            detail:per
        });
        
        this.dispatchEvent(eventSelect);
    }

   
}