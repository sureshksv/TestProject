trigger trg13 on Account (after update) {
    
    //map of acctid -->corresponding contacts
    list<Account> contactsList =[select id, (select id,name,otherstreet,accountId from contacts)
                                                      from account where id in : trigger.new];
    Map<id,List<Contact>> contactsMap = new  Map<id,List<Contact>>();
    for(Account a1:contactsList)
    {
      contactsMap.put(a1.id,a1.contacts)  ;
    }   
    list<contact> updatedContacts=new list<contact>();
    for(account a :trigger.new){ //a1,a2,a3
        if(trigger.oldmap.get(a.id).billingstreet !=a.billingstreet)
        {
           list<Contact> cts = contactsMap.get(a.id);
            for(contact c:cts)
            {
                c.otherstreet=a.billingstreet;
                updatedContacts.add(c);
            }
            
         }
        
            
        }
    update updatedContacts;
     
    
    }