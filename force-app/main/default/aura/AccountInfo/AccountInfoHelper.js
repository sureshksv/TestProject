({
	fetchAccountInfo : function(component, event, helper)  {
        var recordId = component.get("v.recordId");
        var action = component.get("c.getAccountInfo");
        action.setParams({
            accountid : recordId
        });
        //alert('before calling');
        action.setCallback(this,function(response){
            var state = response.getState();
            
            if(state === "SUCCESS"){
                var result = response.getReturnValue();
                
                component.set("v.record", result);
            }
            else
                alert(state);
            
        });
        
        $A.enqueueAction(action);
        
        
        
        //capture the accountid in context in controller because we already have recorid so we can directly write get
        //and assign it to a variable.
        //action and recordid after var are variables. 
        //that is apex method which can recoginize because we have include contoller in cmp.our apex accepts i/p parameters,
        //so we have to setparams and it accepts json object like above written.so accountid is parameter in apexmethod 
        //and recordid is in component so assining(passing) recordid to accountid
        //setcallback implements a particular logic and after returning the value it is set here
       // alert('implement server side action here');
       // state is gets captureed of server whether the response it returned is sucess or not.
       // after sucess we can capture the result of succefull operation and getstate is method that returns the server side 
       // action and getreturn method is what returned in  apexmethod and captures in result and now we have to write a 
       // attribute in comp to capture this result.
       //  and writing comp.set(v.record,result) and setting result in record in comp.
       //  $A.enqueueAction(action) is any soql calls u make in lightening we are queueing this particular action whenever the 
       //  sources are available . this works in asyncronously
       //   
        
		// whatever we write in js can be written in helper method because this helper methods can be reuse anywhere
		// within the application of same components
		// serverside logic is written here.
		
	}
})