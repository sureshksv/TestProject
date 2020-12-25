public class ContactListController {
    
    @AuraEnabled    
    public static List<contact> getContactsForAccount(Id actId)
    {
         System.debug('You are in controller');    
        return [select id,name,lastname,firstname,phone,email from Contact where accountid=:actId];
        
    }

    @AuraEnabled    
    public static List<contact> getAllContacts()
    {
         System.debug('You are in all contacts controller');    
        return [select id,accountId,name,lastname,firstname,phone,email from Contact];
        
    }


}