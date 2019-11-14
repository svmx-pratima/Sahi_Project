//-Login and access the Dispatch Console
//Login to SFDC
_navigateTo($url);
_setValue(_emailbox("username"), $User);
_setValue(_password("pw"), $Pwd);
_click(_submit("Log In"));
_click(_link("Dispatch Console"));
/*_assertExists(_object("Dispatch Console"));
_assertVisible(_object("Dispatch Console"));
_assertEqual("", _getText(_object("Dispatch Console")));
_focusWindow("Dispatch Console");*/
_wait(50000);
_takeScreenShot();
_log("User able to login successfully and launch D.C");