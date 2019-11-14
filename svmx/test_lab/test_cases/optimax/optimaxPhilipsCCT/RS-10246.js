/*:If WorkOrder for which SLA is at risk is not assigned and not necessarily assign before SLA expiry , then it should be left for Optimax to pick the same for dispatch*/

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

//Validating if the WO is with High SLA.
var $WOPriority=_getText(_div("00N1N00000KGqDR_ileinner"));
var $PST=new Date(_getText(_div("00N1N00000KGqDN_ileinner")));
var $SLATime=new Date($PST.setHours($PST.getHours()-24));
var $Today=new Date();
if($WOPriority=="High" &&($SLATime)<=$Today){
	_log("This is a Priority WO. But Optimax will pick this WO and assign it to a Tech");
}
_wait(10000);
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

_log("The WO is assigned to :"+_getText(_div("CF00N1N00000KGqCd_ileinner")));
_log("The Tentetive Schedule Start Time is : "+_getText(_div("00N1N00000KGqEB_ileinner")));
_log("There may be potential Violations due to SLA: "+_getText(_div("00N1N00000KGqEn_ileinner")));


