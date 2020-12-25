({
	  
	navigateToLcalculator : function(component, event, helper) {
    var evt = $A.get("e.force:navigateToComponent");
    evt.setParams({ 
        componentDef : "c:LCalculator",
        componentAttributes: {
           // contactName : component.get("v.contact.Name")

        }
    });

    evt.fire();
}
})