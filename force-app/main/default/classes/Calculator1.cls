public class Calculator1 {

    public Integer add(Integer x, Integer y)
    {
       return x+y;
        
    }
    
    
     public Integer addGeneric(List<Integer> addends)
    {       
            
            Integer sum =0;          
            for(integer i = 0; i <addends.size();i++)
            {
                sum=sum+addends[i];
            }
            return sum; 
        
        
      
    }
    
    public Decimal divide(Decimal x, Decimal y)
    {
        return (x / y);
    }
    
    public Integer subtract(Integer x,Integer y )
    {
       return x-y;
    }
    
    public  Decimal circumferanceOfCircle(Decimal radius)
    {
        return 2*Math.PI*radius;
    }
}