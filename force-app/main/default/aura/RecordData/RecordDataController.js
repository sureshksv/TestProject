({
	recordUpdate : function(component, event, helper) {
        var evtParams = event.getParams();
        alert("record changed = "+evtParams.changeType);                          //changetype is to copy from code
        if(evtParams.changeType === "CHANGED") {                                   //changed is also to copy
            // get the fields that are changed for this record                   // this is in code copy it 
            var changedFields = evtParams.changedFields;                            //changed fields also copy
            alert('Fields that are changed: ' + JSON.stringify(changedFields));     //it is of object type we have to write JSON
        }
    },
     handleAttrUpdate : function(component, event, helper) {
        
         alert("old value: " + event.getParam("oldValue"));
        alert("current value: " + JSON.stringify(event.getParam("value")));
        }
        
		
	
})