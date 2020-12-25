@istest
public class Trigger12Test {
    @istest
    public static void AddContactOppAfterInsert(){
        Account a =new Account();
        a.name='pujitha trigger12';
        test.starttest();
        insert a;
        test.stoptest();
        Contact c = [select id ,name from contact where accountid=: a.id limit 1];
        Opportunity o = [select id ,name from Opportunity where accountid=: a.id limit 1];
        System.assertNotEquals(null, c);
        System.assertNotEquals(null, o);
    }
}