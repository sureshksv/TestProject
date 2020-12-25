public class AccountHandler {
    public static Account insertNewAccount(string n)
    {
        try
        {
        Account a = new Account();
        a.name=n;
        insert a;
        return a;
        }
        catch(DMLException e)
        {
            system.debug(e.getmessage());
            return null;
        }
    }
    
 public  List<Account> getAllRecords()
 {
    List<Account> la = [Select id,name from Account];
     system.debug(la);
     return la; 
 }
  
    public Account updateAccount(String name1)
    {
        Account a = [select id,name from Account where name=:name1];
        a.name=name1+'_new';
        update a;
            
        return a;
    }
  
}