({
	showMessage : function(component, event, helper) {
     var myChildComp=component.find("childComponent");                 //refferring child comp here
      //  component.set("v.resultMessage", myChildComp.addNum(3,4));
      component.set("v.resultMessage", myChildComp.addNum(
                                                Number(component.get("v.number1a")),Number(component.get("v.number2b"))));

	}
})