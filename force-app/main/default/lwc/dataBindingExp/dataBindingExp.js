import { LightningElement,track } from 'lwc';

export default class DataBindingExp extends LightningElement {
    name="SRILAKSHMI";
    
    //@track title="Salesforce Developer"
    numOne={'id':'1','description':'one'};                //single object track variable
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

    changeHandlerSingleObj(evt)                                     //using spread operator here ****
    {
        let updatedNumVal = evt.target.value;
        //console.log('updatedNumVal='+updatedNumVal);
        this.callToAnotherMethod(updatedNumVal);                   //calling another method here
        //this.numOne.description = updatedNumVal;                  -- not working
        this.numOne = {...this.numOne,'description':updatedNumVal};     //to have data binding for single object
    }                                                                   // we do spread operator without using foreach in html
                                                                         
    callToAnotherMethod(num)                            //passBy value because we are sending primitive datatype
    {
        console.log('updatedNumVal='+num);
    }
}