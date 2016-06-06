Feature: test crmlogic contact module

  Background:
    Given baseUri is https://www.fsceshi.com
    
  #调用“新增联系人”接口，只传了一个必填项name字段
  Scenario: add contact with required param Name 
    And let variable "name" equal to "AndroidContact"
    And content type is "text/xml; charset=UTF-8"
    Given Android request body "{"M1":"","M2":[{"M1":"Name","M4":1,"M2":2,"M3":{"M1":"{(name)}"}}],"M3":1,"M7":false}"
    When the client performs POST request on /FHE/EM1ACRM/Contact/AddContact/Android.100028288
    Then response value is 
    Then status code is 200
    Then mobile response xml body contains property "Status" containing String content "0"
    Then mobile response contains "M1"
    Then let variable "ContactId" equal to mobile jsonPath "M1.M1" value
   
  #调用“根据联系人id查询联系人详情”接口，判断通过该接口返回的联系人名称name字段，是否和上面新增接口传的name值相等
  Scenario: query contact info after add 
    Given Android request body "{"M1":"{(ContactId)}"}"
    And content type is "text/xml; charset=UTF-8"
    When the client performs POST request on /FHE/EM1ACRM/Contact/GetContactInfo/Android.100028288
    Then response value is 
    Then status code is 200
    Then mobile response xml body contains property "Status" containing String content "0"
    Then mobile response contains property "M1.M1" containing String content "{(ContactId)}"
    Then mobile response contains property "M1.M4" containing String content "{(name)}"
    
  #调用“获取我的全部联系人列表”接口，判断通过该接口返回的联系人列表id中是否含有新增联系人的id--必传参数为：updateTime
  Scenario: query GetAllContactListForMobile after add 
    #And let variable "nowTime" equal to getSystemTime
    And content type is "text/xml; charset=UTF-8"
    Given Android request body "{"M1":1458288496096}"
    When the client performs POST request on /FHE/EM1ACRM/Contact/GetAllContactListForMobile/Android.100028288
    Then response value is 
    Then status code is 200
    Then mobile response xml body contains property "Status" containing String content "0"
    Then mobile response contains "{(ContactId)}"
    
  #调用“获取联系人列表（关键字搜索）”接口，看返回的结果中是否含有刚刚新增的联系人
  Scenario: query GetContactWorkPageList after add 
    #And let variable "nowTime" equal to getSystemTime
    And content type is "text/xml; charset=UTF-8"
    Given Android request body "{"M3":"{(name)}","M2":0,"M5":2,"M1":20}"
    When the client performs POST request on /FHE/EM1ACRM/Contact/GetContactWorkPageList/Android.100028288
    Then response value is 
    Then status code is 200
    Then mobile response xml body contains property "Status" containing String content "0"
    Then mobile response contains "{(name)}"
    
  
  #为了验证他介绍的联系人列表接口，再新增一个联系人，将刚才添加的联系人作为新增联系人的介绍人
  Scenario: add contact with required param Name and other value 
    And let variable "newName" equal to "ContIntroducer"
    And content type is "text/xml; charset=UTF-8"
    Given Android request body "{"M1":"","M2":[{"M1":"Name","M4":1,"M2":2,"M3":{"M1":"{(newName)}","M2":null,"M3":null}},{"M1":"Introducer","M2":2,"M3":{"M1":"{(ContactId)}","M2":null,"M3":null},"M4":0}],"M3":1,"M7":false}"
    When the client performs POST request on /FHE/EM1ACRM/Contact/AddContact/Android.100028288
    Then response value is 
    Then status code is 200
    Then mobile response xml body contains property "Status" containing String content "0"
    Then mobile response contains "{(newName)}"
    Then mobile response contains "{(ContactId)}"
    Then let variable "IntroducerId" equal to mobile jsonPath "M1.M1" value
    
  #调用刚刚新增的联系人“他介绍的联系人”接口，传入刚刚新增联系人的id，查看该接口返回列表中是否含有第一个新增联系人的id
  Scenario: GetContactIntroducerList
    And content type is "text/xml; charset=UTF-8"
    Given Android request body "{"M4":"{(NewContactId)}","M3":0,"M2":10,"M1":""}"
    When the client performs POST request on /FHE/EM1ACRM/Contact/GetContactIntroducerList/Android.100028288
    Then response value is 
    Then status code is 200
    Then mobile response xml body contains property "Status" containing String content "0"
    #Then mobile response contains "{(ContactId)}"
    
  #删除刚刚新增的联系人
  Scenario: delete contact just added 
    Given Android request body "{"M1":"{(IntroducerId)}"}"
    And content type is "text/xml; charset=UTF-8"
    When the client performs POST request on /FHE/EM1ACRM/Contact/DeleteContact/Android.100028288
    Then response value is 
    Then status code is 200
    Then mobile response xml body contains property "Status" containing String content "0"
        
    
  #新增联系人后，调用“修改联系人”接口，  修改该联系人的名字，并加上一个手机号
  Scenario: update contact info after add 
    And let variable "updateName" equal to "HelloAndroid"
    And let variable "telNum" equal to "18900001234"
    And content type is "text/xml; charset=UTF-8"
    Given Android request body "{"M2":[{"M4":1,"M3":{"M1":"{(updateName)}","M2":null,"M3":null},"M1":"Name","M2":2},{"M4":1,"M3":{"M1":"{(telNum)}","M2":null,"M3":null},"M1":"Tel","M2":2}],"M1":"{(ContactId)}"}"
    When the client performs POST request on /FHE/EM1ACRM/Contact/UpdateContact/Android.100028288
    Then response value is 
    Then status code is 200
    Then mobile response xml body contains property "Status" containing String content "0"
    
  #修改联系人后，调用“根据联系人id查看联系人信息”接口，  看该接口的返回值得到的
  #1.联系人名字是否与修改联系人时传入的名字相等
  #2.联系人的手机号是否与修改联系人时传入的手机号相等
  Scenario: query contact info after update 
    Given Android request body "{"M1":"{(ContactId)}"}"
    And content type is "text/xml; charset=UTF-8"
    When the client performs POST request on /FHE/EM1ACRM/Contact/GetContactInfo/Android.100028288
    Then response value is 
    Then status code is 200
    Then mobile response xml body contains property "Status" containing String content "0"
    Then mobile response contains property "M1.M1" containing String content "{(ContactId)}"
    Then mobile response contains property "M1.M4" containing String content "{(updateName)}"
    Then mobile response contains property "M1.M13" containing String content "{(telNum)}"
  
  #调用“获取联系人列表（关键字搜索）”接口，看返回的结果中是否含有刚刚新增的联系人
  Scenario: query GetContactWorkPageList after add 
    #And let variable "nowTime" equal to getSystemTime
    And content type is "text/xml; charset=UTF-8"
    Given Android request body "{"M3":"{(updateName)}","M2":0,"M5":2,"M1":20}"
    When the client performs POST request on /FHE/EM1ACRM/Contact/GetContactWorkPageList/Android.100028288
    Then response value is 
    Then status code is 200
    Then mobile response xml body contains property "Status" containing String content "0"
    Then mobile response contains "{(updateName)}"
         
  #调用“删除联系人”接口，删除成功的话，该接口返回值的statuscode应该为0
  Scenario: delete contact just added 
    Given Android request body "{"M1":"{(ContactId)}"}"
    And content type is "text/xml; charset=UTF-8"
    When the client performs POST request on /FHE/EM1ACRM/Contact/DeleteContact/Android.100028288
    Then response value is 
    Then status code is 200
    Then mobile response xml body contains property "Status" containing String content "0"
  
  #删除联系人后，调用“根据联系人id查询该联系人信息”接口，应该查不到该联系人，
  #验证：1.该接口返回的statuscode为6（业务异常）
  #验证：2.该接口返回的错误信息为“联系人已删除或已更换负责人”
  Scenario: query contact info after delete 
    Given Android request body "{"M1":"{(ContactId)}"}"
    And content type is "text/xml; charset=UTF-8"
    When the client performs POST request on /FHE/EM1ACRM/Contact/GetContactInfo/Android.100028288
    Then response value is 
    Then status code is 200
    Then mobile response xml body contains property "Status" containing String content "6"
    Then mobile response xml body contains property "Msg" containing String content "联系人已删除或已更换负责人"
  
  #调用“获取联系人列表（关键字搜索）”接口，看返回的结果中是否含有刚刚新增的联系人(删除后，应该搜不到了)
  Scenario: query GetContactWorkPageList after delete 
    #And let variable "nowTime" equal to getSystemTime
    And content type is "text/xml; charset=UTF-8"
    Given Android request body "{"M3":"{(updateName)}","M2":0,"M5":2,"M1":20}"
    When the client performs POST request on /FHE/EM1ACRM/Contact/GetContactWorkPageList/Android.100028288
    Then response value is 
    Then status code is 200
    Then mobile response xml body contains property "Status" containing String content "0"
    Then mobile response not contains "{(updateName)}"
   
    