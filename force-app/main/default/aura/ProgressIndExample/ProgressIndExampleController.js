({
	 handleInit: function (cmp,event,helper) {             //example
        cmp.set('v.steps', [
            { lbl: 'Contacted', stage: 'step-1' },
            { lbl: 'Open', stage: 'step-2' },
            { lbl: 'Unqualified', stage: 'step-3' },
            { lbl: 'Nurturing', stage: 'step-4' },
            { lbl: 'Closed', stage: 'step-5' }
        ]);
    },
    handleInitTest: function (cmp,event,helper) {            //example
        //cmp.set('v.steps', [1,2,3,4]);
        //
        cmp.set('v.steps', [
            {label:1},
             {label:2},
            {label:3},
             {label:4}]);
    },
     handleInitApex: function (cmp,event,helper) {        //original
      helper.getOppPicklist(cmp,event,helper);          // getting the data of picklist from apex
     },
    handleMouseEnter: function (cmp,event,helper) {
        var stepIndex = event.getParam('index');                //incomplete
    }
    
             
})