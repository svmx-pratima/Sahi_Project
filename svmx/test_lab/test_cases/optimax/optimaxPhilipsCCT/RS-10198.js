//Validating the expressions set for Dispatch Process Prioritization

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
//Validating Entry Criteria of Dispatch Process
_click(_cell("page1:form1:block1:tab4_lbl"));
//Validating expression Rule P1
_click(_checkbox("page1:form1:block1:tab4block1:j_id408:j_id409:tab4table1:0:j_id413"));
_click(_button("Edit Rule"));
(_assertEqual("Priority",_getSelectedText(_select("page1:form1:block1:tab4block1:PriorityBlkSec:j_id420:j_id421:tab4table2:0:j_id426"))));
(_assertEqual("Priority",_getSelectedText(_select("page1:form1:block1:tab4block1:PriorityBlkSec:j_id420:j_id421:tab4table2:1:j_id426"))));
(_assertEqual("Customer Temperature",_getSelectedText(_select("page1:form1:block1:tab4block1:PriorityBlkSec:j_id420:j_id421:tab4table2:2:j_id426"))));
(_assertEqual("Account Temperature",_getSelectedText(_select("page1:form1:block1:tab4block1:PriorityBlkSec:j_id420:j_id421:tab4table2:3:j_id426"))));
(_assertEqual("Preferred End Time",_getSelectedText(_select("page1:form1:block1:tab4block1:PriorityBlkSec:j_id420:j_id421:tab4table2:4:j_id426"))));
(_assertEqual("Equals",_getSelectedText(_select("page1:form1:block1:tab4block1:PriorityBlkSec:j_id420:j_id421:tab4table2:0:j_id430"))));
(_assertEqual("Equals",_getSelectedText(_select("page1:form1:block1:tab4block1:PriorityBlkSec:j_id420:j_id421:tab4table2:1:j_id430"))));
(_assertEqual("Equals",_getSelectedText(_select("page1:form1:block1:tab4block1:PriorityBlkSec:j_id420:j_id421:tab4table2:2:j_id430"))));
(_assertEqual("Equals",_getSelectedText(_select("page1:form1:block1:tab4block1:PriorityBlkSec:j_id420:j_id421:tab4table2:3:j_id430"))));
(_assertEqual("Less or Equal To",_getSelectedText(_select("page1:form1:block1:tab4block1:PriorityBlkSec:j_id420:j_id421:tab4table2:4:j_id430"))));
(_assertEqual("1-Critical Need",_getValue(_textbox("page1:form1:block1:tab4block1:PriorityBlkSec:j_id420:j_id421:tab4table2:0:j_id434"))));
(_assertEqual("2-System Down",_getValue(_textbox("page1:form1:block1:tab4block1:PriorityBlkSec:j_id420:j_id421:tab4table2:1:j_id434"))));
(_assertEqual("Hot",_getValue(_textbox("page1:form1:block1:tab4block1:PriorityBlkSec:j_id420:j_id421:tab4table2:2:j_id434"))));
(_assertEqual("Hot",_getValue(_textbox("page1:form1:block1:tab4block1:PriorityBlkSec:j_id420:j_id421:tab4table2:3:j_id434"))));
(_assertEqual("TODAY",_getValue(_textbox("page1:form1:block1:tab4block1:PriorityBlkSec:j_id420:j_id421:tab4table2:4:j_id434"))));
(_assertEqual("(1 OR 2) OR (3 OR 4) OR 5",_getValue(_textbox("page1:form1:block1:tab4block1:PriorityBlkSec:j_id442:HdrAdvOption"))));
_click(_button("Cancel"));
//Validating expression Rule P2
_click(_checkbox("page1:form1:block1:tab4block1:j_id408:j_id409:tab4table1:1:j_id413"));
_click(_button("Edit Rule"));
(_assertEqual("Priority",_getSelectedText(_select("page1:form1:block1:tab4block1:PriorityBlkSec:j_id420:j_id421:tab4table2:0:j_id426"))));
(_assertEqual("Customer Temperature",_getSelectedText(_select("page1:form1:block1:tab4block1:PriorityBlkSec:j_id420:j_id421:tab4table2:1:j_id426"))));
(_assertEqual("Account Temperature",_getSelectedText(_select("page1:form1:block1:tab4block1:PriorityBlkSec:j_id420:j_id421:tab4table2:2:j_id426"))));
(_assertEqual("Preferred End Time",_getSelectedText(_select("page1:form1:block1:tab4block1:PriorityBlkSec:j_id420:j_id421:tab4table2:3:j_id426"))));
(_assertEqual("Equals",_getSelectedText(_select("page1:form1:block1:tab4block1:PriorityBlkSec:j_id420:j_id421:tab4table2:0:j_id430"))));
(_assertEqual("Equals",_getSelectedText(_select("page1:form1:block1:tab4block1:PriorityBlkSec:j_id420:j_id421:tab4table2:1:j_id430"))));
(_assertEqual("Equals",_getSelectedText(_select("page1:form1:block1:tab4block1:PriorityBlkSec:j_id420:j_id421:tab4table2:2:j_id430"))));
(_assertEqual("Less or Equal To",_getSelectedText(_select("page1:form1:block1:tab4block1:PriorityBlkSec:j_id420:j_id421:tab4table2:3:j_id430"))));
(_assertEqual("3-System Restricted",_getValue(_textbox("page1:form1:block1:tab4block1:PriorityBlkSec:j_id420:j_id421:tab4table2:0:j_id434"))));
(_assertEqual("warm",_getValue(_textbox("page1:form1:block1:tab4block1:PriorityBlkSec:j_id420:j_id421:tab4table2:1:j_id434"))));
(_assertEqual("warm",_getValue(_textbox("page1:form1:block1:tab4block1:PriorityBlkSec:j_id420:j_id421:tab4table2:2:j_id434"))));
(_assertEqual("TOMORROW",_getValue(_textbox("page1:form1:block1:tab4block1:PriorityBlkSec:j_id420:j_id421:tab4table2:3:j_id434"))));
(_assertEqual("1 OR (2 OR 3) OR 4",_getValue(_textbox("page1:form1:block1:tab4block1:PriorityBlkSec:j_id442:HdrAdvOption"))));
_click(_button("Cancel"));
//Validating expression Rule P2
_click(_checkbox("page1:form1:block1:tab4block1:j_id408:j_id409:tab4table1:2:j_id413"));
_click(_button("Edit Rule"));
(_assertEqual("Priority",_getSelectedText(_select("page1:form1:block1:tab4block1:PriorityBlkSec:j_id420:j_id421:tab4table2:0:j_id426"))));
(_assertEqual("Priority",_getSelectedText(_select("page1:form1:block1:tab4block1:PriorityBlkSec:j_id420:j_id421:tab4table2:1:j_id426"))));
(_assertEqual("Equals",_getSelectedText(_select("page1:form1:block1:tab4block1:PriorityBlkSec:j_id420:j_id421:tab4table2:0:j_id430"))));
(_assertEqual("Equals",_getSelectedText(_select("page1:form1:block1:tab4block1:PriorityBlkSec:j_id420:j_id421:tab4table2:1:j_id430"))));
(_assertEqual("4-Intermittent Problem",_getValue(_textbox("page1:form1:block1:tab4block1:PriorityBlkSec:j_id420:j_id421:tab4table2:0:j_id434"))));
(_assertEqual("5-Scheduled Activity",_getValue(_textbox("page1:form1:block1:tab4block1:PriorityBlkSec:j_id420:j_id421:tab4table2:1:j_id434"))));
(_assertEqual("1 OR 2",_getValue(_textbox("page1:form1:block1:tab4block1:PriorityBlkSec:j_id442:HdrAdvOption"))));
_click(_button("Cancel"));
_click(_cell("page1:form1:block1:tab8_lbl"));
_click(_submit("page1:form1:block1:tab8block1:j_id733:j_id735"));
_log("Dispatch Process Prioritization is as expected");
