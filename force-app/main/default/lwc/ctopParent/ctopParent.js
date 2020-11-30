import { LightningElement } from 'lwc';

export default class CtopParent extends LightningElement {
    showData;

    handleChildData(evt)
    {
       
        this.showData=evt.detail.Name;            //detail is data in event and in that name field 
    }
}