$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("contact4Android.feature");
formatter.feature({
  "line": 1,
  "name": "test crmlogic contact module",
  "description": "",
  "id": "test-crmlogic-contact-module",
  "keyword": "Feature"
});
formatter.before({
  "duration": 33870,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "baseUri is https://www.fsceshi.com",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.fsceshi.com",
      "offset": 11
    }
  ],
  "location": "GivenSteps.base_Uri_Is(String)"
});
formatter.result({
  "duration": 1470783,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 6,
      "value": "#调用“新增联系人”接口，只传了一个必填项name字段"
    }
  ],
  "line": 7,
  "name": "add contact with required param Name",
  "description": "",
  "id": "test-crmlogic-contact-module;add-contact-with-required-param-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "let variable \"name\" equal to \"AndroidContact\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "content type is \"text/xml; charset\u003dUTF-8\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Android request body \"{\"M1\":\"\",\"M2\":[{\"M1\":\"Name\",\"M4\":1,\"M2\":2,\"M3\":{\"M1\":\"{(name)}\"}}],\"M3\":1,\"M7\":false}\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "the client performs POST request on https://www.fsceshi.com/FHE/EM1ACRM/Contact/AddContact/Android.100028288",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "response value is",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "mobile response xml body contains property \"Status\" containing String content \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "mobile response contains \"M1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "let variable \"ContactId\" equal to mobile jsonPath \"M1.M1\" value",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 14
    },
    {
      "val": "AndroidContact",
      "offset": 30
    }
  ],
  "location": "GivenSteps.var_assigned(String,String)"
});
formatter.result({
  "duration": 93399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "text/xml; charset\u003dUTF-8",
      "offset": 17
    }
  ],
  "location": "GivenSteps.content_Type(String)"
});
formatter.result({
  "duration": 120084,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "{\"M1\":\"\",\"M2\":[{\"M1\":\"Name\",\"M4\":1,\"M2\":2,\"M3\":{\"M1\":\"{(name)}\"}}],\"M3\":1,\"M7\":false}",
      "offset": 22
    }
  ],
  "location": "GivenSteps.Android_request_Body(String)"
});
formatter.result({
  "duration": 70306,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 20
    },
    {
      "val": "https://www.fsceshi.com/FHE/EM1ACRM/Contact/AddContact/Android.100028288",
      "offset": 36
    }
  ],
  "location": "WhenSteps.perform_Http_Request(String,String)"
});
formatter.result({
  "duration": 113816783,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.getResponseContent()"
});
formatter.result({
  "duration": 286869,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 15
    }
  ],
  "location": "ThenSteps.response_Status_Code_Is(int)"
});
formatter.result({
  "duration": 827764,
  "error_message": "java.lang.NullPointerException\r\n\tat lv.ctco.cukesrest.internal.AssertionFacadeImpl.statusCodeIs(AssertionFacadeImpl.java:78)\r\n\tat lv.ctco.cukesrest.internal.switches.SwitchedByInterceptor.invoke(SwitchedByInterceptor.java:31)\r\n\tat lv.ctco.cukesrest.internal.context.InflateContextInterceptor.invoke(InflateContextInterceptor.java:30)\r\n\tat lv.ctco.cukesrest.api.ThenSteps.response_Status_Code_Is(ThenSteps.java:144)\r\n\tat ✽.Then status code is 200(contact4Android.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Status",
      "offset": 44
    },
    {
      "val": "0",
      "offset": 79
    }
  ],
  "location": "ThenSteps.mobile_response_xml_Body_Contains_Property_With_Content(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "M1",
      "offset": 26
    }
  ],
  "location": "ThenSteps.mobile_response_Body_Contains(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ContactId",
      "offset": 14
    },
    {
      "val": "M1.M1",
      "offset": 51
    }
  ],
  "location": "ThenSteps.var_assigned_fromMobileJsonPath(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 698955,
  "status": "passed"
});
formatter.before({
  "duration": 28738,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "baseUri is https://www.fsceshi.com",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.fsceshi.com",
      "offset": 11
    }
  ],
  "location": "GivenSteps.base_Uri_Is(String)"
});
formatter.result({
  "duration": 98532,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 18,
      "value": "#调用“根据联系人id查询联系人详情”接口，判断通过该接口返回的联系人名称name字段，是否和上面新增接口传的name值相等"
    }
  ],
  "line": 19,
  "name": "query contact info after add",
  "description": "",
  "id": "test-crmlogic-contact-module;query-contact-info-after-add",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "Android request body \"{\"M1\":\"{(ContactId)}\"}\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "content type is \"text/xml; charset\u003dUTF-8\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the client performs POST request on https://www.fsceshi.com/FHE/EM1ACRM/Contact/GetContactInfo/Android.100028288",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "response value is",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "mobile response xml body contains property \"Status\" containing String content \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "mobile response contains property \"M1.M1\" containing String content \"{(ContactId)}\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "mobile response contains property \"M1.M4\" containing String content \"{(name)}\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "{\"M1\":\"{(ContactId)}\"}",
      "offset": 22
    }
  ],
  "location": "GivenSteps.Android_request_Body(String)"
});
formatter.result({
  "duration": 109308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "text/xml; charset\u003dUTF-8",
      "offset": 17
    }
  ],
  "location": "GivenSteps.content_Type(String)"
});
formatter.result({
  "duration": 117006,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 20
    },
    {
      "val": "https://www.fsceshi.com/FHE/EM1ACRM/Contact/GetContactInfo/Android.100028288",
      "offset": 36
    }
  ],
  "location": "WhenSteps.perform_Http_Request(String,String)"
});
formatter.result({
  "duration": 73123945,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.getResponseContent()"
});
formatter.result({
  "duration": 1024313,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 15
    }
  ],
  "location": "ThenSteps.response_Status_Code_Is(int)"
});
formatter.result({
  "duration": 939637,
  "error_message": "java.lang.NullPointerException\r\n\tat lv.ctco.cukesrest.internal.AssertionFacadeImpl.statusCodeIs(AssertionFacadeImpl.java:78)\r\n\tat lv.ctco.cukesrest.internal.switches.SwitchedByInterceptor.invoke(SwitchedByInterceptor.java:31)\r\n\tat lv.ctco.cukesrest.internal.context.InflateContextInterceptor.invoke(InflateContextInterceptor.java:30)\r\n\tat lv.ctco.cukesrest.api.ThenSteps.response_Status_Code_Is(ThenSteps.java:144)\r\n\tat ✽.Then status code is 200(contact4Android.feature:24)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Status",
      "offset": 44
    },
    {
      "val": "0",
      "offset": 79
    }
  ],
  "location": "ThenSteps.mobile_response_xml_Body_Contains_Property_With_Content(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "M1.M1",
      "offset": 35
    },
    {
      "val": "{(ContactId)}",
      "offset": 69
    }
  ],
  "location": "ThenSteps.mobile_response_Body_Contains_Property_With_Content(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "M1.M4",
      "offset": 35
    },
    {
      "val": "{(name)}",
      "offset": 69
    }
  ],
  "location": "ThenSteps.mobile_response_Body_Contains_Property_With_Content(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1810509,
  "status": "passed"
});
formatter.before({
  "duration": 60556,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "baseUri is https://www.fsceshi.com",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.fsceshi.com",
      "offset": 11
    }
  ],
  "location": "GivenSteps.base_Uri_Is(String)"
});
formatter.result({
  "duration": 271987,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 29,
      "value": "#调用“获取我的全部联系人列表”接口，判断通过该接口返回的联系人列表id中是否含有新增联系人的id--必传参数为：updateTime"
    }
  ],
  "line": 30,
  "name": "query GetAllContactListForMobile after add",
  "description": "",
  "id": "test-crmlogic-contact-module;query-getallcontactlistformobile-after-add",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 31,
      "value": "#And let variable \"nowTime\" equal to getSystemTime"
    }
  ],
  "line": 32,
  "name": "content type is \"text/xml; charset\u003dUTF-8\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Android request body \"{\"M1\":1458288496096}\"",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "the client performs POST request on https://www.fsceshi.com/FHE/EM1ACRM/Contact/GetAllContactListForMobile/Android.100028288",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "response value is",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "mobile response xml body contains property \"Status\" containing String content \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "mobile response contains \"{(ContactId)}\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "text/xml; charset\u003dUTF-8",
      "offset": 17
    }
  ],
  "location": "GivenSteps.content_Type(String)"
});
formatter.result({
  "duration": 248894,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "{\"M1\":1458288496096}",
      "offset": 22
    }
  ],
  "location": "GivenSteps.Android_request_Body(String)"
});
formatter.result({
  "duration": 132401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 20
    },
    {
      "val": "https://www.fsceshi.com/FHE/EM1ACRM/Contact/GetAllContactListForMobile/Android.100028288",
      "offset": 36
    }
  ],
  "location": "WhenSteps.perform_Http_Request(String,String)"
});
formatter.result({
  "duration": 90236028,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.getResponseContent()"
});
formatter.result({
  "duration": 374623,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 15
    }
  ],
  "location": "ThenSteps.response_Status_Code_Is(int)"
});
formatter.result({
  "duration": 388993,
  "error_message": "java.lang.NullPointerException\r\n\tat lv.ctco.cukesrest.internal.AssertionFacadeImpl.statusCodeIs(AssertionFacadeImpl.java:78)\r\n\tat lv.ctco.cukesrest.internal.switches.SwitchedByInterceptor.invoke(SwitchedByInterceptor.java:31)\r\n\tat lv.ctco.cukesrest.internal.context.InflateContextInterceptor.invoke(InflateContextInterceptor.java:30)\r\n\tat lv.ctco.cukesrest.api.ThenSteps.response_Status_Code_Is(ThenSteps.java:144)\r\n\tat ✽.Then status code is 200(contact4Android.feature:36)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Status",
      "offset": 44
    },
    {
      "val": "0",
      "offset": 79
    }
  ],
  "location": "ThenSteps.mobile_response_xml_Body_Contains_Property_With_Content(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "{(ContactId)}",
      "offset": 26
    }
  ],
  "location": "ThenSteps.mobile_response_Body_Contains(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 678941,
  "status": "passed"
});
formatter.before({
  "duration": 21040,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "baseUri is https://www.fsceshi.com",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.fsceshi.com",
      "offset": 11
    }
  ],
  "location": "GivenSteps.base_Uri_Is(String)"
});
formatter.result({
  "duration": 101610,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 40,
      "value": "#调用“获取联系人列表（关键字搜索）”接口，看返回的结果中是否含有刚刚新增的联系人"
    }
  ],
  "line": 41,
  "name": "query GetContactWorkPageList after add",
  "description": "",
  "id": "test-crmlogic-contact-module;query-getcontactworkpagelist-after-add",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 42,
      "value": "#And let variable \"nowTime\" equal to getSystemTime"
    }
  ],
  "line": 43,
  "name": "content type is \"text/xml; charset\u003dUTF-8\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Android request body \"{\"M3\":\"{(name)}\",\"M2\":0,\"M5\":2,\"M1\":20}\"",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "the client performs POST request on https://www.fsceshi.com/FHE/EM1ACRM/Contact/GetContactWorkPageList/Android.100028288",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "response value is",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "mobile response xml body contains property \"Status\" containing String content \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "mobile response contains \"{(name)}\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "text/xml; charset\u003dUTF-8",
      "offset": 17
    }
  ],
  "location": "GivenSteps.content_Type(String)"
});
formatter.result({
  "duration": 115980,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "{\"M3\":\"{(name)}\",\"M2\":0,\"M5\":2,\"M1\":20}",
      "offset": 22
    }
  ],
  "location": "GivenSteps.Android_request_Body(String)"
});
formatter.result({
  "duration": 92886,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 20
    },
    {
      "val": "https://www.fsceshi.com/FHE/EM1ACRM/Contact/GetContactWorkPageList/Android.100028288",
      "offset": 36
    }
  ],
  "location": "WhenSteps.perform_Http_Request(String,String)"
});
formatter.result({
  "duration": 72234599,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.getResponseContent()"
});
formatter.result({
  "duration": 268395,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 15
    }
  ],
  "location": "ThenSteps.response_Status_Code_Is(int)"
});
formatter.result({
  "duration": 357175,
  "error_message": "java.lang.NullPointerException\r\n\tat lv.ctco.cukesrest.internal.AssertionFacadeImpl.statusCodeIs(AssertionFacadeImpl.java:78)\r\n\tat lv.ctco.cukesrest.internal.switches.SwitchedByInterceptor.invoke(SwitchedByInterceptor.java:31)\r\n\tat lv.ctco.cukesrest.internal.context.InflateContextInterceptor.invoke(InflateContextInterceptor.java:30)\r\n\tat lv.ctco.cukesrest.api.ThenSteps.response_Status_Code_Is(ThenSteps.java:144)\r\n\tat ✽.Then status code is 200(contact4Android.feature:47)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Status",
      "offset": 44
    },
    {
      "val": "0",
      "offset": 79
    }
  ],
  "location": "ThenSteps.mobile_response_xml_Body_Contains_Property_With_Content(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "{(name)}",
      "offset": 26
    }
  ],
  "location": "ThenSteps.mobile_response_Body_Contains(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 734878,
  "status": "passed"
});
formatter.before({
  "duration": 22580,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "baseUri is https://www.fsceshi.com",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.fsceshi.com",
      "offset": 11
    }
  ],
  "location": "GivenSteps.base_Uri_Is(String)"
});
formatter.result({
  "duration": 145744,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 52,
      "value": "#为了验证他介绍的联系人列表接口，再新增一个联系人，将刚才添加的联系人作为新增联系人的介绍人"
    }
  ],
  "line": 53,
  "name": "add contact with required param Name and other value",
  "description": "",
  "id": "test-crmlogic-contact-module;add-contact-with-required-param-name-and-other-value",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 54,
  "name": "let variable \"newName\" equal to \"ContIntroducer\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "content type is \"text/xml; charset\u003dUTF-8\"",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "Android request body \"{\"M1\":\"\",\"M2\":[{\"M1\":\"Name\",\"M4\":1,\"M2\":2,\"M3\":{\"M1\":\"{(newName)}\",\"M2\":null,\"M3\":null}},{\"M1\":\"Introducer\",\"M2\":2,\"M3\":{\"M1\":\"{(ContactId)}\",\"M2\":null,\"M3\":null},\"M4\":0}],\"M3\":1,\"M7\":false}\"",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "the client performs POST request on https://www.fsceshi.com/FHE/EM1ACRM/Contact/AddContact/Android.100028288",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "response value is",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "mobile response xml body contains property \"Status\" containing String content \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "mobile response contains \"{(newName)}\"",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "mobile response contains \"{(ContactId)}\"",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "let variable \"IntroducerId\" equal to mobile jsonPath \"M1.M1\" value",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "newName",
      "offset": 14
    },
    {
      "val": "ContIntroducer",
      "offset": 33
    }
  ],
  "location": "GivenSteps.var_assigned(String,String)"
});
formatter.result({
  "duration": 174482,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "text/xml; charset\u003dUTF-8",
      "offset": 17
    }
  ],
  "location": "GivenSteps.content_Type(String)"
});
formatter.result({
  "duration": 126756,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "{\"M1\":\"\",\"M2\":[{\"M1\":\"Name\",\"M4\":1,\"M2\":2,\"M3\":{\"M1\":\"{(newName)}\",\"M2\":null,\"M3\":null}},{\"M1\":\"Introducer\",\"M2\":2,\"M3\":{\"M1\":\"{(ContactId)}\",\"M2\":null,\"M3\":null},\"M4\":0}],\"M3\":1,\"M7\":false}",
      "offset": 22
    }
  ],
  "location": "GivenSteps.Android_request_Body(String)"
});
formatter.result({
  "duration": 87754,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 20
    },
    {
      "val": "https://www.fsceshi.com/FHE/EM1ACRM/Contact/AddContact/Android.100028288",
      "offset": 36
    }
  ],
  "location": "WhenSteps.perform_Http_Request(String,String)"
});
formatter.result({
  "duration": 84215880,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.getResponseContent()"
});
formatter.result({
  "duration": 436206,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 15
    }
  ],
  "location": "ThenSteps.response_Status_Code_Is(int)"
});
formatter.result({
  "duration": 609149,
  "error_message": "java.lang.NullPointerException\r\n\tat lv.ctco.cukesrest.internal.AssertionFacadeImpl.statusCodeIs(AssertionFacadeImpl.java:78)\r\n\tat lv.ctco.cukesrest.internal.switches.SwitchedByInterceptor.invoke(SwitchedByInterceptor.java:31)\r\n\tat lv.ctco.cukesrest.internal.context.InflateContextInterceptor.invoke(InflateContextInterceptor.java:30)\r\n\tat lv.ctco.cukesrest.api.ThenSteps.response_Status_Code_Is(ThenSteps.java:144)\r\n\tat ✽.Then status code is 200(contact4Android.feature:59)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Status",
      "offset": 44
    },
    {
      "val": "0",
      "offset": 79
    }
  ],
  "location": "ThenSteps.mobile_response_xml_Body_Contains_Property_With_Content(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "{(newName)}",
      "offset": 26
    }
  ],
  "location": "ThenSteps.mobile_response_Body_Contains(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "{(ContactId)}",
      "offset": 26
    }
  ],
  "location": "ThenSteps.mobile_response_Body_Contains(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "IntroducerId",
      "offset": 14
    },
    {
      "val": "M1.M1",
      "offset": 54
    }
  ],
  "location": "ThenSteps.var_assigned_fromMobileJsonPath(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 898070,
  "status": "passed"
});
formatter.before({
  "duration": 29251,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "baseUri is https://www.fsceshi.com",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.fsceshi.com",
      "offset": 11
    }
  ],
  "location": "GivenSteps.base_Uri_Is(String)"
});
formatter.result({
  "duration": 142152,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 65,
      "value": "#调用刚刚新增的联系人“他介绍的联系人”接口，传入刚刚新增联系人的id，查看该接口返回列表中是否含有第一个新增联系人的id"
    }
  ],
  "line": 66,
  "name": "GetContactIntroducerList",
  "description": "",
  "id": "test-crmlogic-contact-module;getcontactintroducerlist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 67,
  "name": "content type is \"text/xml; charset\u003dUTF-8\"",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "Android request body \"{\"M4\":\"{(NewContactId)}\",\"M3\":0,\"M2\":10,\"M1\":\"\"}\"",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "the client performs POST request on https://www.fsceshi.com/FHE/EM1ACRM/Contact/GetContactIntroducerList/Android.100028288",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "response value is",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "mobile response xml body contains property \"Status\" containing String content \"0\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "text/xml; charset\u003dUTF-8",
      "offset": 17
    }
  ],
  "location": "GivenSteps.content_Type(String)"
});
formatter.result({
  "duration": 177048,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "{\"M4\":\"{(NewContactId)}\",\"M3\":0,\"M2\":10,\"M1\":\"\"}",
      "offset": 22
    }
  ],
  "location": "GivenSteps.Android_request_Body(String)"
});
formatter.result({
  "duration": 70819,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 20
    },
    {
      "val": "https://www.fsceshi.com/FHE/EM1ACRM/Contact/GetContactIntroducerList/Android.100028288",
      "offset": 36
    }
  ],
  "location": "WhenSteps.perform_Http_Request(String,String)"
});
formatter.result({
  "duration": 82725597,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.getResponseContent()"
});
formatter.result({
  "duration": 251973,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 15
    }
  ],
  "location": "ThenSteps.response_Status_Code_Is(int)"
});
formatter.result({
  "duration": 391045,
  "error_message": "java.lang.NullPointerException\r\n\tat lv.ctco.cukesrest.internal.AssertionFacadeImpl.statusCodeIs(AssertionFacadeImpl.java:78)\r\n\tat lv.ctco.cukesrest.internal.switches.SwitchedByInterceptor.invoke(SwitchedByInterceptor.java:31)\r\n\tat lv.ctco.cukesrest.internal.context.InflateContextInterceptor.invoke(InflateContextInterceptor.java:30)\r\n\tat lv.ctco.cukesrest.api.ThenSteps.response_Status_Code_Is(ThenSteps.java:144)\r\n\tat ✽.Then status code is 200(contact4Android.feature:71)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Status",
      "offset": 44
    },
    {
      "val": "0",
      "offset": 79
    }
  ],
  "location": "ThenSteps.mobile_response_xml_Body_Contains_Property_With_Content(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 784143,
  "status": "passed"
});
formatter.before({
  "duration": 143691,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "baseUri is https://www.fsceshi.com",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.fsceshi.com",
      "offset": 11
    }
  ],
  "location": "GivenSteps.base_Uri_Is(String)"
});
formatter.result({
  "duration": 126756,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 73,
      "value": "#Then mobile response contains \"{(ContactId)}\""
    },
    {
      "line": 75,
      "value": "#删除刚刚新增的联系人"
    }
  ],
  "line": 76,
  "name": "delete contact just added",
  "description": "",
  "id": "test-crmlogic-contact-module;delete-contact-just-added",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 77,
  "name": "Android request body \"{\"M1\":\"{(IntroducerId)}\"}\"",
  "keyword": "Given "
});
formatter.step({
  "line": 78,
  "name": "content type is \"text/xml; charset\u003dUTF-8\"",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "the client performs POST request on https://www.fsceshi.com/FHE/EM1ACRM/Contact/DeleteContact/Android.100028288",
  "keyword": "When "
});
formatter.step({
  "line": 80,
  "name": "response value is",
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "mobile response xml body contains property \"Status\" containing String content \"0\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "{\"M1\":\"{(IntroducerId)}\"}",
      "offset": 22
    }
  ],
  "location": "GivenSteps.Android_request_Body(String)"
});
formatter.result({
  "duration": 75438,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "text/xml; charset\u003dUTF-8",
      "offset": 17
    }
  ],
  "location": "GivenSteps.content_Type(String)"
});
formatter.result({
  "duration": 120085,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 20
    },
    {
      "val": "https://www.fsceshi.com/FHE/EM1ACRM/Contact/DeleteContact/Android.100028288",
      "offset": 36
    }
  ],
  "location": "WhenSteps.perform_Http_Request(String,String)"
});
formatter.result({
  "duration": 73629943,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.getResponseContent()"
});
formatter.result({
  "duration": 290462,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 15
    }
  ],
  "location": "ThenSteps.response_Status_Code_Is(int)"
});
formatter.result({
  "duration": 386427,
  "error_message": "java.lang.NullPointerException\r\n\tat lv.ctco.cukesrest.internal.AssertionFacadeImpl.statusCodeIs(AssertionFacadeImpl.java:78)\r\n\tat lv.ctco.cukesrest.internal.switches.SwitchedByInterceptor.invoke(SwitchedByInterceptor.java:31)\r\n\tat lv.ctco.cukesrest.internal.context.InflateContextInterceptor.invoke(InflateContextInterceptor.java:30)\r\n\tat lv.ctco.cukesrest.api.ThenSteps.response_Status_Code_Is(ThenSteps.java:144)\r\n\tat ✽.Then status code is 200(contact4Android.feature:81)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Status",
      "offset": 44
    },
    {
      "val": "0",
      "offset": 79
    }
  ],
  "location": "ThenSteps.mobile_response_xml_Body_Contains_Property_With_Content(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1028418,
  "status": "passed"
});
formatter.before({
  "duration": 22580,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "baseUri is https://www.fsceshi.com",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.fsceshi.com",
      "offset": 11
    }
  ],
  "location": "GivenSteps.base_Uri_Is(String)"
});
formatter.result({
  "duration": 83135,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 85,
      "value": "#新增联系人后，调用“修改联系人”接口，  修改该联系人的名字，并加上一个手机号"
    }
  ],
  "line": 86,
  "name": "update contact info after add",
  "description": "",
  "id": "test-crmlogic-contact-module;update-contact-info-after-add",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 87,
  "name": "let variable \"updateName\" equal to \"HelloAndroid\"",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "let variable \"telNum\" equal to \"18900001234\"",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "content type is \"text/xml; charset\u003dUTF-8\"",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "Android request body \"{\"M2\":[{\"M4\":1,\"M3\":{\"M1\":\"{(updateName)}\",\"M2\":null,\"M3\":null},\"M1\":\"Name\",\"M2\":2},{\"M4\":1,\"M3\":{\"M1\":\"{(telNum)}\",\"M2\":null,\"M3\":null},\"M1\":\"Tel\",\"M2\":2}],\"M1\":\"{(ContactId)}\"}\"",
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "the client performs POST request on https://www.fsceshi.com/FHE/EM1ACRM/Contact/UpdateContact/Android.100028288",
  "keyword": "When "
});
formatter.step({
  "line": 92,
  "name": "response value is",
  "keyword": "Then "
});
formatter.step({
  "line": 93,
  "name": "status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 94,
  "name": "mobile response xml body contains property \"Status\" containing String content \"0\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "updateName",
      "offset": 14
    },
    {
      "val": "HelloAndroid",
      "offset": 36
    }
  ],
  "location": "GivenSteps.var_assigned(String,String)"
});
formatter.result({
  "duration": 379242,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "telNum",
      "offset": 14
    },
    {
      "val": "18900001234",
      "offset": 32
    }
  ],
  "location": "GivenSteps.var_assigned(String,String)"
});
formatter.result({
  "duration": 86215,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "text/xml; charset\u003dUTF-8",
      "offset": 17
    }
  ],
  "location": "GivenSteps.content_Type(String)"
});
formatter.result({
  "duration": 103150,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "{\"M2\":[{\"M4\":1,\"M3\":{\"M1\":\"{(updateName)}\",\"M2\":null,\"M3\":null},\"M1\":\"Name\",\"M2\":2},{\"M4\":1,\"M3\":{\"M1\":\"{(telNum)}\",\"M2\":null,\"M3\":null},\"M1\":\"Tel\",\"M2\":2}],\"M1\":\"{(ContactId)}\"}",
      "offset": 22
    }
  ],
  "location": "GivenSteps.Android_request_Body(String)"
});
formatter.result({
  "duration": 97505,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 20
    },
    {
      "val": "https://www.fsceshi.com/FHE/EM1ACRM/Contact/UpdateContact/Android.100028288",
      "offset": 36
    }
  ],
  "location": "WhenSteps.perform_Http_Request(String,String)"
});
formatter.result({
  "duration": 77146785,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.getResponseContent()"
});
formatter.result({
  "duration": 801078,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 15
    }
  ],
  "location": "ThenSteps.response_Status_Code_Is(int)"
});
formatter.result({
  "duration": 1077171,
  "error_message": "java.lang.NullPointerException\r\n\tat lv.ctco.cukesrest.internal.AssertionFacadeImpl.statusCodeIs(AssertionFacadeImpl.java:78)\r\n\tat lv.ctco.cukesrest.internal.switches.SwitchedByInterceptor.invoke(SwitchedByInterceptor.java:31)\r\n\tat lv.ctco.cukesrest.internal.context.InflateContextInterceptor.invoke(InflateContextInterceptor.java:30)\r\n\tat lv.ctco.cukesrest.api.ThenSteps.response_Status_Code_Is(ThenSteps.java:144)\r\n\tat ✽.Then status code is 200(contact4Android.feature:93)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Status",
      "offset": 44
    },
    {
      "val": "0",
      "offset": 79
    }
  ],
  "location": "ThenSteps.mobile_response_xml_Body_Contains_Property_With_Content(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1821799,
  "status": "passed"
});
formatter.before({
  "duration": 228366,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "baseUri is https://www.fsceshi.com",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.fsceshi.com",
      "offset": 11
    }
  ],
  "location": "GivenSteps.base_Uri_Is(String)"
});
formatter.result({
  "duration": 283790,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 96,
      "value": "#修改联系人后，调用“根据联系人id查看联系人信息”接口，  看该接口的返回值得到的"
    },
    {
      "line": 97,
      "value": "#1.联系人名字是否与修改联系人时传入的名字相等"
    },
    {
      "line": 98,
      "value": "#2.联系人的手机号是否与修改联系人时传入的手机号相等"
    }
  ],
  "line": 99,
  "name": "query contact info after update",
  "description": "",
  "id": "test-crmlogic-contact-module;query-contact-info-after-update",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 100,
  "name": "Android request body \"{\"M1\":\"{(ContactId)}\"}\"",
  "keyword": "Given "
});
formatter.step({
  "line": 101,
  "name": "content type is \"text/xml; charset\u003dUTF-8\"",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "the client performs POST request on https://www.fsceshi.com/FHE/EM1ACRM/Contact/GetContactInfo/Android.100028288",
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "response value is",
  "keyword": "Then "
});
formatter.step({
  "line": 104,
  "name": "status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 105,
  "name": "mobile response xml body contains property \"Status\" containing String content \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 106,
  "name": "mobile response contains property \"M1.M1\" containing String content \"{(ContactId)}\"",
  "keyword": "Then "
});
formatter.step({
  "line": 107,
  "name": "mobile response contains property \"M1.M4\" containing String content \"{(updateName)}\"",
  "keyword": "Then "
});
formatter.step({
  "line": 108,
  "name": "mobile response contains property \"M1.M13\" containing String content \"{(telNum)}\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "{\"M1\":\"{(ContactId)}\"}",
      "offset": 22
    }
  ],
  "location": "GivenSteps.Android_request_Body(String)"
});
formatter.result({
  "duration": 187825,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "text/xml; charset\u003dUTF-8",
      "offset": 17
    }
  ],
  "location": "GivenSteps.content_Type(String)"
});
formatter.result({
  "duration": 255052,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 20
    },
    {
      "val": "https://www.fsceshi.com/FHE/EM1ACRM/Contact/GetContactInfo/Android.100028288",
      "offset": 36
    }
  ],
  "location": "WhenSteps.perform_Http_Request(String,String)"
});
formatter.result({
  "duration": 77655349,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.getResponseContent()"
});
formatter.result({
  "duration": 278145,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 15
    }
  ],
  "location": "ThenSteps.response_Status_Code_Is(int)"
});
formatter.result({
  "duration": 432100,
  "error_message": "java.lang.NullPointerException\r\n\tat lv.ctco.cukesrest.internal.AssertionFacadeImpl.statusCodeIs(AssertionFacadeImpl.java:78)\r\n\tat lv.ctco.cukesrest.internal.switches.SwitchedByInterceptor.invoke(SwitchedByInterceptor.java:31)\r\n\tat lv.ctco.cukesrest.internal.context.InflateContextInterceptor.invoke(InflateContextInterceptor.java:30)\r\n\tat lv.ctco.cukesrest.api.ThenSteps.response_Status_Code_Is(ThenSteps.java:144)\r\n\tat ✽.Then status code is 200(contact4Android.feature:104)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Status",
      "offset": 44
    },
    {
      "val": "0",
      "offset": 79
    }
  ],
  "location": "ThenSteps.mobile_response_xml_Body_Contains_Property_With_Content(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "M1.M1",
      "offset": 35
    },
    {
      "val": "{(ContactId)}",
      "offset": 69
    }
  ],
  "location": "ThenSteps.mobile_response_Body_Contains_Property_With_Content(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "M1.M4",
      "offset": 35
    },
    {
      "val": "{(updateName)}",
      "offset": 69
    }
  ],
  "location": "ThenSteps.mobile_response_Body_Contains_Property_With_Content(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "M1.M13",
      "offset": 35
    },
    {
      "val": "{(telNum)}",
      "offset": 70
    }
  ],
  "location": "ThenSteps.mobile_response_Body_Contains_Property_With_Content(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 636347,
  "status": "passed"
});
formatter.before({
  "duration": 19501,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "baseUri is https://www.fsceshi.com",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.fsceshi.com",
      "offset": 11
    }
  ],
  "location": "GivenSteps.base_Uri_Is(String)"
});
formatter.result({
  "duration": 94426,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 110,
      "value": "#调用“获取联系人列表（关键字搜索）”接口，看返回的结果中是否含有刚刚新增的联系人"
    }
  ],
  "line": 111,
  "name": "query GetContactWorkPageList after add",
  "description": "",
  "id": "test-crmlogic-contact-module;query-getcontactworkpagelist-after-add",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 112,
      "value": "#And let variable \"nowTime\" equal to getSystemTime"
    }
  ],
  "line": 113,
  "name": "content type is \"text/xml; charset\u003dUTF-8\"",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "Android request body \"{\"M3\":\"{(updateName)}\",\"M2\":0,\"M5\":2,\"M1\":20}\"",
  "keyword": "Given "
});
formatter.step({
  "line": 115,
  "name": "the client performs POST request on https://www.fsceshi.com/FHE/EM1ACRM/Contact/GetContactWorkPageList/Android.100028288",
  "keyword": "When "
});
formatter.step({
  "line": 116,
  "name": "response value is",
  "keyword": "Then "
});
formatter.step({
  "line": 117,
  "name": "status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 118,
  "name": "mobile response xml body contains property \"Status\" containing String content \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 119,
  "name": "mobile response contains \"{(updateName)}\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "text/xml; charset\u003dUTF-8",
      "offset": 17
    }
  ],
  "location": "GivenSteps.content_Type(String)"
});
formatter.result({
  "duration": 106229,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "{\"M3\":\"{(updateName)}\",\"M2\":0,\"M5\":2,\"M1\":20}",
      "offset": 22
    }
  ],
  "location": "GivenSteps.Android_request_Body(String)"
});
formatter.result({
  "duration": 56450,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 20
    },
    {
      "val": "https://www.fsceshi.com/FHE/EM1ACRM/Contact/GetContactWorkPageList/Android.100028288",
      "offset": 36
    }
  ],
  "location": "WhenSteps.perform_Http_Request(String,String)"
});
formatter.result({
  "duration": 79233387,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.getResponseContent()"
});
formatter.result({
  "duration": 359228,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 15
    }
  ],
  "location": "ThenSteps.response_Status_Code_Is(int)"
});
formatter.result({
  "duration": 355636,
  "error_message": "java.lang.NullPointerException\r\n\tat lv.ctco.cukesrest.internal.AssertionFacadeImpl.statusCodeIs(AssertionFacadeImpl.java:78)\r\n\tat lv.ctco.cukesrest.internal.switches.SwitchedByInterceptor.invoke(SwitchedByInterceptor.java:31)\r\n\tat lv.ctco.cukesrest.internal.context.InflateContextInterceptor.invoke(InflateContextInterceptor.java:30)\r\n\tat lv.ctco.cukesrest.api.ThenSteps.response_Status_Code_Is(ThenSteps.java:144)\r\n\tat ✽.Then status code is 200(contact4Android.feature:117)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Status",
      "offset": 44
    },
    {
      "val": "0",
      "offset": 79
    }
  ],
  "location": "ThenSteps.mobile_response_xml_Body_Contains_Property_With_Content(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "{(updateName)}",
      "offset": 26
    }
  ],
  "location": "ThenSteps.mobile_response_Body_Contains(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 732312,
  "status": "passed"
});
formatter.before({
  "duration": 29765,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "baseUri is https://www.fsceshi.com",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.fsceshi.com",
      "offset": 11
    }
  ],
  "location": "GivenSteps.base_Uri_Is(String)"
});
formatter.result({
  "duration": 89807,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 121,
      "value": "#调用“删除联系人”接口，删除成功的话，该接口返回值的statuscode应该为0"
    }
  ],
  "line": 122,
  "name": "delete contact just added",
  "description": "",
  "id": "test-crmlogic-contact-module;delete-contact-just-added",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 123,
  "name": "Android request body \"{\"M1\":\"{(ContactId)}\"}\"",
  "keyword": "Given "
});
formatter.step({
  "line": 124,
  "name": "content type is \"text/xml; charset\u003dUTF-8\"",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "the client performs POST request on https://www.fsceshi.com/FHE/EM1ACRM/Contact/DeleteContact/Android.100028288",
  "keyword": "When "
});
formatter.step({
  "line": 126,
  "name": "response value is",
  "keyword": "Then "
});
formatter.step({
  "line": 127,
  "name": "status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 128,
  "name": "mobile response xml body contains property \"Status\" containing String content \"0\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "{\"M1\":\"{(ContactId)}\"}",
      "offset": 22
    }
  ],
  "location": "GivenSteps.Android_request_Body(String)"
});
formatter.result({
  "duration": 72359,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "text/xml; charset\u003dUTF-8",
      "offset": 17
    }
  ],
  "location": "GivenSteps.content_Type(String)"
});
formatter.result({
  "duration": 161652,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 20
    },
    {
      "val": "https://www.fsceshi.com/FHE/EM1ACRM/Contact/DeleteContact/Android.100028288",
      "offset": 36
    }
  ],
  "location": "WhenSteps.perform_Http_Request(String,String)"
});
formatter.result({
  "duration": 79480741,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.getResponseContent()"
});
formatter.result({
  "duration": 297133,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 15
    }
  ],
  "location": "ThenSteps.response_Status_Code_Is(int)"
});
formatter.result({
  "duration": 357689,
  "error_message": "java.lang.NullPointerException\r\n\tat lv.ctco.cukesrest.internal.AssertionFacadeImpl.statusCodeIs(AssertionFacadeImpl.java:78)\r\n\tat lv.ctco.cukesrest.internal.switches.SwitchedByInterceptor.invoke(SwitchedByInterceptor.java:31)\r\n\tat lv.ctco.cukesrest.internal.context.InflateContextInterceptor.invoke(InflateContextInterceptor.java:30)\r\n\tat lv.ctco.cukesrest.api.ThenSteps.response_Status_Code_Is(ThenSteps.java:144)\r\n\tat ✽.Then status code is 200(contact4Android.feature:127)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Status",
      "offset": 44
    },
    {
      "val": "0",
      "offset": 79
    }
  ],
  "location": "ThenSteps.mobile_response_xml_Body_Contains_Property_With_Content(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 654821,
  "status": "passed"
});
formatter.before({
  "duration": 30278,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "baseUri is https://www.fsceshi.com",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.fsceshi.com",
      "offset": 11
    }
  ],
  "location": "GivenSteps.base_Uri_Is(String)"
});
formatter.result({
  "duration": 265828,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 130,
      "value": "#删除联系人后，调用“根据联系人id查询该联系人信息”接口，应该查不到该联系人，"
    },
    {
      "line": 131,
      "value": "#验证：1.该接口返回的statuscode为6（业务异常）"
    },
    {
      "line": 132,
      "value": "#验证：2.该接口返回的错误信息为“联系人已删除或已更换负责人”"
    }
  ],
  "line": 133,
  "name": "query contact info after delete",
  "description": "",
  "id": "test-crmlogic-contact-module;query-contact-info-after-delete",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 134,
  "name": "Android request body \"{\"M1\":\"{(ContactId)}\"}\"",
  "keyword": "Given "
});
formatter.step({
  "line": 135,
  "name": "content type is \"text/xml; charset\u003dUTF-8\"",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "the client performs POST request on https://www.fsceshi.com/FHE/EM1ACRM/Contact/GetContactInfo/Android.100028288",
  "keyword": "When "
});
formatter.step({
  "line": 137,
  "name": "response value is",
  "keyword": "Then "
});
formatter.step({
  "line": 138,
  "name": "status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 139,
  "name": "mobile response xml body contains property \"Status\" containing String content \"6\"",
  "keyword": "Then "
});
formatter.step({
  "line": 140,
  "name": "mobile response xml body contains property \"Msg\" containing String content \"联系人已删除或已更换负责人\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "{\"M1\":\"{(ContactId)}\"}",
      "offset": 22
    }
  ],
  "location": "GivenSteps.Android_request_Body(String)"
});
formatter.result({
  "duration": 201168,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "text/xml; charset\u003dUTF-8",
      "offset": 17
    }
  ],
  "location": "GivenSteps.content_Type(String)"
});
formatter.result({
  "duration": 302265,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 20
    },
    {
      "val": "https://www.fsceshi.com/FHE/EM1ACRM/Contact/GetContactInfo/Android.100028288",
      "offset": 36
    }
  ],
  "location": "WhenSteps.perform_Http_Request(String,String)"
});
formatter.result({
  "duration": 73784410,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.getResponseContent()"
});
formatter.result({
  "duration": 357689,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 15
    }
  ],
  "location": "ThenSteps.response_Status_Code_Is(int)"
});
formatter.result({
  "duration": 472128,
  "error_message": "java.lang.NullPointerException\r\n\tat lv.ctco.cukesrest.internal.AssertionFacadeImpl.statusCodeIs(AssertionFacadeImpl.java:78)\r\n\tat lv.ctco.cukesrest.internal.switches.SwitchedByInterceptor.invoke(SwitchedByInterceptor.java:31)\r\n\tat lv.ctco.cukesrest.internal.context.InflateContextInterceptor.invoke(InflateContextInterceptor.java:30)\r\n\tat lv.ctco.cukesrest.api.ThenSteps.response_Status_Code_Is(ThenSteps.java:144)\r\n\tat ✽.Then status code is 200(contact4Android.feature:138)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Status",
      "offset": 44
    },
    {
      "val": "6",
      "offset": 79
    }
  ],
  "location": "ThenSteps.mobile_response_xml_Body_Contains_Property_With_Content(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Msg",
      "offset": 44
    },
    {
      "val": "联系人已删除或已更换负责人",
      "offset": 76
    }
  ],
  "location": "ThenSteps.mobile_response_xml_Body_Contains_Property_With_Content(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 716916,
  "status": "passed"
});
formatter.before({
  "duration": 24633,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "baseUri is https://www.fsceshi.com",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.fsceshi.com",
      "offset": 11
    }
  ],
  "location": "GivenSteps.base_Uri_Is(String)"
});
formatter.result({
  "duration": 105202,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 142,
      "value": "#调用“获取联系人列表（关键字搜索）”接口，看返回的结果中是否含有刚刚新增的联系人(删除后，应该搜不到了)"
    }
  ],
  "line": 143,
  "name": "query GetContactWorkPageList after delete",
  "description": "",
  "id": "test-crmlogic-contact-module;query-getcontactworkpagelist-after-delete",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 144,
      "value": "#And let variable \"nowTime\" equal to getSystemTime"
    }
  ],
  "line": 145,
  "name": "content type is \"text/xml; charset\u003dUTF-8\"",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "Android request body \"{\"M3\":\"{(updateName)}\",\"M2\":0,\"M5\":2,\"M1\":20}\"",
  "keyword": "Given "
});
formatter.step({
  "line": 147,
  "name": "the client performs POST request on https://www.fsceshi.com/FHE/EM1ACRM/Contact/GetContactWorkPageList/Android.100028288",
  "keyword": "When "
});
formatter.step({
  "line": 148,
  "name": "response value is",
  "keyword": "Then "
});
formatter.step({
  "line": 149,
  "name": "status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 150,
  "name": "mobile response xml body contains property \"Status\" containing String content \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 151,
  "name": "mobile response not contains \"{(updateName)}\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "text/xml; charset\u003dUTF-8",
      "offset": 17
    }
  ],
  "location": "GivenSteps.content_Type(String)"
});
formatter.result({
  "duration": 132914,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "{\"M3\":\"{(updateName)}\",\"M2\":0,\"M5\":2,\"M1\":20}",
      "offset": 22
    }
  ],
  "location": "GivenSteps.Android_request_Body(String)"
});
formatter.result({
  "duration": 69279,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 20
    },
    {
      "val": "https://www.fsceshi.com/FHE/EM1ACRM/Contact/GetContactWorkPageList/Android.100028288",
      "offset": 36
    }
  ],
  "location": "WhenSteps.perform_Http_Request(String,String)"
});
formatter.result({
  "duration": 73021308,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.getResponseContent()"
});
formatter.result({
  "duration": 292001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 15
    }
  ],
  "location": "ThenSteps.response_Status_Code_Is(int)"
});
formatter.result({
  "duration": 381295,
  "error_message": "java.lang.NullPointerException\r\n\tat lv.ctco.cukesrest.internal.AssertionFacadeImpl.statusCodeIs(AssertionFacadeImpl.java:78)\r\n\tat lv.ctco.cukesrest.internal.switches.SwitchedByInterceptor.invoke(SwitchedByInterceptor.java:31)\r\n\tat lv.ctco.cukesrest.internal.context.InflateContextInterceptor.invoke(InflateContextInterceptor.java:30)\r\n\tat lv.ctco.cukesrest.api.ThenSteps.response_Status_Code_Is(ThenSteps.java:144)\r\n\tat ✽.Then status code is 200(contact4Android.feature:149)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Status",
      "offset": 44
    },
    {
      "val": "0",
      "offset": 79
    }
  ],
  "location": "ThenSteps.mobile_response_xml_Body_Contains_Property_With_Content(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "{(updateName)}",
      "offset": 30
    }
  ],
  "location": "ThenSteps.mobile_response_Body_Not_Contains(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1164925,
  "status": "passed"
});
});