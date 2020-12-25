trigger ParentToChildFldUpdate on Account (after update) {

//create set of updated accountids
Set<Id> actIds = new Set<Id>();
for (Account a : Trigger.new)
{
  actIds.add(a.Id)  ;
}
List<Contact> updatedContacts = new List<Contact>();
List<Contact> cnts = [select id,phone,account.phone,accountId from contact where accountId IN:actids ];

for (Contact con: cnts) {
    con.phone=con.account.phone;
    updatedContacts.add(con);
}

update updatedContacts;
}