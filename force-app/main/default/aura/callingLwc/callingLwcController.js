({
	handleChildData : function(component, event, helper) {
        var details = event.getParam('detail');
        var details1 = event.getParam('per');
         var details2 = event.getParam('data');
		var data=details1.Name;
        component.set('v.dataLwc',data);
        
	}
})