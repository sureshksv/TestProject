public class Calculatorcontr {
    public integer num1{set;get;}
    public integer num2{set;get;}
    public Integer result{set;get;}
    public String selected{set;get;}
    
   
    public PageReference performOperation()
    {
        System.debug('U r in debug'+selected);
        if (num1 == 0 || num2 == 0)

{

    ApexPages.addmessage(new ApexPages.message(ApexPages.severity.Error,'Please enter value'));
    System.debug('U r in no input '+selected);
   // return null;

} 
        if(selected=='add')
        
        {
            System.debug('U r in add');
            result=num1+num2;
        }   
        else if (selected=='sub')
        {
            System.debug('U r in sub');
         result=num1-num2;   
        }
        else if (selected=='multi')
        {
            System.debug('U r in multi');
         result=num1*num2;   
        }
        else if (selected=='div')
        {
            System.debug('U r in div');
         result=num1/num2;   
        }

        else if (selected=='none')
        {
          reset();              

        }
       //  return result; 
       return null;
    }
    public void reset()
    {
        num1=null;
        num2=null;
        result=null;
    }
   
    public  PageReference redirect() {
        System.debug(' U r in redirect debug');
         PageReference target = new PageReference('/apex/Calculator');
        target.setRedirect(true);
        // This is a permanent redirection
        //target.setRedirectCode(301);
        return target;
    }
    
       @RemoteAction
    public static PageReference redirectFromJS() {
        System.debug(' U r in redirect debug');
         PageReference target = new PageReference('/apex/Calculator');
        target.setRedirect(true);
        // This is a permanent redirection
        //target.setRedirectCode(301);
        
        return target;
    }
    public void onLoad() {
        System.debug(' U r in onload');
        Map<String, String> UrlParameterMap = ApexPages.currentPage().getParameters();
        // check for a specific parameter
        if (UrlParameterMap.containsKey('number1')){
          num1=Integer.valueof(UrlParameterMap.get('number1'));
        } 
        if (UrlParameterMap.containsKey('number2')){
           num2=Integer.valueof(UrlParameterMap.get('number2'));
        }   
        
    }
    
}