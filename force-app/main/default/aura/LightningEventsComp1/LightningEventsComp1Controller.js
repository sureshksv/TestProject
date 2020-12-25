({
    addIncome : function(component, event, helper) {
        var incomes= component.get('v.incomes');
        var newIncome=
            {
                sno : incomes.length + 1,
                source : component.find('source').get('v.value'),
                amount : parseFloat(component.find('amount').get('v.value'))
            }
        if(newIncome.source!='' && newIncome.amount!='' && newIncome.source!=null && newIncome.amount!=null)
            incomes.push(newIncome);
       // debugger;
        component.set('v.incomes', incomes);
        component.find('source').set('v.value',"");
        component.find('amount').set('v.value',"");
        
    },
    
    toggleIncomeForm : function(component, event, helper) {
        //alert("hi i am in toggle");
        var incomeForm = component.find('incomeForm') ;        // here it is system event of toggleclass
        $A.util.toggleClass(incomeForm, 'hide');               //write css code 
    },
    
    doInit : function(component, event, helper) {             // this will show after page is loaded.
        
        component.set('v.columns',[  
            
            {label: 'Sno.', fieldName: 'sno', type: 'number',cellAttributes: { alignment: 'left' }},
            {label: 'Name of Source', fieldName: 'source', type: 'text'},
            {label: 'Amount', fieldName: 'amount', type: 'number',cellAttributes: { alignment: 'left' }}
        ]);
        
        component.set('v.incomes',[
            {
                sno: 1,
                source:'Regular Job',
                amount: 3500
            },
            {
                sno: 2,
                source:'Part time',
                amount: 4000
            }
        ]);
        
    },
    
    calculateTotalIncome : function(component, event, helper) {
        var incomes = component.get('v.incomes');
        
        var totalIncome1 = 0;
        for(var i=0;i<incomes.length;i++)
        {
            totalIncome1 += incomes[i].amount;   //j += k means j=j+k
        }
        
        
        var lightningEventsComp1Event = component.getEvent('LightningEventsComp1Event');    //name of event
        lightningEventsComp1Event.setParams({'totalIncome' : totalIncome1});              //att from comp1 to event att
                                                                                 // event assigning in params shoulb be in json method
        lightningEventsComp1Event.fire();                                       // fire is for event 
    }
})