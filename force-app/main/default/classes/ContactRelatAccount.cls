public class ContactRelatAccount {
    public static list<Account> getAllAccount(string na)
    {
        list<Account> liscon =[select name ,(select firstName,Lastname from Contacts) from Account where name=:na] ;
        return liscon;
                              
    }

}