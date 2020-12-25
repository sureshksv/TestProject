({
    enterAttr : function(component, event, helper) {
        var attrPVal =component.get("v.pVal");
        alert('Value='+attrPVal);
    }
    ,
    doInformParent : function(component, event, helper) {
        var oldVal = event.getParam("oldValue");
        var newVal =  event.getParam("value");
        //var attrPVal =component.get("v.pVal");
       // alert('Parent Value changed to ='+newVal +" , from="+oldVal);
    }


})