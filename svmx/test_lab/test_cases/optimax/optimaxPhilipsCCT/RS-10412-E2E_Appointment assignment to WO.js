//As a Dispatcher, I should be able to select a slot in Appointment Window and assign it to the WO




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
_log("Preferred End Time: "+$PET);
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
_log("StartDate: "+$StartDate);
var $V3=$StartDate.toString().split(" ");
var $EndDate=new Date(_getValue(_textbox("endDate-inputEl")));
_log("EndDate: "+$EndDate);
var $V4=$EndDate.toString().split(" ");
_log("V3: "+$V3);
_log("V4: "+$V4);

for (var $i=0;$i<4;$i++){
	
	if ($V1[$i]==$V3[$i] && $V2[$i]==$V4[$i]){
		_log("Start Date and End Date in AB are as per PST and PET");
		
	}
	else{
		_fail("Start Date and End Date in AB are as Different");
		//_stop();
	}
}	
  
var $Val1=_getText(_div("svmx-grid-cell-inner [1]"));
_log("Val1: "+$Val1.toString().split(" "));
$Val1=$Val1.toString().split(" ");
var $Val6=$Val1[0].substring(0, $Val1[0].indexOf(","));
_log("Val6: "+$Val6);
var $Val2=_getText(_div("svmx-grid-cell-inner [2]"));
_log("Val2: "+$Val2.toString().split("-"));
$Val2=$Val2.toString().split("-");
var $Val7=$Val2[0].substring(0, $Val2[0].indexOf(":"));
if($Val2[0].indexOf("P")<0){
	if((parseInt($Val7,10)+7<10)){
		$Val7="0"+((parseInt($Val7,10)+7)+":00"+":00");
	}
	else{
$Val7=((parseInt($Val7,10)+7)+":00"+":00");
}
}
else{
	$Val7=((parseInt($Val7,10)+19)+":00"+":00");
}
_log("Val7: "+$Val7);
var $Val3=_getText(_div("svmx-grid-cell-inner "));
_log("Val3: "+$Val3);
var $Val4=[$Val6,$Val1[1],$Val1[2],$V3[3],$Val7];
_log("Val4: "+$Val4);
var $Val5= new Date($Val4);
_log("Val5: "+$Val5);
//_getText(_div("svmx-grid-cell-inner"));
_click(_div("svmx-grid-cell-inner "));
_click(_span("Book"));
_click(_span("Yes"));
_click(_span("OK"));
//}
_selectWindow();
//_selectWindow();
//_click(_button("edit"));
//_click(_submit("save"));
_call(top.location.reload(true));
_wait(3000);
var $Val8=_getText(_div("00N1N00000KGqBz_ileinner"));
_log("Val8: "+$Val8);
_log("Val5: "+$Val5);
//_log($Val5.getFullYear());
//_log($Val5.getMonth()); 
//_log($Val8.substring(8,10)==$Val5.getDate()+""+ $Val8.substring(11,13)==$Val5.getHours()+""+ $Val8.substring(14,16)==$Val5.getMinutes()+""+ $Val8.substring(17,19)==$Val5.getSeconds());

/*_log($Val8.substring(21,25)==$Val5.getFullYear() && 
		$Val8.substring(26,28)==($Val5.getMonth()+1)&& 
		$Val8.substring(29,31)==$Val5.getDate()&& 
		$Val8.substring(32,34)==($Val5.getHours()+1)&& 
		$Val8.substring(35,37)==$Val5.getMinutes()&& 
		$Val8.substring(38,40)==$Val5.getSeconds());*/
	if($Val8.substring(0,4)==$Val5.getFullYear() && $Val8.substring(5,7)==($Val5.getMonth()+1)&& $Val8.substring(8,10)==$Val5.getDate()&& $Val8.substring(11,13)==$Val5.getHours()&& $Val8.substring(14,16)==$Val5.getMinutes()&& $Val8.substring(17,19)==$Val5.getSeconds()&& $Val8.substring(21,25)==$Val5.getFullYear() && 
			$Val8.substring(26,28)==($Val5.getMonth()+1)&& 
			$Val8.substring(29,31)==$Val5.getDate()&& 
			$Val8.substring(32,34)==($Val5.getHours()+1)&& 
			$Val8.substring(35,37)==$Val5.getMinutes()&& 
			$Val8.substring(38,40)==$Val5.getSeconds()){
		_log("Promissed Time Slot is correct");
			 }
	else{
		_fail("Promissed Time Slot is not correct");
		//_stop();
	}
	_call(top.location.reload(true));
	_wait(5000);
	var $Val9= (_getText(_div("00N1N00000KGqEq_ileinner")));
	var $Val10=(_getText(_div("CF00N1N00000KGqEH_ileinner")));
	var $Val11=(_getText(_div("CF00N1N00000KGqCd_ileinner")));
	if(($Val9== null) ||($Val10== null) || ($Val11== null))
	{
	_fail("WO not assigned to Technician. Please look into the Wo for Errors or scheduling violations");
	}
	else {
		_log("Appointment Slot picked by WO");
	}
	
	

