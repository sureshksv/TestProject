public class AccListOfRecordsApexCont {
    
    @AuraEnabled
    public static List<account> getListAccounts(){
        system.debug('AccListOfRecordsApexCont.getListAccounts() ');
        return [Select id,Name,Website,Industry,Type,Phone from Account];
    }

}