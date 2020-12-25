trigger AccountTrigger on Account (before insert,before update, after update,after insert) {
    
   
   if(trigger.isBefore){
      if(trigger.isinsert)
    {
       
        system.debug('In before insert');        
         
            system.debug('before insert New Size = '+Trigger.New.size());
            system.debug(Trigger.New);
            
            // system.debug('before insert old Size = '+Trigger.old.size());
            //system.debug(Trigger.old);
        
    }
        else if(trigger.isupdate){
            system.debug('In before update');
            system.debug('before update New Size = '+Trigger.New.size());
            system.debug(Trigger.New);
           
           
            
             system.debug('before update old Size = '+Trigger.old.size());
            system.debug(Trigger.old);
            
        }
}
    else if(trigger.isafter){
       if (trigger.isupdate){
        
          system.debug('In after update');
            system.debug('after update New Size = '+Trigger.New.size());
            system.debug(Trigger.New);
            
             system.debug('after update old Size = '+Trigger.old.size());
            system.debug(Trigger.old);
    }
        else if (trigger.isinsert){
             system.debug('In after insert');        
         
            system.debug('after insert New Size = '+Trigger.New.size());
            system.debug(Trigger.New);
            
             //system.debug('after insert old Size = '+Trigger.old.size());
            //system.debug(Trigger.old);
            
        }
    
    }
    
    
    
    
    
    
    
    
    
    
    /*System.TriggerOperation  ope = Trigger.operationType;
    system.debug(ope);
    switch on ope
    {
        when BEFORE_UPDATE
        {
        system.debug('In before update');
        }
    
        when BEFORE_INSERT
        {
        system.debug('In before insert');
        }
    
    }  */      
        

}