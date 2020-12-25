({
    doInit : function(component, event, helper) {
		
        helper.doInit(component, event, helper);
    },
   
    newRecord : function(component, event, helper) {
      //  alert("You are in new button");
       var newRecEvt =  $A.get("e.force:createRecord");           //it is for general event so have to write specific by givibg details.
       var recId = component.get("v.recordId");
       newRecEvt.setParams({
        "entityApiName": "Contact",
        "defaultFieldValues": {
            'Phone' : '415-240-6590',
            'AccountId' : recId                        //contact id linked with accountid
        }
    });
    console.log('Record Id in new contact'+recId);
    //debugger;
    newRecEvt.fire();
    },

    editRecord : function(component, event, helper) {
        
        //viewform hide
    var viewForm = component.find("ViewForm");
    $A.util.addClass(viewForm,"Hide");               //built in global class to addclass

        //edit form show
        var editForm = component.find("EditForm");       // remove or add means if the form is in hide mode then it will show and viceversa
    $A.util.removeClass(editForm,"Hide");                // built in global class to remove class

    //change the edit button label and name to save
    var btnEdit = component.find("btnEdit");
    btnEdit.set("v.label" ,"Save");     

   
},

saveRecord : function(component, event, helper) {
   var editForms = component.find("editForm");
   for (var index = 0; index < editForms.length; index++) {      
    editForms[index].submit();                  //for save by default we have to give submit method it will save.Or we can write in button type submit()
   }

   
},

editSaveRecord : function(component, event, helper) {
        //get the btn label
    var btnEdit = component.find("btnEdit");
    var label = btnEdit.get("v.label");

    //debugger;
       // if btnlabel is Edit then do edit functionality
       if(label =='Edit')
       {
           var actionEdit = component.get("c.editRecord");   // calling jsmethod editrecord here.another way through aura:method
        $A.enqueueAction(actionEdit);                 
       }
       else 
       {
        var editForms = component.find("editForm");
        for (var index = 0; index < editForms.length; index++) {      
         editForms[index].submit();                          // saving method wrote here 
        }


       
       }

       
    }


   
    
})