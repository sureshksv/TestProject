({
	retrieveSingleAcc : function(component, event, helper) {
        
        var recordId = component.get('v.recordId');           //recordid from attribute or hasrecordid of comp
        if(recordId)
       helper.retrieveSingleAcc(component, event, helper);
        
    },
    editRecord : function(component, event, helper) {
        alert("hi i am in edit");
    var recordId = component.get("v.recordId");
     var editRecordEvent = $A.get("e.force:editRecord");
        editRecordEvent.setParams({
            "recordId" : recordId                 //recordId firstone in comp of force:hasrecordid and second one is 
                                                   //var of recordid above.
        });
        editRecordEvent.fire();                     //this is built in or sysytem provider event edit event so have to fire the events.
    }
})