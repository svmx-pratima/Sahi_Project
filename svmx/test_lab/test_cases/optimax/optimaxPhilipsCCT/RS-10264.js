/* WorkOrder should continue to be 
Optimized until the Schedule Status changes to ‘Dispatched’ 
 */
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

//Assigning an appointment
_selectDomain ("/svmx/");
_click(_button("Appointment Booking"));
_selectDomain ();
_selectWindow("Ranked Appointment Booking");
_click(_div("svmx-grid-cell-inner "));
_click(_span("Book"));
_click(_span("Yes"));
_click(_span("OK"));
//Picking the Scheduled Start Date from WO
_selectWindow();
_call(top.location.reload(true));
_wait(3000);
_call(top.location.reload(true));
_wait(25000);
_call(top.location.reload(true));
var $ScheduledStartDate= new Date(_getText(_div("00N1N00000KGqEB_ileinner")));
_log($ScheduledStartDate);
var $CurrentTime=new Date();
_log($CurrentTime);
var $DispatchThresholdTime=new Date($ScheduledStartDate.setHours($ScheduledStartDate.getHours()-3));
_log($DispatchThresholdTime);
var $SchedulingStatus=_getText(_div("00N1N00000KGqEq_ileinner"));
var $ServiceTeam=_getText(_div("CF00N1N00000KGqEH_ileinner"));
var $ServiceTech=_getText(_div("CF00N1N00000KGqCd_ileinner"));
//Validating if the Scheduling Status is set to Dispatched when threshold is reached.

if(($DispatchThresholdTime==$CurrentTime) && ($SchedulingStatus=="Dispatched") && ($ServiceTeam != "") && ($ServiceTech !="")){
	_log("WO has reached Dispatch Threshold. Optimax can no more alter the schedule");
}
/*else{
	_log("WO has not reached the Dispatch Threshold. Optimax can still pick the WO for optimization ");
	
}*/
	
else if(($DispatchThresholdTime==$CurrentTime)&&($SchedulingStatus =="Tentative") && ($ServiceTeam != "") && ($ServiceTech !="")){
	_log("WO has reached Dispatch Threshold. But Scheduling status has not changed. Please validate the WO");
}
else if(($DispatchThresholdTime!=$CurrentTime)&&($SchedulingStatus =="Tentative") && ($ServiceTeam != "") && ($ServiceTech !="")){
	_log("WO has not reached Dispatch Threshold and scheduling is tentative");
}