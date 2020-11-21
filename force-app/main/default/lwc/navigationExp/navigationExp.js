import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils';
export default class NavigationExp extends NavigationMixin(LightningElement) {

    navigateToChatter()
    {
        this[NavigationMixin.Navigate]
        ({
            type:'standard__namedPage',
            attributes:{
                pageName:'chatter'
            }
        })
    }

    navigateToFilesHome(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'ContentDocument',
                actionName:'home'
            }
        })  
    }
    navigateContactNew(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'new'
            }
        })  
    }
    navigateToContactWithDefaults(){
        const  defaultValues=encodeDefaultFieldValues({
            FirstName :'Lakshmi',
            LastName:'Kunireddi',   
            LeadSource:'other'
        })
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'new'
            },
            state:{
                defaultFieldValues:defaultValues      //directly passing this name wont go into object we have to write import
            }
        })    
    }
    navigateToList(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'list'
            },
            state:{
                filterName:'Recent'
            }
        })   
    }

    navigateToTab(){
        this[NavigationMixin.Navigate]({
            type:'standard__navItemPage',
            attributes:{
                apiName:'LWC Test'                   //giving error
           
            }
        })

    }
}