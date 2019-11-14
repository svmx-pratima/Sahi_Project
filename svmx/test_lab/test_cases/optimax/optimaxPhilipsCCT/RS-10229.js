/*Reassign of WO through Optimax Engine */

/*Check if the unavailability is within the 
dispatch process threshold duration of the workorder. 
i.e. if the information for unavailability is known 
within the dispatch threshold window*/

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

//Waiting for Assignment of Tech
_selectWindow();
_call(top.location.reload(true));
_wait(3000);
_call(top.location.reload(true));
_wait(25000);
_call(top.location.reload(true));

//Grabbing Assigned Tech and Scheduled Start Date. 

var $WONumber= _getText(_div("Name_ileinner"));
var $ScheduledStartDate= new Date(_getText(_div("00N1N00000KGqEB_ileinner")));
var $SchedulingStatus=_getText(_div("00N1N00000KGqEq_ileinner"));
var $InitialServiceTech=_getText(_div("CF00N1N00000KGqCd_ileinner"));

//Making the Tech unavailable.
_click(_link(0,_in(_cell("CF00N1N00000KGqCd_ilecell"))));
_doubleClick(_div("00N1N00000KGq94_ileinner"));
_uncheck(_checkbox("00N1N00000KGq94"));
_click(_button("inlineEditSave"));
_wait(75000);
//Navigating back to the WO
_click(_link("Work Orders"));
_setSelected(_select("sen"), "Work Orders");
_setValue(_textbox("sbstr"),$WONumber );
_click(_submit("search"));
_wait(15000);
_call(top.location.reload(true));
var $ReassignedServiceTech=_getText(_div("CF00N1N00000KGqCd_ileinner"));
if(($ReassignedServiceTech!=$InitialServiceTech)&&($SchedulingStatus=="Tentative")){
	_log("Optimax has reassigned the WO to a new Tech. The reassigned Tech: "+$ReassignedServiceTech+"\n"+"Previous Tech: "+$InitialServiceTech);
}
else if(($ReassignedServiceTech==$InitialServiceTech)&&($SchedulingStatus=="Tentative")){
	_log("Please wait for some more time for the tech reassignment");
}

//Very IMP: Resetting the Tech to previous value
_click(_link(0,_in(_cell("CF00N1N00000KGqCd_ilecell"))));
_doubleClick(_div("00N1N00000KGq94_ileinner"));
_check(_checkbox("00N1N00000KGq94"));
_click(_button("inlineEditSave"));
_wait(1000);
_call(top.location.reload(true));
