({
	save : function(component, event, helper) {
       component.find("edit").get("e.recordSave").fire(); 
		
	},
    
    handleSaveSuccess : function(cmp, event, helper) {
        // Display the save status
        cmp.set("v.saveState", "SAVED");                      //turn the attribut to saved from default unsaved
        var toastEvent = $A.get("e.force:showToast");
    toastEvent.setParams({                                     //toast fire
        "mode" : "dismissable",
        "title": "Success!",
        "message": "The record has been updated successfully."
    });
    toastEvent.fire();
    }
})