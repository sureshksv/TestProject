public with sharing class FlowActionTest {
    public FlowActionTest() {

    }
    @InvocableMethod
    public static List<Account> getActs(List<String> srch)
    {
        String srchParam =srch[0]; 
        List<Account> result = [select Id,Name from Account where name like : srchParam];
        System.debug('Result of search for '+srchParam+' is '+ result);
        return result;
    }

}
