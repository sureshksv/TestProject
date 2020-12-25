//child to parentrelationship
trigger CreateContphoneToAccPhonerelationship on Contact (after update) {
   /* for(contact c:trigger.new){
        
       List<Account> acts =  [select id,name,phone from Account where id=:c.AccountId];
        for(account a:acts){
            a.phone=c.phone;
            update a;
        }
    }*/
  
   Set<Id> actIds = new Set<Id>();
    for(contact c:trigger.new){
        actIds.add(c.AccountId);
        
    }
    
     List<Account> acts =  [select id,name,phone from Account where id in : actIds];
    
    for(contact c:trigger.new){    
      
       for(Account a : acts)
       {
           if(a.id == c.AccountId)
           {
                a.phone=c.phone;
                update a;
           }
       }
    }
    

}