public class AccountsingleContro {
    
    @AuraEnabled
    public static account getSingleAcc(Id accId){
                system.debug('u r in apex');

        return [Select Name,Type,Phone,Website from Account where Id=:accId];
    }

}