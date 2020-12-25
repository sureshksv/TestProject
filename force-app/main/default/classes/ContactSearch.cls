public class ContactSearch {
    public static list<contact> searchForContacts(string ln,string mpc)
    {
       List<Contact> liscon=[Select ID,Name from Contact 
                             where Name=:ln and MailingPostalCode=:mpc]; 
      return liscon;  
    }

}