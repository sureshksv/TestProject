@istest
private class KidToParentTest {
    @IsTest
    static void updatefaxcont(){
        //create a object withdata
       
        
        Test.startTest();
         Account a=new account();
        a.Name='suresh';
        insert a;
        Contact c=new Contact();
        c.FirstName='laksmi';
        c.LastName='paturi';
        c.fax='765432';
        c.AccountId=a.id;
        insert c;
        c.fax='543210';
        update c;
      account act=  [select id,fax from account where id=:a.id];
        system.assertEquals(c.fax,act.fax );
        Test.stopTest();
        
    }
   
}