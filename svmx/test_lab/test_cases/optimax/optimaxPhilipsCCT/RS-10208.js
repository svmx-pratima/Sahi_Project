//Validating if the Preferred Start and End time in the WO are not null.

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


//Launching Appointment Booking to select a slot
_selectDomain ("/svmx/");
_click(_button("Appointment Booking"));
_selectDomain ();
_selectWindow("Ranked Appointment Booking");
_click(_div("svmx-grid-cell-inner "));
_click(_span("Book"));
_click(_span("Yes"));
_click(_span("OK"));
//Validating if the WO is picked by RTO
_selectWindow();
_call(top.location.reload(true));
//Refreshing the Page 
_wait(25000);
_call(top.location.reload(true));
var $PreferredStartTime=(_getText(_div("00N1N00000KGqDN_ileinner")));
var $PreferredEndTime= (_getText(_div("00N1N00000KGqDL_ileinner")));
if($PreferredStartTime !="" && $PreferredEndTime !=""){
	_log("Preferred Start and End time are available for the WO");
}
else{
	_fail("Preferred Start or End time is not available for the WO");
	//_break();
}