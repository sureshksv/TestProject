global class SxhedulerExample implements Schedulable{

     global void execute(SchedulableContext ctx) {
         
         print();
       System.debug('U r in execute');
    }
    
    public void print()
    {
     System.debug('U r in print');   
    }
    public void printNotUse()
    {
     System.debug('U r in print Notuse');   
    }
}

/*
 * in cntrl+E write
SxhedulerExample ex = new SxhedulerExample();
String sch = '0 0 * 23 11 ? 2019'; //cron settings Seconds Minutes Hours Day_of_month Month Day_of_week Optional_year
system.schedule('TestingSchedule1', sch, ex);


*/