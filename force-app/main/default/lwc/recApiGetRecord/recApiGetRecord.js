import { LightningElement,wire } from 'lwc';
import { getRecord ,getFieldValue} from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
export default class RecApiGetRecord extends LightningElement {

    @wire(getRecord, { recordId: '0012E00001qCce5QAC', fields: [NAME_FIELD, INDUSTRY_FIELD] })
    wireAccountProp;

    get name()
    {
        return getFieldValue(this.wireAccountProp.data,NAME_FIELD);
    }
    get industry()
    {
        return getFieldValue(this.wireAccountProp.data,INDUSTRY_FIELD);
    }


}