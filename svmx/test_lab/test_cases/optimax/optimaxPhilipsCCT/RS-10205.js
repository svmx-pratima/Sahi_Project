//Validating if the WO is assigned to Technician and is Qualified

//Login to SFDC
_navigateTo($url);
_setValue(_emailbox("username"), $User);
_setValue(_password("pw"), $Pwd);
_click(_submit("Log In"));

//Creating a WO,assigning Primary territory and triggering RTO

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
_call(top.location.reload(true));//Refreshing the Page 
_wait(25000);
_call(top.location.reload(true));
//var $WoPrimaryTerritory=_getText(_div("CF00N1N00000KGqDQ_ileinner"));
var $QTLStatus=_getText(_div("00N1N00000KGqDX_ileinner"));
var $QualifiedTechnician=_getText(_div("00N1N00000KGqDY_ileinner"));
var $AssignedTech=_getText(_div("CF00N1N00000KGqCd_ileinner"));

if(($QTLStatus=="" && $QualifiedTechnician=="") && $AssignedTech!="" ){
	_log("A qualified Technician is assigned to the WO. The Tech may change at the time of Dispatch Threshold"); 
}
else{
	_fail("No Qualified Tech available for the WO");
	
}



