Feature: test crmlogic contact module

  Background:
    Given baseUri is https://www.fsceshi.com
    
   
  #测试关联客户
  #step1：新增一个客户，得到该客户的客户id
  #step2：新增联系人
  #step3：关联step1中新增的客户
  #step4: 关联该客户后，查看该客户关联的联系人列表，结果中应该包含该联系人的id
  
  #step1：调用“新增客户”接口，得到该客户的客户id
  Scenario: add one customer
    And let variable "customerName" equal to "Hello" with timeStamp
    #Given request body from file json/addCustomer.json
    Given request body "{"From":2,"UDFieldDatas":[{"FieldName":"Source","FieldProperty":1,"FieldType":8,"FieldValue":{"Value":"2"}},{"FieldName":"UDSSel1","FieldProperty":2,"FieldType":8,"FieldValue":{"Value":"2"}},{"FieldName":"UDDate3","FieldProperty":2,"FieldType":7,"FieldValue":{"Value":1463587200000}},{"FieldName":"Name","FieldProperty":1,"FieldType":2,"FieldValue":{"Value":"{(customerName)}"}},{"FieldName":"UDInt5","FieldProperty":2,"FieldType":4,"FieldValue":{"Value":"1000"}}]}"
    When the client performs POST request on /FHH/EM1HCRM/Customer/AddCustomer
    Then response value is 
    Then status code is 200
    Then response contains property "Result.StatusCode" containing integer content "0"
    Then let variable "CustomerId" equal to property "Value.CustomerID" value
   
  #step2：新增联系人
  Scenario: add contact with required param Name 
    And let variable "name" equal to "Hello"
    Given request body "{"CustomerID":"","UDFieldDatas":[{"FieldName":"Name","FieldProperty":1,"FieldType":2,"FieldValue":{"Value":"{(name)}"}}],"Type":1,"AssociateCustomerByCompany":false}"
    When the client performs POST request on /FHH/EM1HCRM/Contact/AddContact
    Then response value is 
    Then status code is 200
    Then response contains property "Result.StatusCode" containing integer content "0"
    Then response contains "ContactID"
    Then let variable "ContactId" equal to property "Value.ContactID" value
  
  #step3：关联step1中新增的客户 
  Scenario: 关联step1中新增的客户 
    Given request body "{"ContactID":"{(ContactId)}","CustomerID":"{(CustomerId)}","IsAssociate":true}"
    When the client performs POST request on /FHH/EM1HCRM/Contact/SetAssociateToCustomerStatus
    Then response value is 
    Then status code is 200
    Then response contains property "Result.StatusCode" containing integer content "0"
    
  #step4: 关联该客户后，查看该客户关联的联系人列表，结果中应该包含该联系人的id
  Scenario: 获取客户的联系人列表信息
    Given request body "{"CustomerID":"{(CustomerId)}"}"
    When the client performs POST request on /FHH/EM1HCRM/Contact/GetCustomerContactList
    Then response value is 
    Then status code is 200
    Then response contains property "Result.StatusCode" containing integer content "0"
    Then response contains "{(ContactId)}"    
  
   