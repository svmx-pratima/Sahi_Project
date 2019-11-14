/*OptiMax CCT:Technician tracks the time at which WorkOrder is finished/closed*/

/*OptiMax CCT:Technician tracks the time at which WorkOrder is finished/closed*/
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

//Waiting for Tech Assignment
_selectWindow();
_call(top.location.reload(true));
_wait(3000);
_call(top.location.reload(true));
_wait(25000);
_call(top.location.reload(true));

//Completing the WO and setting the closing time
_doubleClick(_div("00N1N00000KGqDC_ileinner"));
_wait(5000);
_setSelected(_select("00N1N00000KGqDC"),"Completed");
_wait(20000);
_doubleClick(_div("00N1N00000KGqCB_ileinner"));
_setValue(_textbox("00N1N00000KGqCB"),"7/31/2018 1:41 PM" );
_wait(10000);
_click(_button("inlineEditSave"));

var $OrderStatus=_getText(_div("00N1N00000KGqDC_ileinner"));
var $CompletedTime=_getText(_div("00N1N00000KGqCB_ileinner"));
if($OrderStatus=="Completed"&&$CompletedTime!=""){
	_log("Tech could complete the Wo and enter the completed time. Tech ready to pick new WO");
	}
else if($OrderStatus=="Completed"&&$CompletedTime==""){
	_log("WO completed with missing completion date. PLease revist the WO for information");
	_Break();
}

