import { LightningElement } from 'lwc';

export default class IfConditionalExp extends LightningElement {
    show=false;
    btnLbl="Show Data";
    handleClick(event)
    {
      console.log(event.target.label);
      console.log(event.target.variant);
        this.show=!this.show;   //this is toggle function
      //btn label == show
      if(this.btnLbl === "Show Data") 
      {    
       // this.show=true;      
        this.btnLbl="Hide"; 
      }
      else{
        //btnlabel to  hide
        //this.show=false;      
        this.btnLbl="Show Data";
      }
    }
    persons=[
        {name:"lakshmi",
         ssn:"12444435",
         phone:"23454554"
        },
        {name:"Pujitha",
         ssn:"373647",
         phone:"3362526668"
        },
        {name:"Suresh",
        ssn:"546465",
        phone:"5758674333"
       },
       {name:"Dharani",
         ssn:"968575",
         phone:"9574757777"
        }
    ]
   
}