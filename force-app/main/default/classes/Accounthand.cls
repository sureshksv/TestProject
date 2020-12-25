public class Accounthand {
public static Account InsertNewAccount(string n)
{
    try
    {Account a=new Account();
    a.Name=n;
    insert a;
    return a;
       }
    catch(DMLException e)
    {
        system.debug(e.getmessage());
        return null;
    }
}
}