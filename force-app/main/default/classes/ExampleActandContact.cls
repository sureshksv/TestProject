public class ExampleActandContact {
    @AuraEnabled
    public static list<account> fetchRecord(string actname){
        string actnamenew='%'+actname+'%';
       list<account> a=[select name, id, phone, type from Account where name like :actnamenew];
        system.debug('account:' + a);
        return a;
    }
    
     @AuraEnabled
    public static list<account> fetchRecordWithOffset(string actname,Integer offset,Integer noOfRecords){
        string actnamenew='%'+actname+'%';
       list<account> a=[select name, id, phone, type from Account where name like :actnamenew LIMIT :noOfRecords OFFSET :offset];
        system.debug('account:' + a);
        return a;
    }
    
    @AuraEnabled
    public static void deleteAccount(List<Id> ids){
        system.debug('Delete:' + ids);
         Delete [Select id from Account where id=:ids];
    }
    

}