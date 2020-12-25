public class Exmapintstring2 {
        public void exampleofmap()
        {
           list<account> lstAcc=[select id,name from account];
    //system.debug(lstAcc);
    for(account a:lstAcc)
    {
        system.debug('id = '+a.id +','+'Name='+a.name);
    }
    map<id,account> mapAct= new map<id,account>([select id,name from account]);
    //system.debug(mapAct);
    set<id> keys=mapAct.keySet();
    for(id keyid:keys)                                    //using keys in map to print values in map
    {
        account a=mapAct.get(keyid);
        system.debug('id = '+a.id +','+'Name='+a.name);
    }
    
    list<account> vals=mapAct.values();                      //using values in map
    for(account a:vals)
    {
        
        system.debug('id = '+a.id +','+'Name='+a.name);
    }
     
        }
        
        public void exampleofmapping()
        {
            list<account> lstAcc=[select id,name from account];
    
    map<string,list<account>> mapAct= new map<string,list<account>>();
    
    for(account a:lstAcc)
    {
      if(mapAct.containsKey(a.name))
      {
       list<account> lacc=mapAct.get(a.name); 
          lacc.add(a);
          mapAct.put(a.name,lacc);
      }
        else
      { 
          list<account> lsta=new list<account>();
        lsta.add(a);    
        mapAct.put(a.name,lsta);
      }
        
    }
    system.debug(mapAct);
        }
    
    }