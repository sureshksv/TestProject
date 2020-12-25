trigger taskcreatetouser2 on Contact (after insert) {
   list<task> listtsk=new list<task>();
    for(contact c:trigger.new)
    {
    task tsk=new task();
    tsk.whoid=c.ownerid;
    tsk.status='in progress';
    tsk.subject='work on contact'+ c.id;
    tsk.Priority='high';
    tsk.ownerid=c.ownerid;
        listtsk.add(tsk);       
}insert listtsk;
 
    
}

//whoid refers to people things.i.e lead id or a contact id.it represents human such as lead or a contact.
// whatid represents to object type things i.e. an account id or opportunity id.