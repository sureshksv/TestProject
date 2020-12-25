({
    retrieveSingleAcc : function(component, event, helper) {
        
        
        
        var rId = component.get("v.recordId");               //to get recordid from attri of compo and put in varalble
        if(rId != null)
        {
            var apexCntrMethod = component.get("c.getSingleAcc"); // to get returned records from apexmethod and store in var
            apexCntrMethod. setParams({accId :rId });           //sending rid var to apex method parameters .
            //console.log("u r in 1 new")
            apexCntrMethod.setCallback(this,function(resp){   //getting callback of resp var from apex controller
               // console.log("u r in 2 new")
                
                var state = resp.getState();                  // after getting we have to check state of function
                if (state === "SUCCESS"){
                    //console.log("u r in 3 new")
                    
                    //get the Acoount object and set it in components attribute
                    var  act =   resp.getReturnValue();      //return value of resp 
                    component.set("v.acc",act);           // setting has 2 paramters where to give and what to give i.e put return value of act in acc attr
                    
                }
                else
                {
                    alert("Error new"+state)  
                }
                
                
            });
            $A.enqueueAction(apexCntrMethod);
        }
        
        
        
        
        
    }
})