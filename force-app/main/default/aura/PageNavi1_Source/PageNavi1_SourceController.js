({
	init : function(component, event, helper) {
        var pageReference = {
            type: 'standard__component',                                  //each are 3 differernt ones which is called by the name 
            attributes: {
                componentName: 'c__PageNavi1_Urlparams',                  //custom component name navigating to
            },
            state: {
                "c__name1":	"Suresh",	
                "c__address1":	"779 coralbell"
               
            }
        };
        component.set("v.page", pageReference);                      //setting this data to page attribute
    },
    initList : function(component, event, helper) {
        var pageReference = {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: "Contact",                    //navigating it to standard object of contact
                actionName: "list"
            },
            state: {
                filterName: "Recent"
            }
        };
        component.set("v.page", pageReference);              // setting this data to page attribute
       
       
    },

    initNew : function(component, event, helper) {
        var pageReference = {    
            "type": "standard__namedPage",
            "attributes": {
                "pageName": "home"                                  //navigating to home page
            }
        };
        component.set("v.page", pageReference);                     // setting this data into page Attribute
       
       
    },

    handleClick: function(component, event, helper) {
        var navService = component.find("navService");                 
        var pageRef = component.get("v.page");                        //getting the attribute here of which init is called there 
        event.preventDefault();                                       //this line have to write
        navService.navigate(pageRef);                               //sending the page attribut to navigate.
    }
})