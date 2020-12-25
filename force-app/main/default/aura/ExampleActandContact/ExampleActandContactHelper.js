({
  getRecord: function(component, event, helper) {
    this.showSpinner(component, event, helper);
      
    var actName = component.find("inputActName").get("v.value");
    //alert('Entered Value='+actName);
    var apexCntrMethod = component.get("c.fetchRecord");
    apexCntrMethod.setParams({ actname: actName });
    apexCntrMethod.setCallback(this, function(resp) {
      var state = resp.getState();
      if (state === "SUCCESS") {
        var acts = resp.getReturnValue();
          acts.forEach(function(act){
                   	 act.linkName = '/'+act.Id;
                   // act.linkName = '/'+'lightning/cmp/c__PageNavi1_Urlparams?c__accountName=Suresh';
                });
        //alert(act);
        component.set("v.loadedRecords", acts);
           component.set("v.rawRecords", acts);
        // setTimeout(() => { console.log("World!"); }, 20000);
        this.hideSpinner(component, event, helper);
      }
    });

    $A.enqueueAction(apexCntrMethod);
  },
  showSpinner: function(component, event, helper) {
    var spinner = component.find("mySpinner");
    $A.util.removeClass(spinner, "slds-hide");
  },

  hideSpinner: function(component, event, helper) {
    var spinner = component.find("mySpinner");
    $A.util.addClass(spinner, "slds-hide");
  },
    getRowActions: function(component, row, callback)
    {
         var actions = [
            { label: 'Show details', name: 'show_details' },
             { label: 'Edit Deatils', name: 'edit' }
           
        ];
         var deleteAction =  { label: 'Delete', name: 'delete' };
       // var row = event.getParam('row');
       // alert('row='+row);
        actions.push(deleteAction)   ;
        if(!row.Phone)
        {
         deleteAction.disabled = 'true';
        }
        callback(actions);
    },
     updateColumns: function (cmp) {
        var rows = cmp.get('v.rawRecords');
        var activeFilter = cmp.get('v.activeFilter');
        console.log('activeFilter Helper'+activeFilter);
        var filteredRows = rows;
    
        if (activeFilter !== 'All') {
            filteredRows = rows.filter(function (row) {
                console.log('Each Row'+row.Type);
                if(row.Type == activeFilter){
                    return  row; 
                }
                // return (activeFilter === 'In_Completed') ||(activeFilter === 'Pre_Order');
            });
        }
        cmp.set('v.loadedRecords', filteredRows);
    },
});