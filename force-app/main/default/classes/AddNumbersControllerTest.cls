@isTest
private  class AddNumbersControllerTest {
 
    @isTest
    private static void addNumbersSubmitTest()
    {
       addnumberscontroller cntlr = new addnumberscontroller(); 
        cntlr.aval=12;
        cntlr.bval=13;
        test.startTest();
            cntlr.submit();
        test.stopTest();
		
        system.assertEquals(25, cntlr.cval);
        
        
    }
    
     @isTest
    private static void addNumbersResetTest()
    {
       addnumberscontroller cntlr = new addnumberscontroller(); 
        cntlr.aval=12;
        cntlr.bval=13;
        test.startTest();
            cntlr.submit();
        	cntlr.reset();
        test.stopTest();
		
        system.assertEquals(null, cntlr.aval);
        system.assertEquals(null, cntlr.bval);
        system.assertEquals(null, cntlr.cval);
       
        
        
    }
   

}