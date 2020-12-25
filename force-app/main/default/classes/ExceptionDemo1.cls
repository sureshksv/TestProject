public class ExceptionDemo1 {
    public static void  method1(String name)
    {
        System.debug('You are in method1:name='+name);
        method2(name);
    }

    private static void method2(String name)
    {
        System.debug('You are in method2:name='+name);
        method3(name.reverse());
    }
    private  static void method3(String name)
    {
        System.debug('You are in method3:name='+name);
             
    }

}