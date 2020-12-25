public class callVFsoqlexample {
    public list<account> acclist{get;set;}
   
    public callVFsoqlexample()
    {
        System.debug('U r in VFsoqlexample controller');
       acclist=[select name,phone from account];
    }  
}