public class LCalcApexController {
	
    @Auraenabled
    public static decimal addNumbers(decimal firstN, decimal secondN) 
    {
        System.debug('Req came:'+firstN+'::'+secondN);
        return (firstN+secondN);
    }
}