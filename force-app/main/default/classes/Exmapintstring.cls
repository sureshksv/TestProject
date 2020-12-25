public class Exmapintstring {
public void exampleofmap()
{
list<string> names=new list<string>{'sri','Dharani','suresh','pujitha'};     //to select length of string and put that string according to the string size
   map<integer,list<string>> m1=new  map<integer,list<string>>();                //converting list into map
   for(string n:names)
   {
       if(m1.containsKey(n.length()))                           //checking in the keymap the size of the lenght of string,if the number is there in map then get it and the put back in map
       {
           list<string> cntList= m1.get(n.length());        //get the key then we will have listof string that is values so assign it to that
           cntList.add(n);                                  //add name of string to herein value 
           m1.put(n.length(),cntList);                     //again send it back as key and value to map.
       }
      else
       {
          list<string> newList=new list<string>();         //if they is no key of the size we want then create new object then add string to that object
           newList.add(n);
           m1.put(n.length(),newList);                  //then put it in value of map and size of it in key.
       }  
   }
system.debug(m1);                                            // now we have all the things in map

   //system.debug('length is ' +m1.keySet() +','+'names  '+    m1.get(names.size()));
set<integer> keys=m1.keySet();                               //for loop of map first get keyset and using key get values of each key
for(integer k:keys){
    list<string> lstSt=m1.get(k);
    lstSt.sort();
    system.debug('length is '+k +','+'names are ' +lstSt);
}
list<list<string>> val=m1.values();                       //is very imp****
for(list<string> s:val)
{
    system.debug('names are' + s);
}

system.debug(m1);
}
}