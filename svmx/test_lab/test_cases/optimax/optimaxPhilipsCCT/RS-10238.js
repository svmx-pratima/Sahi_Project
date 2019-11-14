/*Based on the cancellation of WorkOrder,Optimax engine should automatically reassign the Work Order to the next available date*/

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
_setValue(_textbox("00N1N00000KGqCs"), $Lat);
_setValue(_textbox("00N1N00000KGqCu"), $Long);
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

//Waiting for Assignment of Tech
_selectWindow();
_call(top.location.reload(true));
_wait(3000);
_call(top.location.reload(true));
_wait(25000);
_call(top.location.reload(true));

//Cancel/Unassign of the WO due to Customer unavailability.

_doubleClick(_div("00N1N00000Op0hB_ileinner"));
_uncheck(_checkbox("00N1N00000Op0hB"));
_doubleClick(_cell("00N1N00000Op0hA_ilecell"));
_setSelected(_select("00N1N00000Op0hA"),"Customer unavailable");
/*_click(_button("inlineEditSave"));
_wait(1000);
_call(top.location.reload(true));*/

//Cancel the Schedule of WO.
_doubleClick(_div("00N1N00000KGqEq_ileinner"));
_setSelected(_select("00N1N00000KGqEq"),"Cancelled");
_click(_button("inlineEditSave"));
_wait(5000);
_call(top.location.reload(true));

//Validation of WO Schedule cancellation
var $ScheduleStartTime=_getText(_div("00N1N00000KGqEB_ileinner"));
var $ScheduleStatus=_getText(_div("00N1N00000KGqEq_ileinner"));
var $Tech=_getText(_div("CF00N1N00000KGqCd_ileinner"));
_log($ScheduleStartTime+$ScheduleStatus+$Tech);
if($ScheduleStartTime==""&&$ScheduleStatus=="Cancelled"&&$Tech==""){
	_log("Due to Customer unavailablity,the schedule is cancelled ");
}
else{
	_log("WO cancellation not possible");
	_Break();
}

//Reschedule the WO for Optimization.
_doubleClick(_div("00N1N00000KGqEq_ileinner"));
_setSelected(_select("00N1N00000KGqEq"), "");
_doubleClick(_div("00N1N00000KGqED_ileinner"));
_setSelected(_setValue(_textbox("00N1N00000KGqED"), ""));
_doubleClick(_div("00N1N00000KGqDN_ileinner"));
_setValue(_textbox("00N1N00000KGqDN"), $PST_Change);
_doubleClick(_div("00N1N00000KGqDL_ileinner"));
_setValue(_textbox("00N1N00000KGqDL"), $PET_Change);
_click(_click(_button("inlineEditSave")));
_wait(20000);

//Re-Assigning an appointment
_selectDomain ("/svmx/");
_click(_button("Appointment Booking"));
_selectDomain ();
_selectWindow("Ranked Appointment Booking");
_click(_div("svmx-grid-cell-inner "));
_click(_span("Book"));
_click(_span("Yes"));
_click(_span("OK"));

//Waiting for Assignment of Tech
_selectWindow();
_call(top.location.reload(true));
_wait(3000);
_call(top.location.reload(true));
_wait(25000);
_call(top.location.reload(true));

var $ScheduleStartTime=_getText(_div("00N1N00000KGqEB_ileinner"));
var $ScheduleStatus=_getText(_div("00N1N00000KGqEq_ileinner"));
var $Tech=_getText(_div("CF00N1N00000KGqCd_ileinner"));
_log($ScheduleStartTime+$ScheduleStatus+$Tech);
if($ScheduleStartTime!=""&&$ScheduleStatus!="Cancelled"&&$Tech!=""){
	_log("WO is rescheduled after being cancelled ");
}
else{
	_log("WO could not be rescheduled post cancellation. Please look into the WO");
	_Break();
}