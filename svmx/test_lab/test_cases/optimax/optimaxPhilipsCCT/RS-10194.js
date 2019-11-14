//As an Admin/Dispatcher, user should be able to edit the technician record successfully

//Login to SFDC
_navigateTo($url);
_setValue(_emailbox("username"), $User);
_setValue(_password("pw"), $Pwd);
_click(_submit("Log In"));

//Creating a Tech Record
_click(_link("Technician/Equipment"));
_click(_button("new"));
_setValue(_textbox("*Service Team"), $ServiceTeam);
_setValue(_textbox("Name"),$MemberName);
_setSelected(_select("00N1N00000KGq9U"), $Role);
_setValue(_textbox("Service Territory"), $ServiceTerritory);
_setValue(_textarea("00N1N00000KGq9a"), $Street);
//_log("Street Address: " + $Street);
//Uncomment Screenshot line of code if needed
//_takeScreenShot(_textarea("00N1N00000KGq9a"));
//var $V1=_getText(_textarea("00N1N00000KGq9a"));
_setValue(_textbox("City"), $City);
_setValue(_textbox("State"), $State);
_setValue(_textbox("*Zip"), $Zip);
_setValue(_textbox("Salesforce User"), $SalesforceUser);
_check(_checkbox("Enable Scheduling"));
_setSelected(_select("00N1N00000KGq9B"),$Country);
_click(_image("Shift Pattern Lookup (New Window)"));
_selectWindow("lookup");
_click(_link("4 on 4 off NS test"));
_selectWindow();
/*_click(_image("Next Shift Pattern Item Lookup (New Window)"));
_selectWindow("lookup");
_click(_link("Item-000039"));
_selectWindow();*/
_setValue(_textbox("CF00N1N00000Op0h3"), $NextShiftPatternItem);
_setValue(_textbox("Next Shift Pattern Date"), $NextShiftPatternDate);
_setValue(_textbox("Working Hours"), $WorkingHours);
_click(_submit("save"));

//Validating if there is a row of Non Work Order Event created when shift is associated.

_assertEqual("Non Working Hours", _getText(_link("Non Working Hours")));
_log(_assertEqual("Non Working Hours", _getText(_link("Non Working Hours"))));
//Uncomment Screenshot line of code if needed;
//_takePageScreenShot();

//Validating if the Non Working Hours are created as designed
_click(_link("Go to list »"));
_click(_link("Due Date"));
_log("Last Shift Date: "+ _getText(_cell(" dataCell  [1]")));
_click(_link("Technician/Equipment: Tech-Demo_001"));
_log("Next Shift Date: "+_getText(_div("00N1N00000Op0h2_ileinner")));
_wait(10000);
//Editing the Tech Record
//Please start performing Steps level execution here.
_click(_button("edit"));
_setValue(_textarea("00N1N00000KGq9a"),$NewStreet);
//_log("Street Address: " + _getText(_textarea("00N1N00000KGq9a")));
//var $V2=_getText(_textarea("00N1N00000KGq9a"));
//Uncomment Screenshot line of code if needed;
//_takeScreenShot(_textarea("00N1N00000KGq9a"));
_click(_submit("save"));
_wait(10000);
if ($Street==$NewStreet){
	_fail("Technician Update Failed");
	//_stop();
}
else
	_log("As an Admin/Dispatcher, I am able to edit the technecian record successfully");
//teardown of Test Data
_wait(15000);
_expectConfirm("Are you sure?", true);
_click(_button("Delete"));
_assertEqual("Are you sure?", _lastConfirm());

