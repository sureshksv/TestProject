({
    
    init : function(component, event, helper) {
        var pageReference = {
            type: 'standard__component',
            attributes: {
                componentName: 'c__PageNavi1_Urlparams',
            },
            state: {
                "c__name1":	"Suresh",	
                "c__address1":	"779 coralbell"
               
            }
        };
        component.set("v.page", pageReference);
    },
    initList : function(component, event, helper) {
        var pageReference = {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: "Contact",
                actionName: "list"
            },
            state: {
                filterName: "Recent"
            }
        };
        component.set("v.page", pageReference);
       
       
    },

    initNew : function(component, event, helper) {
        var pageReference = {    
            "type": "standard__namedPage",
            "attributes": {
                "pageName": "home"    
            }
        };
        component.set("v.page", pageReference);
       
       
    },

	handleClick : function(component, event, helper) {
		 var navService = component.find("navService");               //calling navigation cmp here
        var pageReference = component.get("v.pageReference");          //geting attribute here
        event.preventDefault();                                        //**this line we have to copy
        navService.navigate(pageReference);                           //**navigating to pagereference attirbute
	}
})