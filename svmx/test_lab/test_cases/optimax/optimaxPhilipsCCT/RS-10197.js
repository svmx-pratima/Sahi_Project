//Validating if the entry criteria for Dispatch process is Setup.

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
(_assertEqual("Order Status",_getSelectedText(_select("page1:form1:block1:tab1block1:j_id115:j_id116:tab1table1:0:j_id121"))));
(_assertEqual("Pinned",_getSelectedText(_select("page1:form1:block1:tab1block1:j_id115:j_id116:tab1table1:1:j_id121"))));
(_assertEqual("Skill",_getSelectedText(_select("page1:form1:block1:tab1block1:j_id115:j_id116:tab1table1:2:j_id121"))));
(_assertEqual("Inside Optimax Window",_getSelectedText(_select("page1:form1:block1:tab1block1:j_id115:j_id116:tab1table1:3:j_id121"))));
(_assertEqual("WO Part Dependency Met",_getSelectedText(_select("page1:form1:block1:tab1block1:j_id115:j_id116:tab1table1:4:j_id121"))));
(_assertEqual("Includes",_getSelectedText(_select("page1:form1:block1:tab1block1:j_id115:j_id116:tab1table1:0:j_id125"))));
(_assertEqual("Equals",_getSelectedText(_select("page1:form1:block1:tab1block1:j_id115:j_id116:tab1table1:1:j_id125"))));
(_assertEqual("Not Equal",_getSelectedText(_select("page1:form1:block1:tab1block1:j_id115:j_id116:tab1table1:2:j_id125"))));
(_assertEqual("Equals",_getSelectedText(_select("page1:form1:block1:tab1block1:j_id115:j_id116:tab1table1:3:j_id125"))));
(_assertEqual("Equals",_getSelectedText(_select("page1:form1:block1:tab1block1:j_id115:j_id116:tab1table1:4:j_id125"))));
(_assertEqual("New",_getValue(_textbox("page1:form1:block1:tab1block1:j_id115:j_id116:tab1table1:0:j_id129"))));
(_assertEqual("false",_getValue(_textbox("page1:form1:block1:tab1block1:j_id115:j_id116:tab1table1:1:j_id129"))));
(_assertEqual("",_getValue(_textbox("page1:form1:block1:tab1block1:j_id115:j_id116:tab1table1:2:j_id129"))));
(_assertEqual("true",_getValue(_textbox("page1:form1:block1:tab1block1:j_id115:j_id116:tab1table1:3:j_id129"))));
(_assertEqual("true",_getValue(_textbox("page1:form1:block1:tab1block1:j_id115:j_id116:tab1table1:4:j_id129"))));
(_assertEqual("1 AND 2 AND 3 AND 4 AND 5",_getValue(_textbox("page1:form1:block1:tab1block1:j_id137:HdrAdvOption"))));
_log("Entry criteria for the Dispatch Process is validated");



