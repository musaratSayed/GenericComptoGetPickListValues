({
	doInit : function(component, event, helper) {
		
        var action = component.get("c.getPickListValuesIntoList");
        action.setParams({
            objectType:component.get("v.sObjectName"),
            selectedField: component.get("v.fieldName")
        });
        
        action.setCallback(this, function(response){
            var list = response.getReturnValue();
            console.log('response ------ ',list);
            component.set("v.picklistValues",list);
            //console.log('Setting into v.picklistValues: ',component.get("v.picklistValues"));
        })
        $A.enqueueAction(action);
	}
})
