({
    handleTotalIncomeComponentEvent : function(component, event, helper) {
	
    var totalIncome = event.getParam('totalIncome');       //get totalincome data from event
    component.set('v.totalIncome', totalIncome);           //and set it in comp container of attribute
    
	}
        
})