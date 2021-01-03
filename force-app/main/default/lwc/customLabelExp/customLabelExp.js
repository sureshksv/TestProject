import { LightningElement } from 'lwc';
import btnLbl from '@salesforce/label/c.CustLblName';
import btnNwyLbl from '@salesforce/label/c.customLblNwyName';


export default class CustomLabelExp extends LightningElement {

    labels = {
        btnLbl,btnNwyLbl,
    };

    btLblVar=btnLbl;

}