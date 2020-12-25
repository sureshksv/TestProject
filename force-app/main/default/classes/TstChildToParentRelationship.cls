@IsTest
private class TstChildToParentRelationship 
{	
    @istest  
   private static void testUpdatePhone()
    {
        test.startTest();
                list<contact> cnts = getContact();
                //account a=new account();
                
                for (contact c:cnts){
                    c.phone='565756577';
                    update c;
                    Account a =[select name,phone from account where id=: c.accountid limit 1];  
                    system.assertEquals(a.phone, c.phone);
                    
                }        
        test.stopTest();
    }
    
    private static list<Contact> getContact()
    {
        
        list<contact> cnts=[select id,name, phone,accountid from contact where id='0032E00002ecCCoQAM'];
        return cnts;
    }
    
}