public class Factorial {
    
    public integer factorialnumber(integer n)
    {
         integer retValue=1;
        for(integer i=1;i<=n;i++)
        {
           // givennumber*=i;
            retValue=retValue*i;
        }
        return retValue;
        
    }

}