import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';


export default class NavigateToRecordPages extends NavigationMixin(LightningElement) {
    navigateToContactEdit()
    {
        this[NavigationMixin.Navigate]
        ({
            type:'standard__recordPage',
            attributes:{
                recordId:'0031100001jH0WgAAK',
                objectApiName:'Contact',
                actionName:'edit'
            }
        });
        
    }
    navigateToCustomRecordPage(){
        this[NavigationMixin.Navigate]
        ({
            type:'standard__recordPage',
            attributes:{
                recordId:'0031100001jH0WgAAK',
                objectApiName:'Contact',              //give custom object and id also, this is not working
                actionName:'edit'
            }
        });
    }

    navigateToRelatedlList(){
        this[NavigationMixin.Navigate]
        ({                                               //RelationShip objects navigation
            type:'standard__recordRelationshipPage',
            attributes:{
                recordId:'0011100001zPZleAAG',
                objectApiName:'Account',              
                relationshipApiName:'Contacts',
                actionName:'view'
            }
        });
    }

    navigateToWebPage(){
        this[NavigationMixin.Navigate]
        ({                                               //RelationShip objects navigation
            type:'standard__webPage',
            attributes:{
                url:"https://www.salesforce.com/" 
            }
        });
    }
}