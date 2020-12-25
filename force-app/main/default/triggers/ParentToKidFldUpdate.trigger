trigger ParentToKidFldUpdate on Account (after update) {
//on change of fax on account respective contact fax should be updated
List<Id> lisid=new List<Id>();


for(Account a:trigger.new)
{
lisid.add(a.id);
}

/*
map<id,string> mapfax=new map<id,string>();
for(Account a:trigger.new)
{
    mapfax.put(a.id,a.Fax);
}
*/

//new way of getting map of ids and accounts
//
map<id,Account> actMap = trigger.newMap;
    
//we can use trigger.new instead of lisid
//List<Contact> listcon = [select id,name,fax,accountid from contact where accountid in:trigger.new];

    list<Contact> listcon = [select id,name,fax,accountid from contact where accountid in:lisid];
list<contact> updatedcons=new list<contact>();
for(contact c:listcon)
{
    c.Fax= actMap.get(c.AccountId).Fax;
     updatedcons.add(c);   
}update updatedcons;

}    
    
//sendEmail();


/*
private void sendEmail()
{
    Messaging.SingleEmailMessage msg = new Messaging.SingleEmailMessage();
//String[] toAddress = new String[]{'paturi_sri@yahoo.com','sureshksv@yahoo.com'};
String[] toAddress = new String[]{};
msg.setToAddresses(toAddress);
msg.setSubject('Test');
msg.setPlainTextBody('Text Body');
msg.setSenderDisplayName('Suresh Sri');

Messaging.SingleEmailMessage msg1 = new Messaging.SingleEmailMessage();
//String[] toAddress1 = new String[]{'paturi_sri@yahoo.com','sureshksv@yahoo.com'};
String[] toAddress1 = new String[]{};
msg1.setToAddresses(toAddress1);
msg1.setSubject('Test1');
msg1.setPlainTextBody('Text Body1');
msg1.setSenderDisplayName('Suresh Sri1');
try {
    Messaging.SingleEmailMessage[] msgs = new Messaging.SingleEmailMessage[]{};
msgs.add(msg);
msgs.add(msg1);
Messaging.sendEmail(msgs);
System.debug('Emails Sent');
    
} catch (Exception e) {
   System.debug('Emails Cound not Sent' +e.getMessage()); 
   System.debug('Emails Cound not Sent' +e.getStackTraceString()); 
}



}
*/