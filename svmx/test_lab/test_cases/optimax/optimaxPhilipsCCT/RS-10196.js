//Validating if the Technician assigned to WO has same territory as defined in DP

//Initializing the territory for the Dispatch Process

//Login to SFDC
_navigateTo($url);
_setValue(_emailbox("username"), $User);
_setValue(_password("pw"), $Pwd);
_click(_submit("Log In"));
//Validating invalid user
if(_isVisible(_div("error")) &&_getText(_div("error")) != ""){
	_fail(_getText(_div("error")));
}
else{
//Accessing Dispatch Process
_click(_link("ServiceMax Setup"));
_click(_div("Dispatch Management"));
_click(_div("middle[16]"));
_check(_checkbox("page1:form1:block1:j_id81:j_id82:6:j_id85"));
_click(_submit("Edit"));
_click(_cell("page1:form1:block1:tab3_lbl"));
var $DP_Territory=_getText(_cell("page1:form1:block1:tab3block1:tab3block2:j_id323:0:j_id327"));
_log($DP_Territory);

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

_click(_textbox("00N1N00000KGqDN"));//Dynamic Date Setting
_click(_link("calToday"));
var $ST_Time=new Date(_getText(_textbox("00N1N00000KGqDN")));
//var $Temp=_getText(_textbox("00N1N00000KGqDN")).toString().split(" ");
//_log($Temp[0]);
var $ET=$ST_Time;
$ET.setDate($ET.getDate()+7);
_log($ET);
_log(_getText(_textbox("00N1N00000KGqDN")));
var $AMPM= ($ET.getHours()>=12)? "PM":"AM";
var $hours= $ET.getHours()%12;
$hours=($hours!=0)? $hours:12;
var $V1=($ET.getMonth()+1)+"/"+$ET.getDate()+"/"+$ET.getFullYear()+" "+$hours+":"+$ET.getMinutes() + " " + $AMPM;
_log($V1);
//_setValue(_textbox("00N1N00000KGqDL"), $V1);
	
_setValue(_textbox("00N1N00000KGqDN"), _getText(_textbox("00N1N00000KGqDN")));
_setValue(_textbox("00N1N00000KGqDL"), $V1);
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
var $WoPrimaryTerritory=_getText(_div("CF00N1N00000KGqDQ_ileinner"));

//Navigate to Technician Record
_click(_link(0,_in(_cell("CF00N1N00000KGqCd_ilecell"))));
var $TechTerritory=_getText(_div("CF00N1N00000KGq9Y_ileinner"));
//_log($TechTerritory+"--"+$WoPrimaryTerritory+"--"+$DP_Territory);

if($DP_Territory==$WoPrimaryTerritory && $WoPrimaryTerritory==$TechTerritory && $TechTerritory==$DP_Territory ){
	_log("Technician Picked for RTO belongs to Territory associated to Dispatch Process");
}
else{
	_fail("Technician Picked for RTO does not belong to Assigned Dispatch Process. Please look into Optimizer Transaction record");
	//_break();
}
}