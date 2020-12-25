({
	
    handleSuccess : function(component, event, helper) {
       alert("u r in Success");
      var editfrm =  component.find("editForm");
     var viewfrm =  component.find("viewForm");
    //view form class class="slds-p-bottom_large slds-p-left_large"
  	 $A.util.toggleClass(viewfrm, 'slds-hide');                      
    //view form class="slds-p-bottom_large slds-p-left_large slds-hide"
    //
    //edit form class class="slds-p-bottom_large slds-p-left_large slds-hide"
      $A.util.toggleClass(editfrm, 'slds-hide'); 
    //edit form class class="slds-p-bottom_large slds-p-left_large"
		
	},
    
    handleEdit : function(component, event, helper) {
       
      var editfrm =  component.find("editForm");
     var viewfrm =  component.find("viewForm");
    //view form class class="slds-p-bottom_large slds-p-left_large"
  	 $A.util.toggleClass(viewfrm, 'slds-hide'); 
    //view form class="slds-p-bottom_large slds-p-left_large slds-hide"
    //
    //edit form class class="slds-p-bottom_large slds-p-left_large slds-hide"
      $A.util.toggleClass(editfrm, 'slds-hide'); 
    //edit form class class="slds-p-bottom_large slds-p-left_large"
     
		
	}, 
    handleError : function(component, event, helper) {
        alert("u r in error");
    }
    , 
    handleSubmit : function(component, event, helper) {
        alert("u r in Submit");
    }
    , 
    handleLoad : function(component, event, helper) {
        alert("u r in Load");
    }
    
})