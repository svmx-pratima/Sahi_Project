//Validating if an error is thrown when a WO is not picked by RTO

//Validating WO's Dispatch Status post RTO


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
var $DispatchStatus=_getText(_div("00N1N00000KGqCQ_ileinner"));
var $OptiMaxStatus= _getText(_div("00N1N00000KGqDA_ileinner"));
var $OptiMaxErrorText=_getText(_div("00N1N00000KGqD8_ileinner"));
if((($DispatchStatus=="New")&& ($OptiMaxErrorText!=""))||($DispatchStatus=="New")&&($OptiMaxStatus=="" || $OptiMaxStatus=="OPT_ERROR")&& ($OptiMaxErrorText!="")){
_log("WO not picked for RTO. Please validate the Error:" + $OptiMaxErrorText);
//_break();
}
else{
	_fail("WO picked for Optimization");
}

	
