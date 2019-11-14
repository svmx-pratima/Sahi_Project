/* If WorkOrder is already assigned to Technician for which SLA is at risk and it is OK to continue the execution, then dispatcher should allow the assignment to continue*/

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
_wait(10000);

//Validating if the WO has SLA at risk
var $WOPriority=_getText(_div("00N1N00000KGqDR_ileinner"));
var $PST=new Date(_getText(_div("00N1N00000KGqDN_ileinner")));
var $SLATime=new Date($PST.setHours($PST.getHours()-24));
var $Today=new Date();
if($WOPriority=="High" &&($SLATime)<=$Today){
	_log("This is a Priority WO. Schedule the WO to a Tech");
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
	var $ServiceTech=_getText(_div("CF00N1N00000KGqCd_ileinner"));
	_log("The Schedule Start date is : "+$ScheduledStartDate);
	_log("Assigned Tech is: "+$ServiceTech );
}
else if ($WOPriority=="High" &&($SLATime)>$Today){
	_log("WO will be assiged based on priority");
	_stop();
}
