({
	fetchAccountInfo : function(component, event, helper) {
       
       alert('u r in js');
       helper.fetchAccountInfo(component, event, helper);
    },
        
        editRecord : function(component, event, helper) {
            
        var recordId = component.get("v.recordId");
        var editRecordEvent = $A.get("e.force:editRecord");
        editRecordEvent.setParams({
         "recordId": recordId
           });
             editRecordEvent.fire();
       	}
})

  //, should be there for every method here in js
   //helper and js methods names can be same .
        // the name of js method name and apex controller should not be same
        //it is better to put bussiness logic in helper method and call in js because the code within the helper,
        // methods is shared with mulitiple components in that our code is architechetually more efficient 
		// for all methods function(component, event, helper) is same. 
		//  capture the recordid from component from attribute or force.hasRecordId  and going to use lightening
		//   readymade  events which would open a record in  edit mode i.e $A.get(e.___) where 'e' is event. which we implement
        //   Setparams is setting parameters to this eventas json object means({ __ }) .it accepts recordid 
        //   and assing it to recordid and fire my recordevent with fire() .
//