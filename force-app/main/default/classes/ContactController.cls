public with sharing class ContactController {

    @AuraEnabled(cacheable=true)
    public static Contact getSingleContact()
    {
        System.debug('getting SingleContact');
        Contact cnt = [Select Id,FirstName,LastName,Title,Phone,Email from Contact where Name != null and Title != null LIMIT 1];
        System.debug('Contact='+ cnt);
        return cnt;     

    }   
}