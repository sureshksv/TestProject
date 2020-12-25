({
    handleSave : function(component, event, helper) {
        component.find("recordLoader").saveRecord($A.getCallback(function(saveResult) {
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                console.log("Save completed successfully.");
                var editForm =   component.find("EditForm");
                $A.util.toggleClass(editForm, 'slds-hide');     //toggle
                var viewForm =   component.find("ViewForm");     
                $A.util.toggleClass(viewForm, 'slds-hide');

            } else if (saveResult.state === "INCOMPLETE") {
                console.log("User is offline, device doesn't support drafts.");
            } else if (saveResult.state === "ERROR") {
                console.log('Problem saving record, error: ' +
                           JSON.stringify(saveResult.error));
            } else {
                console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
            }
        }));
    },
    
    handleNewCreate: function(component, event, helper) {
       component.set("v.newContactRecordFields.AccountId", component.get("v.recordId")); 
        component.find("recordCreator").saveRecord($A.getCallback(function(saveResult) {
             if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                 var resultsToast =  $A.get("e.force:showToast");
                 resultsToast.setParams({
                        "title": "Success! ",
                        "message": "The new contact was created.",
                        "type":"success"
                    });
                 $A.get("e.force:closeQuickAction").fire();
                    resultsToast.fire();
                	 $A.get("e.force:refreshView").fire();
                 
                 }
                else if (saveResult.state === "INCOMPLETE") {
                    console.log("User is offline, device doesn't support drafts.");
                }
                else if (saveResult.state === "ERROR") {
                    console.log('Problem saving contact, error: ' +
                                 JSON.stringify(saveResult.error));
                }
                else {
                    console.log('Unknown problem, state: ' + saveResult.state +
                                ', error: ' + JSON.stringify(saveResult.error));
                }
            }));
        
                                                   
    },
    
 handleEdit: function(component, event, helper) {
      var editForm =   component.find("EditForm");
      $A.util.removeClass(editForm, 'slds-hide');     
      var viewForm =   component.find("ViewForm");     
     $A.util.addClass(viewForm, 'slds-hide');
       var newForm =   component.find("NewForm");     
       $A.util.addClass(newForm, 'slds-hide');
    },
   
    handleNew : function(component, event, helper) {
         console.log("u rin handle new");
        
   
        component.find("recordCreator").getNewRecord(
            "Contact",
            null,
            false,
            $A.getCallback(function(){
            var rec= component.get("v.newContactRecordLayout");
            var error = component.get("v.newRecordError");
            if(error || (rec === null)){
                    console.log("Error initializing record template: " + error);
            }
            else {
                console.log("record template intialized: "+rec.sObjectType);
                 var editForm =   component.find("EditForm");
                 $A.util.addClass(editForm, 'slds-hide');     
                 var viewForm =   component.find("ViewForm");     
                 $A.util.removeClass(viewForm, 'slds-hide');
                 var newForm =   component.find("NewForm");     
                 $A.util.removeClass(newForm, 'slds-hide');
        
        
            }
        }));



    },
    handleDelete : function(component, event, helper) {
        component.find("recordLoader").deleteRecord($A.getCallback(function(deleteResult) {
            if (deleteResult.state === "SUCCESS" || deleteResult.state === "DRAFT") {
                console.log("Record is deleted.");
                var resultsToast = $A.get("e.force:showToast");      //toast event
                resultsToast.setParams({
                    "title": "Deleted",
                    "message": "The record was deleted."
                });
                resultsToast.fire();
            }
            else if (deleteResult.state === "INCOMPLETE") {
                console.log("User is offline, device doesn't support drafts.");
            }
            else if (deleteResult.state === "ERROR") {
                console.log('Problem deleting record, error: ' +
                            JSON.stringify(deleteResult.error));
            }
            else {
                console.log('Unknown problem, state: ' + deleteResult.state +
                            ', error: ' + JSON.stringify(deleteResult.error));
            }
        }));


    },
    handleRecordUpdate : function(cmp,evt,helper)
    {
       // alert(evt.getParams().changeType);
        if(evt.getParams().changeType === "CHANGED")
        {
        alert('Record Updated');
        cmp.find('recordLoader').reloadRecord(false) ;      //**LDS Refreshview inEdit mode of RecordData***
        }
    }
})