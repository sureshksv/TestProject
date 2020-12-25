trigger Trigger12 on Account (after insert) {
   list<contact> liscont=new list<contact>();
    list<opportunity> lisopp=new list<opportunity>();
    for(Account a:trigger.new){
        contact c=new contact();
        c.lastname = 'Default contact '+a.name;
        c.accountid = a.id;
        liscont.add(c);
         
        Opportunity o = new Opportunity();
        o.name ='defaulty opp '+a.name;
        o.accountid=a.id;
        o.stagename='prospecting';
        o.closedate =system.today()+60;
        lisopp.add(o);
    }insert liscont;
    insert lisopp;
}