({
	editModal : function(component, event, helper) {	
        
        var cbFn =function(contents, status) {                                              //other all copy code ,only one function with content and status
               if (status === "SUCCESS") {                                         //this is callback from here
                  var modalBody = contents[0];                                        // recordCrud..is custom cmp here it is array 0 and the other array1
                   var modalFooter = contents[1];
                   component.find('overlayLib').showCustomModal({
                       header: "Edit",
                       body: modalBody,
                       footer: modalFooter,
                       showCloseButton: true,
                        closeCallback: function() {                                  //closing the window and also write destroy
                           alert('You closed the alert!');
                            modalBody.destroy();                                    //when we are creating component then we have to destroy also
                            modalFooter.destroy();
                       }
                   })
               }
               /*
               else if (status === "FAILURE")
               {
                 alert('Failed');  
               }
               */
           }
       
        $A.createComponents([["c:RecordCRUDwithApex",{}],["c:TestingSimple",{}]],cbFn);         // this is the only line we write,this has two components with type and {}it is for arguments for that comp

    }
	
})