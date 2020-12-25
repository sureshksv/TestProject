trigger trigg13dup on Account (after update) {
 list<account> listaccCont =[select id,(select id,name,accountid from contacts) from account where id in :trigger.new];
    map<id,list<contact>> contactmaplist=new map<id,list<contact>>();
    for(account a :listaccCont){
        contactmaplist.put(a.id,a.contacts);
    }
    
    list<contact> updatedcontactlist=new list<contact>();
    for(account a1:trigger.new){
        if(trigger.oldmap.get(a1.id).billingstreet !=a1.billingstreet){
            list<contact> ctslist=contactmaplist.get(a1.id);
            for(contact c:ctslist){
                c.otherstreet+=a1.billingstreet;
                updatedcontactlist.add(c);
            }
        }
        
    }
    update updatedcontactlist;
}