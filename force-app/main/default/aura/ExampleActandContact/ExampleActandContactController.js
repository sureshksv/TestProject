({
	getRecord : function(component, event, helper) {
        
       // debugger;
       helper.getRecord(component, event, helper) ;
		
	},
    handleKeyPress: function(component, event, helper) {
        //alert("u entered="+event.which);
        if (event.which == 13){                                              //13 is for enter button  
		
       helper.getRecord(component, event, helper) ;
        }
		
	},
    handleSelected: function(component, event, helper) {
       var selectedRows = event.getParam('selectedRows');
    for (var i = 0; i < selectedRows.length; i++){
       alert('Selected='+JSON.stringify(selectedRows[i]));
    }

		
	},
    
    handleInit: function(component, event, helper)
    {
        var rActions=helper.getRowActions.bind(this, component);
       /*
         var actions = [
            { label: 'Show details', name: 'show_details' },
             { label: 'Edit Deatils', name: 'edit' }
           
        ];
        */
        var typeColHeaderActions = [
            { label: 'All',checked: true, name:'All'},
            {label: 'Customer Direct',checked: false,name:'Customer - Direct'}
        	];
             
        component.set ("v.columns",[                                                              
            {label: 'Account Name', fieldName: 'linkName', type: 'url', 
             typeAttributes: {label: { fieldName: 'Name' }, target: '_blank'}},
            
            {label:'Type', fieldName:'Type' ,type:'text',hideDefaultActions: true,actions: typeColHeaderActions},
            {label:'Id', fieldName:'Id', type:'text'},
            {label:'Phone', fieldName:'Phone', type:'phone'},
            {label: 'Acton',type: 'action', typeAttributes: { rowActions: rActions }}
        ]);
    },
    handleRowAction:function(component, event, helper)
    {
        var action = event.getParam('action');
        var row = event.getParam('row');
        switch (action.name) {
            case 'show_details':
                var navEvt = $A.get("e.force:navigateToSObject");
                navEvt.setParams({
                    "recordId": row.Id,
                    "slideDevName": "detail"
                });
                navEvt.fire();
                break;
              case 'edit':
               var editRecordEvent = $A.get("e.force:editRecord");
                    editRecordEvent.setParams({
                         "recordId": row.Id
                   });
                    editRecordEvent.fire();
                break;
            case 'delete':
                var rows = component.get('v.loadedRecords');
                var rowIndex = rows.indexOf(row);
                console.log('rowIndex'+rowIndex);
                console.log('rowIndex row'+rows[rowIndex].Id);
                var deleteAct = component.get("c.deleteAccount");
                deleteAct.setParams({ ids : row.Id });
                $A.enqueueAction(deleteAct);
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "Success!",
                    "message": "The record has been delete successfully."
                });
                toastEvent.fire();
                rows.splice(rowIndex, 1);
                component.set('v.loadedRecords', rows);
                 component.set('v.rawRecords', rows);
                break;
        }
        
    },
    handleHeaderAction:function(cmp, event, helper)
    {
        var curntSelected = event.getParam('action').name; // 
        var prevSelected = cmp.get('v.activeFilter');
        var colDef = event.getParam('columnDefinition');
        var columns = cmp.get('v.columns');
        
        console.log('curntlySelected-->'+curntSelected);
        if (curntSelected !== prevSelected) {
            var idx = columns.indexOf(colDef);
            var actions = columns[idx].actions;
            console.log('actions'+actions)
            actions.forEach(function (action) {
                if(action.name === curntSelected)
                    action.checked = true;
                else
                  action.checked = false;  
                //action.checked = action.name === curntSelected;
            });
            cmp.set('v.activeFilter', curntSelected);
            helper.updateColumns(cmp);
            cmp.set('v.columns', columns);
        }
        
    }
})