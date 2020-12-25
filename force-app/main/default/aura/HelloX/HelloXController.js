({
	handleClick : function(component, event, helper) {
  var userEnteredvalue = component.find("userInput").get("v.value");
        
        console.log('userEnteredvalue: '+userEnteredvalue); 
       component.set("v.userInputValue",userEnteredvalue);
 }
})       
        
        
        // here userinput is id means that whole line is picked and in that line we will get v.value here , 
        // if we want name then get v.name
        // userEnteredvalue is a variable here in java script the data is stored here
       // console is used to show debug statements in the browser console
       //to read the value in the text box and show it on UI
       
        // component.set is used to send this from js to cmp(attribute), eg. component.set("attribute name",value ) means
        // userenteredvalue value is stored in v.userinputvalue i.e. attribute name