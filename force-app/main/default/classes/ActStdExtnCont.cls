public class ActStdExtnCont {
    //private final Account acct;
    
    
    public ActStdExtnCont(ApexPages.StandardController stdController) {
      //  this.acct = (Account)stdController.getRecord();
    }
    
    Public Pagereference save()
    {
         System.debug(' U r in Extension save');
    
        final PageReference target = new PageReference('/apex/CalculatorWelcome');
        target.setRedirect(true);
       
        
        return null;

       
    }

}