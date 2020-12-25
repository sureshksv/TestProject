public class GetAllAccounts {
    public static list<Account> GetByName(string n)
    {
        string newsearchname='%'+n+'%';
        list<account> a =[select name from Account where name like :newsearchname];
        return a;
    }

}