/*Dispatcher should be able to input required 
 information on WorkOrder based on the failure message and reintroduce the WorkOrder for further optimsation.*/

//Login to SFDC
_navigateTo($url);
_setValue(_emailbox("username"), $User);
_setValue(_password("pw"), $Pwd);
_click(_submit("Log In"));

//Creation of WO
_click(_link("Work Orders"));	
_click(_button(" New "));
_setValue(_textbox("CF00N1N00000KGqC5"), $Case);
_setValue(_textbox("CF00N1N00000KGqCA"), $Account);
_setValue(_textbox("CF00N1N00000KGqCF"), $Contact);
_setValue(_textbox("CF00N1N00000KGqCC"), $Component);
_setValue(_textbox("CF00N1N00000KGqDT"), $Product);
_setSelected(_select("00N1N00000KGqDR"), $Priority);
_uncheck(_checkbox("00N1N00000KGqDv"));//not enabling can start late
_setSelected(_select("00N1N00000KGqDC"), $OrderStatus);
_setValue(_textbox("CF00N1N00000KGqDr"), $AppointmentType);
_setValue(_textbox("CF00N1N00000KGqEL"), $Skill);
_setValue(_textarea("00N1N00000KGqEP"), $Street);
_setValue(_textbox("00N1N00000KGqC6"), $City);
_setSelected(_select("00N1N00000KGqCH"), $Country);
_setValue(_textbox("00N1N00000KGqEs"), $Zip);
_setValue(_textbox("CF00N1N00000KGqDQ"), $PrimaryTerritory);
_setValue(_textbox("00N1N00000KGqDN"), $PreferredStartTime);
_setValue(_textbox("00N1N00000KGqDL"), $PreferredEndTime);
_click(_submit("save"));
_wait(10000);
//Validating if the Wo picked the Dispatch Process
var $DispatchProcess=_getText(_div("CF00N1N00000KGqCO_ileinner"));
var $OptiMaxErrorText=_getText(_div("00N1N00000KGqD8_ileinner"));
//_log($DispatchProcess+$OptiMaxErrorText);
if($DispatchProcess=="" && $OptiMaxErrorText!="" ){
	_log("The WO is not picked for optimization");
	_log("Review the Error text: "+$OptiMaxErrorText);
}
else{
	_fail("WO picked for Optimization.Test Failed");
}
_doubleClick(_div("00N1N00000Op0hK_ileinner"));
_check(_checkbox("00N1N00000Op0hK"));
_click(_button("inlineEditSave"));
_wait(5000);
//Assigning an appointment
_selectDomain ("/svmx/");
_click(_button("Appointment Booking"));
_selectDomain ();
_selectWindow("Ranked Appointment Booking");
_click(_div("svmx-grid-cell-inner "));
_click(_span("Book"));
_click(_span("Yes"));
_click(_span("OK"));

//Waiting for Tech Assignment
_selectWindow();
_call(top.location.reload(true));
_wait(3000);
_call(top.location.reload(true));
_wait(25000);
_call(top.location.reload(true));
var $UpdatedDispatchProcess=_getText(_div("CF00N1N00000KGqCO_ileinner"));
var $UpdatedOptiMaxErrorText=_getText(_div("00N1N00000KGqD8_ileinner"));
if($UpdatedDispatchProcess!=""){
	_log("WO modified to be picked for Optimization");
	_log("Tech Assigned: "+_getText(_div("CF00N1N00000KGqCd_ileinner")));
	_log("Scheduling Status: "+_getText(_div("00N1N00000KGqEq_ileinner")));
	_log("Dispatch Status is : "+_getText(_div("00N1N00000KGqCQ_ileinner")));
	}
else{
	_fail("Dispatch process not assigned to WO. Will not be picked for Optimization");
}
