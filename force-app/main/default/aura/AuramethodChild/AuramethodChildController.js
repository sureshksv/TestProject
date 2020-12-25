({
	Hello : function(component, event, helper) {
        return "HI I am Child Component";
 
	},
    
    AddNumbers : function(component, event, helper) {
        var parameters = event.getParam("arguments");         //this is pre built we have to write this to take parameters.
        var num1= parameters.number1c;
        var num2= parameters.number2d;
        return num1 + num2;

    }
})