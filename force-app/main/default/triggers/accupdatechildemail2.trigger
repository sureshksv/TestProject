trigger accupdatechildemail2 on Account (after update) {
    set<id> accid=new set<id>();
    for(account a:trigger.new)
{
    
    if(a.industry=='banking')
        accid.add(a.id);
}
   
    list<contact> listcon=[select id,email,accountid from contact where accountid in:accid];
       
     list<contact> conupdate = new list<contact>();
    for(contact c:listcon)
       {
         c.email='dharani@gmail.com';
         conupdate.add(c);
       }update conupdate;
    
    Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
    
    
    
    
}