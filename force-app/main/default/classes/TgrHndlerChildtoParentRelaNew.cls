public class TgrHndlerChildtoParentRelaNew {
    public static void UpdateAccPhoneWithContactUpdate(list<contact> listcon)
    
    {
        //when contact(child) phone is updated then related account(parent) phone has to be updated.write trigger on contact for after update
        list<id> listid=new list<id>();
        for(contact c:listcon)
        {
            listid.add(c.accountid);
            //get all accountids from contacts and put it in a list
        }
       
       
        map<id,account> maplist=new map<id,account>([select id,phone,name from account where id=:listid]);
        //make a map list of id in account and accountid in contact and put it in map
        
        list<account> listupdateacct=new list<account>();
        for(contact c:listcon) 
        {
            account a =maplist.get(c.accountid); //get contact.accountid from maplist
            a.phone=c.phone;                      //put contact phone into acc phone
            listupdateacct.add(a);
            
        }update listupdateacct;
    }
    
    /* public static void UpdateAccPhoneWithContactUpdateOld(list<contact> listcon)
    {        
        List<Account> listupdateacct = new List<Account>();
         for(contact c:listcon) 
        {
             Account act= [select id,phone,name from account where id=:c.accountid limit 1];
            act.phone=c.phone;
            listupdateacct.add(act);
            //update act;
        }update listupdateacct;
    }
    
    public static void UpdateAccPhoneWithContactUpdateDuplicate(list<contact> listcon)
    {
        //when contact(child) phone is updated then related account(parent) phone has to be updated.write trigger on contact and after update
        list<id> listid=new list<id>();
        for(contact c:listcon)
        {
            listid.add(c.accountid);
            //get all accountids from contacts and put it in a list
        }
       
        //List<account> actlist=[select id,name,phone from account where id=:listid];
           //list all act id from account where accids in contact selected
   // Map<id,account> mapacts= new map<id,account>();
    //for(Account a:actlist)
    //{
      //  mapacts.put(a.id, a); //these 3 lines we can write in one single maplist statement
    //}
        
        map<id,account> maplist=new map<id,account>([select id,phone,name from account where id=:listid]);
        //make a map list of id in account and accountid in contact and put it in map
        
        list<account> listupdateacct=new list<account>();
        for(contact c:listcon) 
        {
            account a =maplist.get(c.accountid); //get contact.account.id from maplist
            a.phone=c.phone;
            listupdateacct.add(a);
            
        }update listupdateacct;
    }
    
*/
    
}