trigger ChildToParentRelationshipNew on Contact (after update) {
    
    TgrHndlerChildtoParentRelaNew.UpdateAccPhoneWithContactUpdate(trigger.new);
}