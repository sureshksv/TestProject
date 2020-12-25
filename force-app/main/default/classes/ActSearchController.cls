public class ActSearchController {
    @AuraEnabled
    public static list<account> getAccounts(string srch){
        system.debug('i am in apex 1');
        string sc='%'+srch+'%';
        return [Select id,Name from Account where Name like :sc ];
                
    }

}