/*Based on the change to booking request date on Work Order to a future date, Optimax engine should automatically reassign the Work Order to the given date*/
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

//Assigning an appointment
_selectDomain ("/svmx/");
_click(_button("Appointment Booking"));
_selectDomain ();
_selectWindow("Ranked Appointment Booking");
_click(_div("svmx-grid-cell-inner "));
_click(_span("Book"));
_click(_span("Yes"));
_click(_span("OK"));

//Waiting for Assignment of Tech
_selectWindow();
_call(top.location.reload(true));
_wait(3000);
_call(top.location.reload(true));
_wait(25000);
_call(top.location.reload(true));
var $InitialStartDate=new Date((_getText(_div("00N1N00000KGqEB_ileinner"))).toString());
_log($InitialStartDate);
/*var $InitialPromiseDate=_getText(_div("00N1N00000KGqBz_ileinner")).toString().split(" ");
_log($InitialPromiseDate);*/
//Changing the PST and PET for a newer booking request date
_doubleClick(_div("00N1N00000KGqDN_ileinner"));
_setValue(_textbox("00N1N00000KGqDN"), $PST_Change);
_doubleClick(_div("00N1N00000KGqDL_ileinner"));
_setValue(_textbox("00N1N00000KGqDL"), $PET_Change);
_click(_button("inlineEditSave"));
_wait(25000);
_call(top.location.reload(true));

//Assigning an appointment
_selectDomain ("/svmx/");
_click(_button("Appointment Booking"));
_selectDomain ();
_selectWindow("Ranked Appointment Booking");
_click(_div("svmx-grid-cell-inner "));
_click(_span("Book"));
_click(_span("Yes"));
_click(_span("OK"));

//Waiting for Assignment of Tech
_selectWindow();
_call(top.location.reload(true));
_wait(3000);
_call(top.location.reload(true));
_wait(25000);
_call(top.location.reload(true));
var $UpdatedStartDate=new Date((_getText(_div("00N1N00000KGqEB_ileinner"))).toString());
_log($UpdatedStartDate);

//Validating if the Start Date changed based on change in PST and PET
//for(var $i=0;$i<=$InitialStartDate.length;$i++){
	if($InitialStartDate!=$UpdatedStartDate){
		_log("A new Start Date is assigned based on change in PST and PET\n" +"Previous Start Date: "+$InitialStartDate+"\n"+ "Updated Start Date: "+$UpdatedStartDate);
	}
	else{
		_log("Start date did not change based on change in PST and PET.Please look into the WO");
		_Break();
	}
	
//}