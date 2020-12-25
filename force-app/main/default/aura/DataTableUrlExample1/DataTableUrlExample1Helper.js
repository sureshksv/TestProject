({
	
    getRecord: function(component, event, helper) {
    this.showSpinner(component, event, helper);                   //this.methodname ,this is used to call another method to here
      
    var actName = component.find("inputActName").get("v.value");
    //alert('Entered Value='+actName);
    var apexCntrMethod = component.get("c.fetchRecord");
    apexCntrMethod.setParams({ actname: actName });
    apexCntrMethod.setCallback(this, function(resp) {
      var state = resp.getState();
      if (state === "SUCCESS") {
        var acts = resp.getReturnValue();
          acts.forEach(function(act){                    //it is one wayto write for loop in js, act is return value
                   	 act.linkName = '/'+act.Id;           //linkname is in datatable in js of set columns of url
                                                          // '/' will come in url after this / acctid will come there
                });
        //alert(act);
        component.set("v.accts", acts);
        // setTimeout(() => { console.log("World!"); }, 20000);
        this.hideSpinner(component, event, helper);
      }
    });

    $A.enqueueAction(apexCntrMethod);
  },
   
    showSpinner: function(component, event, helper) {
    var spinner = component.find("mySpinner");              //intialize in cmp the spinner and in class make it hide
    $A.util.removeClass(spinner, "slds-hide");
  },
    
     hideSpinner: function(component, event, helper) {
    var spinner = component.find("mySpinner");
    $A.util.addClass(spinner, "slds-hide");
  },
    
    getRowActions: function(component,row,callback){            //NOTE:**here** we have diff function inside very Imp 
        var actions=[
            {label:'Show Details', name: 'show_details'},      //this 2 are written in array because they are shown plain
            {label:'Edit Details', name:'edit'}
        ];
        var deleteAction={label:'Delete', name:'delete'}        // **this is written outside because it has condtion the it is enabled when phone is available other delete is unavailable
       actions.push(deleteAction)
       if(!row.Phone)                                           //if phone is there means true then push to actions array
       {
           deleteAction.disabled='true';                     //if phone is not there then delete function disable
       }
        callback(actions);                                   //callback here**********
        }
    
    
   
})