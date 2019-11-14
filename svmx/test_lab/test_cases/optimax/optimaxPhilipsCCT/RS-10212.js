/*WorkOrder should continue to be Optimized until the Scheduling Status changes to ‘Dispatched’*/
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
var $TentetiveScheduledStartDate= new Date(_getText(_div("00N1N00000KGqEB_ileinner"))).toString().split(" ");
_log($TentetiveScheduledStartDate);
_wait(25000);
_click(_button("edit"));
_setSelected(_select("00N1N00000KGqEq"), "Dispatched");
_click(_submit("save"));
_wait(50000);
_call(top.location.reload(true));
var $FinalScheduledStartStartDate=new Date(_getText(_div("00N1N00000KGqEB_ileinner"))).toString().split(" ");
_log($FinalScheduledStartStartDate);
var $SchedulingStatus=_getText(_div("00N1N00000KGqEq_ileinner"));
for(var $i=0;$i<$TentetiveScheduledStartDate.length;$i++){
if(($TentetiveScheduledStartDate==$FinalScheduledStartStartDate) && ($SchedulingStatus=="Dispatched")){
	_log("Scheduling Status is :"+$FinalScheduledStartStartDate+"\n"+ "The WO will no more be picked by Optimizer");
}
else if(($TentetiveScheduledStartDate!=$FinalScheduledStartStartDate) && ($SchedulingStatus=="Dispatched")){
	_log("Scheduling Status is :"+$FinalScheduledStartStartDate+"\n"+ "The WO Schedule Start Date was optimized before the WO's Scheduling status changed to Dispatched");
}
else{
	_break();
}
}

