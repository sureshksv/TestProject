public class ProgressIndApex {
	
    @AuraEnabled
    public static List<String> getOppPickListValues()
    {
        List<String> pickVals = new List<String>();
        Schema.DescribeFieldResult fieldResult = Opportunity.StageName.getDescribe();
		List<Schema.PicklistEntry> ple = fieldResult.getPicklistValues();
        for( Schema.PicklistEntry f : ple)
   		{
       pickVals.add(f.getLabel());
       }
        System.debug('Values='+pickVals);
    	return pickVals;
    }
}