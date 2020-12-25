trigger noduplicateaccname2 on Account (before insert,before update) {
    Set<String> inpNames=new set<string>();
    for(account a:trigger.new)
    {
       inpNames.add(a.name);
    }
        
        
   list<account> matchedActs=[select id,name from account where name in:inpNames];
    for(account a:matchedActs)
    {
        for(account atrig:trigger.new)
        {
         if( (a.name == atrig.name) && (a.id != atrig.id))
         {
            system.debug('changed name'+a.id +'trigger.new name'+atrig.name);
           atrig.adderror('no duplicate name is needed');
         }
        }  
         
    }

}