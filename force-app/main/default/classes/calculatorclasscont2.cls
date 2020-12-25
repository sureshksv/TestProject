public class calculatorclasscont2 {
    public integer Aval{set;get;}
    public integer Bval{set;get;}
    public integer result{set;get;}
    public string selectone{set;get;}
    
    
    public PageReference performOperation()
    {
        System.debug('U r in debug'+selectone);
        if (aval == 0 || bval == 0)
         
        {
            return showErrorMsg();           
        }
        
        
        if (selectone == 'add')
        {
            result=aval+bval;
        }  
        else if (selectone == 'sub')
        {
            result=aval-bval;
        }   
        else if (selectone == 'multi')
        {
            result=aval*bval;
        }   
        else if (selectone == 'div')
        {
            result=aval/bval;
        }
        else if (selectone == 'none')
        {
            reset();
        }   
        return null; 
    }
    
    public void reset()
    {
        aval=null;
        bval=null;
        result=null;
    }
    
   private PageReference showErrorMsg()
   {
        ApexPages.Message msg = new ApexPages.Message(ApexPages.Severity.ERROR,'Please enter value');
            ApexPages.addMessage(msg);
            
            // ApexPages.addmessage(new ApexPages.message(ApexPages.severity.Error,'Please enter value');
            System.debug('U r in no input '+selectone);
       		result=null;
            return null;
   }
     
    public pagereference redirect()
    {
      PageReference pr = new PageReference('/apex/calculatorexp2');
        pr.setRedirect(true);
        return pr;
    }
}