import { LightningElement } from 'lwc';

export default class PtocParent extends LightningElement {
    pName="Paturi Srilakshmi";
    sum;
    pPersons=[
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
    handleAdd(evt)
    {       
        var inp=this.template.querySelectorAll("lightning-input");
        let n1 =  inp[0].value;
        let n2 =  inp[1].value
       // console.log("Num1="+n1+"::Num2="+n2);
        this.sum = this.template.querySelector('c-ptoc-child').addNums(n1,n2);
       // console.log(this.sum);
    }
}