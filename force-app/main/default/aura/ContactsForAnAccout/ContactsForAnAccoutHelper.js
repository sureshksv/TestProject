({
	getContactsForAccount : function(component, event, helper) {
        
        //get recordid
        //var acctId = component.get("v.recordId");
        //get apexmethod to call
        
        var apexMethod = component.get("{!c.getAllContacts}");
        
        //set params in apex method
        //apexMethod.setParams({"actId":acctId});
		    
        //handle apex methos retuen using callback
        apexMethod.setCallback(this,function(response)
                               {
                                   var status =response.getState();
                                   if(status === 'SUCCESS')
                                   {
                                      var returnContacts = response.getReturnValue();
                                        //set component attribute value from the result
                                     component.set("v.contacts",returnContacts) ; 
                                   }
                                   else
                                   {
                                    alert("Error")   
                                   }
                               });
       
        //enque action
        $A.enqueueAction(apexMethod);
		
	}
})