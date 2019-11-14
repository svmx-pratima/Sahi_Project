//As a user, I should be able to login as Service Manager


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
//Validating if the user logged in is a Service Manager
_click((_div("userNavButton")));
_click(_link("My Settings"));
_click(_span("Personal"));
_click(_link("Advanced User Details"));
var $UserProfile=_getText(_cell("dataCol[2]"));
if($UserProfile=="ServiceMax Service Manager"){
	_log("Logged in user is a ServiceManager");
}
else {
_fail("please login as service manager");
}
}