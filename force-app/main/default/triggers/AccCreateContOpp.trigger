trigger AccCreateContOpp on Account (after insert) {
   
    AccCreateContOppTriggerHandler.createContactsandOppAfterAccountInsert(trigger.new);
    
   
   
   
}