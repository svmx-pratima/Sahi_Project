//As a Dispatcher, I should be able to view Appointment Booking Window with default value in Start and End date coinciding with PST(Preferred Start Time) and PET (Preferred END Time)

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


var $PST=new Date(_getText(_div("00N1N00000KGqDN_ileinner")));
_log("Preferred Start Time: "+$PST);
var $PET=new Date(_getText(_div("00N1N00000KGqDL_ileinner")));
_log("Preferred Start Time: "+$PET);
var $V1= $PST.toString().split(" ");
var $V2= $PET.toString().split(" ");
_log("V1: "+$V1);
_log("V2: "+$V2);
//Launching AB
_selectDomain ("/svmx/");
_click(_button("Appointment Booking"));
_selectDomain ();
_selectWindow("Ranked Appointment Booking");

var $StartDate=new Date(_getValue(_textbox("startDate-inputEl")));
_log("Start Date: "+$StartDate);
var $V3=$StartDate.toString().split(" ");
var $EndDate=new Date(_getValue(_textbox("endDate-inputEl")));
_log("EndDate: "+$EndDate);
var $V4=$EndDate.toString().split(" ");
_log("V3: "+$V3);
_log("V4: "+$V4);
//var $i=0;

for (var $i=0;$i<4;$i++){
	
	if ($V1[$i]==$V3[$i] && $V2[$i]==$V4[$i]){
		_log("Start Date and End Date in AB are as per PST and PET");
		
	}
	else{
		_fail("Start Date and End Date in AB are as Different");
		//_stop();
	}
}	
