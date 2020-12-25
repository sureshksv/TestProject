public class Mycontroller {
    
    public string mystring{set;get
    {
        System.debug('U r in 1');
        if(mystring == null)
    		{ 
                 System.debug('U r in 1.1');
                mystring='a';
    		}          
     	return mystring;        
    } 
                          }                                             
    public string getmystring()
    {   System.debug('U r in 2');
        return 'getmystring'; 
    } 
    public string getstringmethod()
    {      
        System.debug('U r in 3');
        if(mystring == null)
        {  
            System.debug('U r in 3.1');
            mystring='b';          
        }    
        return mystring;    
    }
                           
    }