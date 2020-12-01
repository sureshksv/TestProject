import { LightningElement } from 'lwc';

export default class MultipleInputsExp extends LightningElement {
   inp1;
   inp2;
   inp3;
   inpage;
   inpphone;
   inpname;
   inpBName;
   inpBPhone;
   inpBAge;
   nameCls;
   ageCls1;
   phoneCls;

   //diff changeHandlers
    handleChange(evt)
    {
        this.inp1=evt.target.value;
    }
    handleChange2(evt)
    {
        this.inp2=evt.target.value;
    }
    handleChange3(evt)
    {
        this.inp3=evt.target.value;
    }
    

    //same changehandlers,if we take name or label
    handleChangeSame(evt)
    {
      var name=evt.target.name; 
      if(name==="name")
      {
          this.inpname=evt.target.value;
      }
      else if(name==="age")
      {
          this.inpage=evt.target.value;
      }
      else if(name==="phone")
      {
          this.inpphone=evt.target.value;
      }
     
    }

    //Button click getting input
    btnHandler(evt)
    {
        var inpList=this.template.querySelectorAll("lightning-input");
        for(var inp of inpList)
        {
          if(inp.name==='name')
          {
              this.inpBName=inp.value;
              
          }
          else if(inp.name==='age')
          {
              this.inpBAge=inp.value;
          }
          else if(inp.name==='phone')
          {
              this.inpBPhone=inp.value;
          }
        }
    }
    btnHandlerClass(evt)
    {
        var inpName=this.template.querySelector(".cls1");
        this.nameCls=inpName.value;

        var inpAge=this.template.querySelector(".cls2");
        this.ageCls1=inpAge.value;

        var inpPhone=this.template.querySelector(".cls3");
        this.phoneCls=inpPhone.value;


       
    }
}