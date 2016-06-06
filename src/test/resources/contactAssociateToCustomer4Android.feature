Feature: test crmlogic contact module

  Background:
    Given baseUri is https://www.fsceshi.com
    
   
  #测试关联客户
  #step1：新增一个客户，得到该客户的客户id
  #step2：新增联系人
  #step3：关联step1中新增的客户
  #step4: 关联该客户后，查看该客户关联的联系人列表，结果中应该包含该联系人的id
  #step5：再解除关联
  #step6：解除关联后，查看该客户关联的联系人列表，结果中不应该再包含该联系人的id
  
  #step1：调用“新增客户”接口，得到该客户的客户id
  Scenario: add one customer
    And let variable "customerName" equal to "Android新增关联联系人" with timeStamp
    And content type is "text/xml; charset=UTF-8"
    #Given request body from file json/addCustomer4Android.json
    Given Android request body "{"M6":"11f5745c04ed49e283d4abd0daf608b3","M4":"","M3":0,"M2":[{"M1":"","M2":1,"M3":{"M1":null,"M2":null,"M3":null},"M4":1,"mMultiImageBeans":null},{"M1":"Name","M2":2,"M3":{"M1":"{(customerName)}","M2":null,"M3":null},"M4":1,"mMultiImageBeans":null}],"M1":""}"
    When the client performs POST request on /FHE/EM1ACRM/Customer/AddCustomer/Android.100028288
    Then response value is 
    Then status code is 200
    Then mobile response xml body contains property "Status" containing String content "0"
    Then mobile response contains "M1"
    Then let variable "CustomerId" equal to mobile jsonPath "M1" value
   
  #step2：新增联系人
  Scenario: add contact with required param Name 
    And let variable "name" equal to "Android新增关联联系人"
    And content type is "text/xml; charset=UTF-8"
    Given Android request body "{"M1":"","M2":[{"M1":"Name","M4":1,"M2":2,"M3":{"M1":"{(name)}"}}],"M3":1,"M7":false}"
    When the client performs POST request on /FHE/EM1ACRM/Contact/AddContact/Android.100028288
    Then response value is 
    Then status code is 200
    Then mobile response xml body contains property "Status" containing String content "0"
    Then mobile response contains "M1"
    Then let variable "ContactId" equal to mobile jsonPath "M1.M1" value
   
  #step3：关联step1中新增的客户 
  Scenario: 关联step1中新增的客户
    Given Android request body "{"M1":"{(ContactId)}","M2":"{(CustomerId)}","M3":true}"
    When the client performs POST request on /FHE/EM1ACRM/Contact/SetAssociateToCustomerStatus/Android.100028288
    Then response value is 
    Then status code is 200
    Then mobile response xml body contains property "Status" containing String content "0"
    
  #step4: 关联该客户后，查看该客户关联的联系人列表，结果中应该包含该联系人的id
  Scenario: 获取客户的联系人列表信息
    Given Android request body "{"M3":10,"M2":0,"M1":"{(CustomerId)}"}"
    When the client performs POST request on /FHE/EM1ACRM/Contact/GetCustomerContactList/Android.100028288
    Then response value is 
    Then status code is 200
    Then mobile response xml body contains property "Status" containing String content "0"
    Then mobile response contains "{(ContactId)}"    
    
  #step5：解除关联step1中新增的客户 
  Scenario: add contact with required param Name 
    Given Android request body "{"M1":"{(ContactId)}","M2":"{(CustomerId)}","M3":false}"
    When the client performs POST request on /FHE/EM1ACRM/Contact/SetAssociateToCustomerStatus/Android.100028288
    Then response value is 
    Then status code is 200
    Then mobile response xml body contains property "Status" containing String content "0"
    
  #step6: 解除关联该客户后，查看该客户关联的联系人列表，结果中不应该包含该联系人的id
  Scenario: 获取客户的联系人列表信息
    Given Android request body "{"M3":10,"M2":0,"M1":"{(CustomerId)}"}"
    When the client performs POST request on /FHE/EM1ACRM/Contact/GetCustomerContactList/Android.100028288
    Then response value is 
    Then status code is 200
    Then mobile response xml body contains property "Status" containing String content "0"
    Then mobile response not contains "{(ContactId)}"    
    
  
  
   