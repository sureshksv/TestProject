({
	calculateWithParameters : function(component, event, helper) {
		//alert("u r in");
        var first = component.find("fnum").get("v.value");
        var second = component.find("snum").get("v.value");
        alert("u r in:" +first+"::"+second);
        
        component.find("result").set("v.value",first+second);
	},
    
    	calculateWithAttributes : function(component, event, helper) {
		//alert("u r in");
        var first = component.get("v.fnumAtt");
        var second = component.get("v.snumAtt");
            component.set("v.resultAtt",first+second);
        alert("u r in:" +first+"::"+second);
        //component.find("result").set("v.value",first+second);
	},
    
    calculateWithApexContrl : function(component, event, helper) {
		alert("u r in");
        var first = component.get("v.fnumAtt");
        var second = component.get("v.snumAtt");
        alert("u r in 1"+first+",");
        
        if($A.util.isEmpty(first)){
        //component.set("v.hasError", true);
        alert("enter value");
            return false;
  }
        
        var action = component.get("c.addNumbers");
        action.setParams({"firstN":first,"secondN":second});
        alert("u r in 2");
        action.setCallback(this,function(response)
        {
            var state = response.getState();
            alert("u r in3"+state);
        if(state === "SUCCESS")
        {
             alert("u r in  4");
           component.set("v.resultAtt",response.getReturnValue());  
        }
                           
        });
        $A.enqueueAction(action);
       
       
	}

})