public with sharing class WiredActsController {
   @AuraEnabled(cacheable=true)
    public static list<account> getActs() {
       list<account> acts= [Select id,name,phone from account limit 5];
       system.debug(acts); 
       return acts;      
    } 
    @AuraEnabled(cacheable=true)
    public static list<account> getActsByName(string nameToken) {
       string n='%'+nameToken +'%';
       list<account> acts= [Select id,name,phone from account where name like :n];
       system.debug(acts); 
       return acts;      
    }  
    @AuraEnabled(cacheable=true)
    public static list<contact> getCnts() {
       list<contact> cnts= [Select id,name,phone from contact];
       system.debug(cnts); 
       return cnts;      
    }
      
    @AuraEnabled(cacheable=true)
    public static list<account> getActsDataTable() {
       list<account> actsDt= [Select id,name,phone,industry from account];
       system.debug(actsDt); 
       return actsDt;
    }

}
   