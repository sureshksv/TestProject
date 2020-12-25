trigger AcctDupNamValidator on Account (before update, before insert){
    list<Account> listacc=[select id,name from Account where id Not In :Trigger.new];
    system.debug('Modified/Inserted Size'+listacc.size());
    for(account a : listacc){
        
        for(account atrig : Trigger.new){
            //system.debug('Modified ActId='+a.id+':Name='+a.name+'trigger.new:'+atrig.id+':Name='+atrig.name);
            if(a.name==atrig.name){
                system.debug('Modified ActId='+a.id+':Name='+a.name+'trigger.new:'+atrig.id+':Name='+atrig.name);
                atrig.adderror('No duplicates allowed. ActId='+a.id+'is having the same name('+atrig.name+') as ='+atrig.id);
                    
            }
        }
    }

}