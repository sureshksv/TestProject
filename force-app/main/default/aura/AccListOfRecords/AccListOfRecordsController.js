({
    fetchAllAccounts : function(component, event, helper) {
        var apexAction = component.get("c.getListAccounts");     //apex method call
        
        apexAction.setCallback(this,function(resp){
            var state = resp.getState();
            
            if(state === "SUCCESS"){
                var result = resp.getReturnValue();
                
                component.set("v.accts", result);
            }
            else
                alert(state);
            
        });
        
        $A.enqueueAction(apexAction);
    },
    
    handleChange : function(component, event, helper){
       // alert('hi in changedvalue');
        var changedvalue = event.getParam("value");
        //alert('hi in changedvalue 1');
        //console.log('you have selected ' + changedvalue);
        component.set("v.selectedDisplayOption",changedvalue);
        
    }
})

//button pressed is taken as event in handlechange