({
    addString : function(component, event, helper) {
                                                      //get the child component
       // console.log("U are in Parent addstring1")
   var ChildComponent = component.find("childComp");
                                                      //call the child component method with parameters
    var pString1val = component.get("v.pString1");
    var pString2val =component.get("v.pString2");
    console.log("U are in Parent addstring2:" +pString1val +"::"+pString2val)

    ChildComponent.cAddStrings(pString1val,pString2val);      //chilpcmp method name is called here and gave parameters here
}
})