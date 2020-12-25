({
    doAddString : function(component, event, helper) {
  // to get the arguments means paramters from event
    var args = event.getParam("arguments");                    // this is imp to write*** arguments
   var val1= args.cString1;
   var val2= args.cString2;

   var val1Int = Number(val1);
   var val2Int = Number(val2);
   alert("val1Int::"+val1Int);
   alert("val2Int::"+val2Int);

   if(isNaN(val1Int) || isNaN(val2Int))
   {
    component.set("v.Value1",String(val1)+String(val2));   
   }
   else{
   // component.set("v.Value1",Number(val1)+Number(val2));
   component.set("v.Value1",val1Int+val2Int);
   }
   
   //component.set("v.Value2",val2);
   alert("U r in child::"+val1 +"::"+val2);

    }
})