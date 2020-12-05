import { api, LightningElement,track } from 'lwc';

export default class DataBindingExp extends LightningElement {
    @api name="SRILAKSHMI";
    //@track title="Salesforce Developer"
    numObj={'id':'1','description':'one'};
    @track numObjTrack={'id':'1','description':'one'};

    @api titlemsg;              //also see in meta xml target configure.
    @api greeting="Default Greeting";            //these 2 are used for confiqure design properties means it can change dynamically the title and greeting
   
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
        else if((fldName === 'number'))
        {
           //this.numObj.description=event.target.value; //this does not work..
           this.numObj={...this.numObj,'description':event.target.value};
        }
        else if((fldName === 'numberWithTrack'))
        {
           this.numObjTrack.description=event.target.value; //this does work..
          // this.numObj={...this.numObj,'description':event.target.value};
        }
    }
}