public class RelationshipAccCont {
    public static list<Account> getallaccounts()
    {
       list<Account> a =[select id,Name from Account];
      return a;  
    }
 public static list<string> getbystring()
 {
    list<account> la= getallaccounts();
     list<string> ls=new list<string>();
     for(account sa:la)
     {
     string s='Account Id :'+ sa.id +'account name :'+sa.Name;
                ls.add(s);
     } 
     return ls;
     
 }
    public static list<contact> getallContacts()
    {
         list<contact> lc=[select id,Firstname,LastName,AccountId from contact];
       
        return lc;
              
    }
   public static list<account> getallAccoRelaContacts()
   {
       list<account> las=[select name,(select FirstName,Lastname from Contacts) from Account];
       for(Account a : las)
       {
           String aName = a.name;
             List<Contact> cnts =   a.contacts;
           		for(Contact c : cnts)
                {
                    System.debug('Contact Name='+c.name);
                }
       }
       return las;
       
   }
    
     	
    
    
    
}