({
	handleSubmit : function(component, event, helper) {
		alert("i am in java script");
	},
    
    getContactIds : function(component, event, helper) {
        var actId = component.get("v.recordId");
        //console.log('accountid= '+ actId);
        var apexMethod = component.get("c.getAllContactsLds");
        apexMethod.setParams({actIds:actId});
        apexMethod.setCallback(this,function(response)
        {
         var status =  response.getState();
         if (status === 'SUCCESS') {

            component.set("v.contactIds",response.getReturnValue());
             
         }
         else
         {
             alert("Error in returning");
         } 
        }
        );
        $A.enqueueAction(apexMethod);
    
    }
})