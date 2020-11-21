import { LightningElement,track } from 'lwc';

export default class DataBindingExp extends LightningElement {
    name="SRILAKSHMI";
    //@track title="Salesforce Developer"
    title="";
    changeHandler(event){
        
        let fldName = event.target.name;
        if(fldName === 'title') 
        {
        this.title=event.target.value;
        }
        else if(fldName === 'search')
        {
            console.log(event.target.value);
            console.log(event.target.name);
            console.log(event.target.label);
            console.log(event.target.type);
            //apext call
        }
    }
}