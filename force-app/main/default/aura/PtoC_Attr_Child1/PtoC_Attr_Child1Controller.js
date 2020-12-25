({
    c1EnterAttr : function(component, event, helper) {
        var attrPVal =component.get("v.c1Val");
        alert('c1Value='+attrPVal);

    }
    , 
    doInform  : function(component, event, helper) {
        var oldVal = event.getParam("oldValue");                     // copy the code
        var newVal =  event.getParam("value");
        //var attrPVal =component.get("v.pVal");
        alert('Child Value changed to ='+newVal +" , from="+oldVal);
    }
})