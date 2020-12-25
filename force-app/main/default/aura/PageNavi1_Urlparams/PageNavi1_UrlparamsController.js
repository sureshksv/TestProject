({
	init : function(component, event, helper) {
		var pageReference = component.get("v.pageReference");
       // debugger;
		component.set("v.name1", pageReference.state.c__name1);
        component.set("v.address1", pageReference.state.c__address1);
	}
})