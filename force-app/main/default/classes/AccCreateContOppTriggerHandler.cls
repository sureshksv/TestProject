public class AccCreateContOppTriggerHandler {
    public static void createContactsAfterAccountInsert(List<Account> acts)
    {
        
    list<contact> Listcon=new list<contact>();
    for(account a:acts)
    {
        
      contact c=new contact();
        c.lastname=a.name;
        c.accountid=a.id;
       listcon.add(c);
    }
    insert listcon;
        
    }
    
    
    public static void createoppafterAccInsert(List<Account> acts)
    {
         list<opportunity> listopp=new list<opportunity>();
    for(account a:acts)
    {
        opportunity oppo=new opportunity();
            oppo.accountid=a.id;
            oppo.name=a.name;
            oppo.StageName='prospecting';
             oppo.CloseDate=date.today()+60;
            listopp.add(oppo);
     
    }insert listopp;
    }
    
    public static void createContactsandOppAfterAccountInsert(List<Account> actsNew)
    {
        
    //list<contact> Listcon=new list<contact>();
     //   list<opportunity> listopp=new list<opportunity>();
        list<sObject> listSobj= new List<sObject>();
    for(account a:actsNew)
    {
        
      contact c=new contact();
        c.lastname=a.name;
        c.accountid=a.id;
      // listcon.add(c);
        listSobj.add(c);
        
         opportunity oppo=new opportunity();
            oppo.accountid=a.id;
            oppo.name=a.name;
            oppo.StageName='prospecting';
             oppo.CloseDate=date.today()+60;
         //   listopp.add(oppo);
        listSobj.add(oppo);
     
    }
   // insert listcon;
    //    insert listopp;
    insert listSobj;
    }
    

}