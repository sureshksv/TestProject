({
	handleInit : function(component, event, helper) {
	 var actions=helper.getRowActions.bind(this, component);         //bind  is used on row level dynamic actions for this we use bind
        
       
             
        component.set ("v.columns",[                                                              
            {label: 'Account Name', fieldName: 'linkName', type: 'url',            //**IMP:this 2 lines are written for url links on name in datatable
             typeAttributes: {label: { fieldName: 'Name' }, target: '_blank'}},
            
            {label:'Type', fieldName:'Type' ,type:'text'},
            {label:'Id', fieldName:'Id', type:'text'},
            {label:'Phone', fieldName:'Phone', type:'phone'},
            {type: 'action', typeAttributes: { rowActions: actions }}             // this line is used for rowactions means showing edit,delete,showdetails on each row of table
        ]);	
	},
    
    getRecord : function(component, event, helper) {
        helper.getRecord(component, event, helper);
	},
    handleRowAction : function(component, event, helper) {
		 var action = event.getParam('action');                      // action is event just copy it 
        var row = event.getParam('row');                           //row is in datatable it is row just copy the code it is give like that
        switch (action.name) {                                    //it is a switch where name are showdetails,delete,edit written in helper assigened
            case 'show_details':
                var navEvt = $A.get("e.force:navigateToSObject");         //it is system built in navigation where to go
                navEvt.setParams({
                    "recordId": row.Id,                                  // in the selected row the id is picked form the row
                    "slideDevName": "detail"                           //see it in google
                });
                navEvt.fire();
                break;                                                 //**break** has to be there otherwise it goes to all case
              case 'edit':
               var editRecordEvent = $A.get("e.force:editRecord");         //system builtin edit form will pop up as modal**
                    editRecordEvent.setParams({
                         "recordId": row.Id
                   });
                    editRecordEvent.fire();                              // all events has to get fire()
                break;
            case 'delete':
                var rows = component.get('v.accts');                       //get attribute
                var rowIndex = rows.indexOf(row);                         // index of row to get in the datatable [0,1,2]
                console.log('rowIndex'+rowIndex);
                console.log('rowIndex row'+rows[rowIndex].Id);
                
                var deleteAct = component.get("c.deleteAccount");         //**delete SOQL written in Apex get that method
                deleteAct.setParams({ ids : row.Id });                    //set paramters to apex mthod 
                $A.enqueueAction(deleteAct);                               //because it is apex it wi be enqueue
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "Success!",
                    "message": "The record has been delete successfully."
                });
                toastEvent.fire();
                rows.splice(rowIndex, 1);                           //in the above one the record will be delete in datatable on the ui
                component.set('v.accts', rows);                  //**SPLICE** is used to delete in user interface also and set it to attribute
                break;
        }
        
	},
    
    
    handleKeyPress : function(component, event, helper) {
        if (event.which == 13){                             //this is when enter button is press then also it has to work not only when pressed button
		
       helper.getRecord(component, event, helper) ;         
        }
	},
     handleSelected: function(component, event, helper) {
       var selectedRows = event.getParam('selectedRows');
    for (var i = 0; i < selectedRows.length; i++){
       alert('Selected='+JSON.stringify(selectedRows[i]));
    }

		
	}
})