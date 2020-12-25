trigger acctphupdatecontact2 on Account (after update)
{
  

List<Account> acts = [select id,phone,(select phone from contacts)  from account where id in: trigger.new]; 
    
    List<Contact> modifiedContacts = new List<Contact>();
    for(Account a : acts)
    {
       List<Contact> cnts =  a.contacts;
        for(Contact c:cnts)
        {
            c.phone=a.phone;
            modifiedContacts.add(c);
        }
    }
    System.debug('in acctphupdatecontact2');
    update modifiedContacts;
    
   
    
    
    
  private void  temp()
  {
        list<id> lstid=new list<id>();
      map<id,string> mapphone=new map<id,string>();
    //looping trigger.new and getting actids
    for(Account a:trigger.new)
    {
      lstid.add(a.id);  
      mapphone.put(a.id,a.phone);
    }
      
       list<contact> listcon=[select id,phone,accountid from contact where accountid in:lstid];
    
    list<contact> updatecon=new list<contact>();
    for(contact c:listcon)
    {
      c.phone=mapphone.get(c.accountid);
      updatecon.add(c);  
    }update updatecon;
   
  
  }   
}