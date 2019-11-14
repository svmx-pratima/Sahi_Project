//As a Dispatcher, I should be able to View the Appointment Booking Window default to scheduling horizon value if the WO has no PST and PET.

//Login to SFDC
_navigateTo($url);
_setValue(_emailbox("username"), $User);
_setValue(_password("pw"), $Pwd);
_click(_submit("Log In"));

_click(_link("ServiceMax Setup"));
_click(_div("Dispatch Management"));
_click(_div("middle[16]"));
_check(_checkbox("page1:form1:block1:j_id81:j_id82:6:j_id85"));
_click(_submit("Edit"));
_click(_cell("Scheduling"));
var $V6=parseInt(_getText(_textbox("Schedule work orders for")));
_log($V6);

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
//_setValue(_textbox("00N1N00000KGqDN"), $PreferredStartTime);
//_setValue(_textbox("00N1N00000KGqDL"), $PreferredEndTime);
_click(_submit("save"));
       
        /*var $PST=new Date(_getText(_div("00N1N00000KGqDN_ileinner")));
        _log($PST);
        var $PET=new Date(_getText(_div("00N1N00000KGqDL_ileinner")));
        _log($PET);
        var $V1= $PST.toString().split(" ");
        var $V2= $PET.toString().split(" ");
        _log($V1);
        _log($V2);*/
        //Launching AB
        _selectDomain ("/svmx/");
        _click(_button("Appointment Booking"));
        _selectDomain ();
        _selectWindow("Ranked Appointment Booking");
        var $StartDate=new Date(_getValue(_textbox("startDate-inputEl")));
        _log($StartDate);
        var $V3=$StartDate.toString().split(" ");
        var $EndDate=new Date(_getValue(_textbox("endDate-inputEl")));
        _log($EndDate);
        var $V4=$EndDate.toString().split(" ");
        var $V5=new Date();
        var $V8= $V5.toString().split(" ");
        //_log($V5.getDate());
        //_log($V5.getDate()+$V6);
        var $V7=new Date(new Date().setDate(($V5.getDate() +( $V6-1))));//To take today into consideration -1 is used
        var $V9= $V7.toString().split(" ");
        _log("V3: "+$V3);
        _log("V4: "+$V4);
        _log("V8: "+$V8);
        _log("V9: "+$V9);
        for (var $i=0;$i<4;$i++){
        	_log("Test"+ $i);
                if ($V3[$i]==$V8[$i] && $V4[$i]==$V9[$i]){
                    _log("Start Date and End Date in AB are as per scheduled horizon");
					_log(($V3[$i]==$V8[$i] && $V4[$i]==$V9[$i]));
                }
       
                else{
                        _fail("Start Date and End Date in AB are not as per scheduled horizon");
                        //_stop();
                }
        }
        
