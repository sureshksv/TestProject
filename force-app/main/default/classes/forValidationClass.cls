public with sharing class forValidationClass {
   
    @AuraEnabled(cacheable=true)
    public static list<contact> getCnts() {
       list<contact> cnts= [Select id,firstname,lastname,phone from contact];
       system.debug(cnts); 
       return cnts;      
    }
}
