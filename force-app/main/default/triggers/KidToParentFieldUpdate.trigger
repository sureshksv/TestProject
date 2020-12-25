trigger KidToParentFieldUpdate on contact (after update) {
    list<id> listid=new list<id>();
    map<id,string> mapcontact=new map<id,string>();
    
    for(contact c:trigger.new)
    {
listid.add(c.AccountId);
mapcontact.put(c.accountid,c.fax);
    }
   
    list<account> actlist=[select id,name,fax from account where id in:listid];
   list<Account> updatedact =new list<account>();
  
    for(account a:actlist)
    {
        a.fax=mapcontact.get(a.id);
        updatedact.add(a);


    }update updatedact;

}