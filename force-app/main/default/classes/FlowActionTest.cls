public with sharing class FlowActionTest {

    public FlowActionTest() {

    }
    @InvocableMethod
    public static List<List<Account>> getActs(List<List<String>> srch)
    {
        String srchParam ='%'+srch[0][0]+'%'; 
        List<Account> result = [select Id,Name from Account where name like : srchParam];
        System.debug('Result of search for '+srchParam+' is '+ result);
        
        List<List<Account>> retVal = new List<List<Account>>();
        retVal.add(result);
        return retVal;

       
    }

}
