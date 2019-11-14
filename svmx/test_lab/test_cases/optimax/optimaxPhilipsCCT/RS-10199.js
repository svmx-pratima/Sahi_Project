//As a user, I should be able to define shift pattern

//Login to SFDC
_navigateTo($url);
_setValue(_emailbox("username"), $User);
_setValue(_password("pw"), $Pwd);
_click(_submit("Log In"));
//Creating a Shift
_click(_image("All Tabs"));
_click(_link("Shift Patterns"));
_click(_button("new"));
_setValue(_textbox("Name"), $ShiftName);
_click(_submit("save"));
_click(_button("new00N1N00000Op0gw"));
_setSelected(_select("00N1N00000Op0iN"), $Week);
//var $V1= _getValue(_select("00N1N00000Op0iN"));
_setValue(_textbox("00N1N00000Op0i6"), $MondayST);
_setValue(_textbox("00N1N00000Op0i5"), $MondayET);
_click(_submit("save"));
_wait(1000);
_click(_link("Auto_Test_Shift_001"));
_wait(1000);
_click(_button("edit"));
_check(_checkbox("00N1N00000Op0iP"));
_click(_submit("save"));
_assertVisible(_link("Edit"));
var $V2=_getText(_tableHeader("Week 1"));
//_log($V1 + $V2);
if ($V2==$Week){
	_log("Shift and Shift-pattern created successfully");
}
else{
	_fail("Shift and Shift-pattern creating Failed");
	_stop();

}
_takeScreenShot();
_log("Test Datacleanup Start");
_expectConfirm("Are you sure?", true);
_click(_button("Delete"));
_assertEqual("Are you sure?", _lastConfirm());
_log("Test Datacleanup end");
//_log("Shift and Shift pattern defined Successfully");