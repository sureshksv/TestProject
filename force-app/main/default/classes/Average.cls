public class Average {
    public decimal Avgvalue(integer n)
    {
        decimal sum =0;
        for(integer i=0;i<=n;i++)            
        {
            sum=sum+i;
            
            
        }
        decimal average = sum/n;
        return average;
    }

}