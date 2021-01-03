({
    getOppPicklist: function(component, event, helper) {
	
        console.log("helper");
      var steps = [];     
      var apexCntrMethod = component.get("c.getOppPickListValues");            //apex method
       var stepsNew= component.get("v.stepsNew");                             //calling attribute
      apexCntrMethod.setCallback(this, function(resp) 
      {
      var state = resp.getState();
      if (state === "SUCCESS") {
        var stpsVals = resp.getReturnValue();
          console.log("StepValues from Apex="+JSON.stringify(stpsVals));       //it return in object format so have to write stringify 
          stpsVals.forEach(function(stp)                                      //it is like FOR** loop with the return value
          {                   	                                            //stp is return value for stpsVals
          var obj = new Object();                                             //like creating NEW** object
			obj.lbl = stp;
			obj.stage = stp;
              steps.push(obj);                                          //push into the blank array of steps above like add()
          })
          console.log("StepValues JS="+JSON.stringify(steps));
           component.set("v.stepsNew", steps);                               //setting the steps to attribut stepsNew
      }	
          });
        
      
      $A.enqueueAction(apexCntrMethod)  ;
      }
		

   
                                  
})