({
	 register : function(component, event) {
           var inpFieldIds = ["enterId","enterEmailId"];
      
       //reducer function iterates over the array and return false if any of the field is invalid otherwise true.
        var isAllValid = inpFieldIds.reduce(function(isValidSoFar, inpFld){
           //fetches the component details from the auraId
            var inputCmp = component.find(inpFld);
           //displays the error messages associated with field if any
            inputCmp.reportValidity();
           //form will be invalid if any of the field's valid property provides false value.
            return isValidSoFar && inputCmp.checkValidity();
        },true);
        
         if(isAllValid)
         {
             console.log('We are good');
         }
     },
    registerNoCheck : function(component, event) {
    },
    validationForOneInput: function(cmp,evt,helper)
    {
        var inputCmp = component.find("enterId");
        var value = inputCmp.get("v.value");
        // is input valid text?
        if (value === "Suresh") {
            inputCmp.setCustomValidity("Suresh is already registered");
          
        } else {
            inputCmp.setCustomValidity(""); // if there was a custom error before, reset it
        }
        inputCmp.reportValidity(); // Tells lightning:input to show the error right away without needing interaction
    	
    	

         if(inputCmp.checkValidity())
         {
         console.log('All good');
         }
        
    },
    sumUsingForloop: function(cmp,evt,helper)
    {
    var sum=0;
     
         [0,1,2,3].forEach(function(i)
         {
             sum=sum+i;
         });
         alert (sum);
    
	},
    sumUsingReduce: function(cmp,evt,helper)
    {
           
         var total = [0,1,2,3].reduce(function(sumReduce,inpNumber)
                          {
                           return sumReduce+inpNumber;
                          },0);
         
        alert(total);
        
    }
})