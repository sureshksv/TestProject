@RestResource(urlMapping='/SureshTest/*')
global with sharing  class ApexRest1 {
    
     @HttpGet
    global static Account getActInfo() {
        //to access this in work bench go to https://workbench.developerforce.com/restExplorer.php 
        //and type /services/apexrest/SureshTest?accountId=0012E0000241DCYQA2 -->any accountid
        //limitation: only one get/post/put per class
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;        
       	String accountId = req.params.get('accountId');
        System.debug('request='+req);
        System.debug('actId='+accountId);       
        Account result = [SELECT Id, Name, Phone, Website FROM Account WHERE Id = :accountId];
        return result;
    }
    
   // @HttpGet
    global static Contact getContactInfo() {
        //to access this in work bench go to https://workbench.developerforce.com/restExplorer.php 
        //and type /services/apexrest/SureshTest/getContactInfo/0032E00002ecENxQAM -->any contactId
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        //String accountId ='0012E0000283DOtQAM';
        String contactId = req.requestURI.substring(req.requestURI.lastIndexOf('/')+1);
        Contact result = [SELECT Id, Name,accountId FROM Contact WHERE Id = :contactId];
        return result;
    }

}