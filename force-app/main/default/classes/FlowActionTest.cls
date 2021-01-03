public with sharing class FlowActionTest {
    public FlowActionTest() {

    }
    @InvocableMethod
    public List<Account> getActs(String srch)
    {
        List<Account> result = [select Id,Name from Account where name like : srch];
        System.debug('Result of search for '+srch+' is '+ result);
        return result;
    }

}
