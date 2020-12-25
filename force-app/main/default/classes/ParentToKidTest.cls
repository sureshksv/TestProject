@istest
private class ParentToKidTest {

@IsTest
static void updateActFax(){
    //data preparation
    Test.startTest();
    Account a = new Account();
    a.Name='SureshActTest';
    insert a;
    Contact c = new Contact();
   // c.Name='SureshContactTest';
    c.AccountId = a.id;
    c.LastName='k';
    c.FirstName='suresh';
    insert c;
    
    a.Fax='1231231234';
    update a;
    Contact cnt = [select id,name,fax from contact where id=:c.id];
    System.assertEquals(a.fax, cnt.fax);
    Test.stopTest();
    
}
    }