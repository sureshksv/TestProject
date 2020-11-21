import { api, LightningElement } from 'lwc';

export default class PtocChild extends LightningElement {
 //getting string from parent
    @api cName;
    @api cPersons;
    @api addNums(i1, i2)
    {
        return parseInt(i1)+parseInt(i2);
    }
}















