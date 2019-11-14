//ServiceManager should be able to access a Tech Record.

//Login to SFDC
_navigateTo($url);
_setValue(_emailbox("username"), $User);
_setValue(_password("pw"), $Pwd);
_click(_submit("Log In"));

//Accessing the Technician record

_click(_link("Technician/Equipment Tab"));
_setSelected(_select("sen"), "Technician/Equipment");
_setValue(_textbox("sbstr"), $TechRecord);
_click(_submit("search"));
_wait(5000);
if ($TechRecord==_getText(_div("Name_ileinner"))){
_log("ServiceManager is able to see the Tech Record in pagelayout");
}
else{
	_fail("ServiceMaxnager unable to access Tech Record");
}

/*
}
}
/*var $V2=$V1.toString().split(" ");
_log($V2);*/
/*_click(_link("BIRRELL DEREK"));
_wait(1000);
var $V3=_getText(_div("BIRRELL DEREK[1]"));*/
/*var $V4=$V3.toString().split(" ");
_log($V4);*/
/*if($V1==$V3){
_log("ServiceManager is able to see the Tech Record in pagelayout");
}
else{
	_log("Revist the Tech Record");
	_takePageScreenShot();
}*/
