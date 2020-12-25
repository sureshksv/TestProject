({
	handleClick : function(component, event, helper) {
        
         
        
        //call apextcontroller method with parameters
        
       var searchTxt = component.find("seachFieldId").get("v.value");
        var apexaction =component.get("c.getAccounts");        
        apexaction.setParams({"srch":searchTxt});
        console.log("i am in search ")
        
        //use setcallback ...response from apex controller
        apexaction.setCallback(this, function(response){
            var state = response.getState();
             console.log("i am in search2 ")
            if(state === "SUCCESS"){
                 //set response returnvalue to component attribute
                var lActs = response.getReturnValue();
                component.set("v.actList", lActs);
            }else{
                console.log("Failed with state: " + state);
            }
        });  
        //enqueaction
        $A.enqueueAction(apexaction);
        
       
		
	}
})