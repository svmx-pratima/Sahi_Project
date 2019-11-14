//Validating if the WO field match the Qualifying criteria 

//Login to SFDC
//Login to SFDC
_navigateTo($url);
_setValue(_emailbox("username"), $User);
_setValue(_password("pw"), $Pwd);
_click(_submit("Log In"));
//Creating a WO
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
var $DispatchProcess=_getText(_div("CF00N1N00000KGqCO_ileinner"));
if($DispatchProcess==""){
	_log("Please validate the qualifying criter of the WO for Dispatch Process calculation");
}
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
_call(top.location.reload(true));//Refreshing the Page 
_wait(25000);
_call(top.location.reload(true));
var $DispatchStatus=_getText(_div("00N1N00000KGqCQ_ileinner"));
if($DispatchProcess!="" || $DispatchStatus!=""){
	_log("WO qualifies for the Dispatch Process");
}
else{
	_fail("Please validate the qualifying criter of the WO for Dispatch Process calculation");
	//_break();
}



