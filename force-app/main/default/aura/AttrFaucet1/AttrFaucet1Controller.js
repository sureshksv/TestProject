({

    addElement : function(component, event, helper) {
        alert("u rin");
        var bdy= component.get("v.body");
        alert ("Body="+bdy);
        component.set("v.body", []);
            }
   
})