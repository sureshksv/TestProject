({
	retrieveData : function(component,event,helper) {
        
        return "Suresh";
       
        
		
	},
    retrieveDataWithPromiseSimple : function(component,event,helper) {
        
        return new Promise(function(resolve, reject){
           
            resolve("Suresh");
           
                        
        });
    },
           
    retrieveDataWithPromise : function(component,event,helper) {
        
        return new Promise(function(resolve, reject){
            var val = component.get('v.display');
            if(val === undefined || val.length == 0 )//means first time
            resolve("Suresh");
            else
                reject("Please refresh");
                        
        });
           
        
	},
     retrieveDataWithPromiseApexCall : function(component,event,helper) {
        
        return new Promise($A.getCallback(function(resolve, reject){
            var val = component.get('v.display');
            if(val === undefined || val.length == 0 )//means first time
            resolve("Suresh");
            else
                reject("Please refresh");
                        
        }));
           
        
	},
    
    
})