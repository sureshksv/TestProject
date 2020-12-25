({
    doInit : function(component, event, helper) {

        var actId = component.get("v.recordId");
        //console.log('accountid= '+ actId);
        var apexMethod = component.get("c.getAllContacts");
        apexMethod.setParams({actIds:actId});
        apexMethod.setCallback(this,function(response)
        {
         var status =  response.getState();
         if (status === 'SUCCESS') {

            component.set("v.contacts",response.getReturnValue());
             
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