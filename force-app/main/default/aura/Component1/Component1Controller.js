({
	handleClick : function(component, event, helper) {
       var enteredTxt =  component.find("cmp1TxtId").get("v.value");
       // console.log('Cmp1 Txt='+enteredTxt);
        
        //var copyEvent = component.getEvent("Cmp1ToCmp2Event");   //calling event name here .we can call either way.
       
        var copyEvent = $A.get("e.c:Cmp1ToCmp2Event");        //calling event type here
        copyEvent.setParams({"copyData":enteredTxt});          //setting data into event att
        
       // copyEvent.setParams({"copyData":"Dharani"});    // putting default dharani here
		copyEvent.fire();
       // alert("fired");
        
     
	}
})