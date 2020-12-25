public class InputValidator {
    
    public static boolean isNullExists(List<Integer> lint)
    {
        if(lint.contains(null))
        return false;
        else 
        return true;
    }

}