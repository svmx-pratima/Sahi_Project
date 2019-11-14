//Validating the Service duration definition for the WO. 
//PS: MTTS is not utilized by Phillips and so will fall out of scope.

//Capturing the Service duration set in Configuration
//Login to SFDC
_navigateTo($url);
_setValue(_emailbox("username"), $User);
_setValue(_password("pw"), $Pwd);
_click(_submit("Log In"));

_click(_link("ServiceMax Setup"));
_click(_div("Configuration Profiles"));
//Selecting the Active Global Profile and reading the service duration
_click(_checkbox("list_prof:list_prof:GloProf:j_id28:1:org_selected"));
_click(_submit("Edit"));
_setSelected(_select("conf_prof:F_conf_prof:Setting_Block:j_id114:j_id115:Modulelist"),"OptiMax");
_setSelected(_select("conf_prof:F_conf_prof:Setting_Block:j_id114:j_id122:SubModulelist"),"Dispatch Calculations");
if(_getText(_cell("SET004"))=="SET004" && _getText(_cell("Default Service Duration"))== "Default Service Duration" ){
	var $ServiceDuration=parseInt(_getText(_span("conf_prof:F_conf_prof:Setting_Block:j_id132:j_id133:2:j_id162")));
	//_log("ServiceDuration:"+ $ServiceDuration);
	var $InSeconds= (60 * $ServiceDuration);
	//_log($InSeconds);
	var $InSecondsInt=parseInt($InSeconds);
	//_log($InSecondsInt);
}
else {
	_log("Please select the right setting to read Service Duration");
}
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
var $WoServiceDuration=(_getText(_div("00N1N00000KGqEG_ileinner")));
var $$WoServiceDurationToString=$WoServiceDuration.toString();
var $WoServiceDurationToInt=parseInt($$WoServiceDurationToString.replace(",",""));
//_log($WoServiceDurationToInt);
if($WoServiceDurationToInt==$InSecondsInt){
	_log("The Service Duration picked by WO is same as defined in Config Settings");
}
else {
	_fail("Please revisit the config setting and take a look at the value");
	
}



