public class AccountApexController {
// is to get record from server side
// for lightening @AuraEnabled and static are compulsory
 
    @AuraEnabled
    public static account getAccountInfo(Id accountid){
        System.debug('U r in apex cntroller'+accountid);
        return [Select id,name,industry,website,type,phone from Account where id=:accountid];
        
    }





}