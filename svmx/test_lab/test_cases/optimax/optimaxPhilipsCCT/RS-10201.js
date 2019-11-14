//Non WorkOrder Hours creation for Tech associated to SFDC user

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
_takePageScreenShot();

//Validating if the Non Working Hours are created as designed
_click(_link("Go to list »"));
//_click(_link("Due Date"));
//_click(_link("Due Date"));
_log("Last Shift Date: "+ _getText(_cell(" dataCell  [1]")));
var $V1=new Date(_getText(_cell(" dataCell  [1]")));
var $yr1 = $V1.toString().split(" ");
_log($V1);	
_log($yr1[2]);	
_log($yr1[3]);						  

_click(_link("Technician/Equipment: Tech-Demo_001"));
//_wait(5000);
_log("Next Shift Date: "+_getText(_div("00N1N00000Op0h2_ileinner")));
var $V2=new Date(_getText(_div("00N1N00000Op0h2_ileinner")));
var $yr2 = $V2.toString().split(" ");
_log($V2);	
_log($yr2[2]);		
_log($yr2[3]);		


if((parseInt($yr1[2])>parseInt($yr2[2]) || parseInt($yr1[2]) == parseInt($yr2[2])) &&(parseInt($yr1[3])>parseInt($yr2[3]) || parseInt($yr1[3]) == parseInt($yr2[3])) )
	{
		
		_fail("Shift Association is not Correct");
	}
	
else{

			_log("Shift Association is Correct");
			_log("Tech Association to Shift successful");
}
		
//teardown of Test Data
_wait(5000);
_expectConfirm("Are you sure?", true);
_click(_button("Delete"));
_assertEqual("Are you sure?", _lastConfirm());
