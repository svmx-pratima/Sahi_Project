/*If Tech finishes work later ,and has subsequent WorkOrder assigned , and if he/she is allowed to commence work on the subsequent WO
 behind of schedule and complete the service , then conitinue to work on Subsequent WO behind schedule*/


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

//Validating if the Tech can start late"
_doubleClick(_div("00N1N00000KGqEB_ileinner"));
_setValue(_textbox("00N1N00000KGqEB"),$ScheduledStartTime);
_wait(15000);
_click(_button("inlineEditSave"));
_wait(15000);
var $StartTime=new Date(_getText(_div("00N1N00000KGqEB_ileinner")));
_log($StartTime);
var $CurrentTime=new Date();
_log($CurrentTime);
if($CurrentTime>$StartTime){
_log("The Tech has arrived late. But can start working on the WO. There may be constraint violation");
}
else if($CurrentTime<=$StartTime){
	_log("The Tech has arrived at the right time. Will continue working on the WO ");
}
	