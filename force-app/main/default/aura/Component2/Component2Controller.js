({
	handleDatacopy : function(component, event, helper) {

       // alert("u r in handleDatacopy");
      var dataFromComp1 =   event.getParam("copyData");
        console.log('Component2 Data='+dataFromComp1);
        
        component.find("cmp2TxtId").set("v.value",dataFromComp1);
	}
})