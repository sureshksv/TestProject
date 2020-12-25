({
	getData : function(component, event, helper) {
      var data =  helper.retrieveData();
       component.set("v.display",data);
     
        
		
	},
    getDataWithPromiseSimple : function(component, event, helper) {
    
       helper.retrieveDataWithPromiseSimple(component, event, helper)
       .then(function (response) {
        component.set("v.display",response);   
       });
           
        
		
	},
    getDataWithPromiseFull : function(component, event, helper) {
    
       helper.retrieveDataWithPromise(component, event, helper)
       .then(function (response) {
        component.set("v.display",response);   
       }).catch(function (reject) {
    
    alert(reject);
});
           
        
		
	},
    
    getDataWithPromiseApexCall : function(component, event, helper) {
    
       helper.retrieveDataWithPromiseApexCall(component, event, helper)
       .then(function (response) {
        component.set("v.display",response);   
       }).catch(function (reject) {
    
    alert(reject);
});
           
        
		
	},
})