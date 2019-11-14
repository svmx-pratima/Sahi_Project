/*If Technician is already on-site and able to source the part , dispatcher should allow to continue the workorder execution*/
//Dispatch process entry criteria checks for "part Availability"=True.

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

var $ScheduleStartTime=_getText(_div("00N1N00000KGqEB_ileinner"));
var $ScheduleStatus=_getText(_div("00N1N00000KGqEq_ileinner"));
var $Tech=_getText(_div("CF00N1N00000KGqCd_ileinner"));
_log($ScheduleStartTime+$ScheduleStatus+$Tech);
if($ScheduleStartTime!=""&&$ScheduleStatus!="Cancelled"&&$Tech!=""){
	_log("Dispatcher able to source the parts and assign the WO successfully");
}
else{
	_log("WO could not be assigned to Tech. Please look into the WO");
	_Break();
}

