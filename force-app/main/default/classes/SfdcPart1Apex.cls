public class SfdcPart1Apex {
    
    @AuraEnabled
    public static List<Contact> getAllContacts(List<Id> actIds){
        
        System.debug('Account Id = ' +actIds);
        return [select id,name,accountid,lastName,firstName,email,phone from contact where accountId in :actIds];
    }
    
    @AuraEnabled
    public static Boolean updateContacts(List<contact> updatedCnts){
        System.debug('updatedCnts = ' +updatedCnts);
       update updatedCnts;
       return true;
    }
    
     @AuraEnabled
    public static List<Id> getAllContactsLds(List<Id> actIds){
        list<id> lstids =new list<id>();
        //System.debug('Account Id = ' +actIds);
        
        List<Contact> contacts =  [select id from contact where accountId in : actIds];
        for(contact cnt:contacts){
            lstids.add(cnt.id);
        }
        return lstids;
        
    }
    
}