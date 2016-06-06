Feature: test crmlogic contact module

  Background:
    Given baseUri is https://www.fsceshi.com
    
  #调用“新增联系人”接口，只传了一个必填项name字段
  Scenario: add contact with required param Name 
    And let variable "name" equal to "Hello"
    Given request body "{"CustomerID":"","UDFieldDatas":[{"FieldName":"Name","FieldProperty":1,"FieldType":2,"FieldValue":{"Value":"{(name)}"}}],"Type":1,"AssociateCustomerByCompany":false}"
    When the client performs POST request on /FHH/EM1HCRM/Contact/AddContact
    Then response value is 
    Then status code is 200
    Then response contains property "Result.StatusCode" containing integer content "0"
    Then response contains "ContactID"
    Then let variable "ContactId" equal to property "Value.ContactID" value
   
  #调用“根据联系人id查询联系人详情”接口，判断通过该接口返回的联系人名称name字段，是否和上面新增接口传的name值相等
  Scenario: query contact info after add 
    Given request body "{"ContactID":"{(ContactId)}"}"
    When the client performs POST request on /FHH/EM1HCRM/Contact/GetContactDetailByID
    Then response value is 
    Then status code is 200
    Then response contains property "Result.StatusCode" containing integer content "0"
    Then response contains property "Value.ContactInfo.ContactID" containing phrase "{(ContactId)}"
    Then response contains property "Value.ContactInfo.Name" containing phrase "{(name)}"
    
  #为了获取我的联系人列表，首先要调用一下getUserTable接口，从中得到FilterMainID字段
  Scenario: get FilterMainID value from GetUserTable interface 
    Given request body "{"TableName":"contact","IsLoadManagement":true}"
    #And content type is "application/json"
    When the client performs POST request on /FHH/EM1HEBL/UserTable/GetUserTable
    Then response value is 
    Then status code is 200
    Then response contains property "Result.StatusCode" containing integer content "0"
    #Then response contains property "Value.FilterMains[*].FilterName[0]" containing phrase "我负责的联系人"
    Then response contains "我负责的联系人" 
    Then let variable "FilterMainID" equal to jsonPath "Value.FilterMains[0].FilterMainID" value
   
  #新增联系人后，调用“查看联系人列表”接口，看该接口的返回值中是否含有联系人id（应该含有）
  Scenario: getContactList after add
    #And let variable "pageSize" equal to "20"
    Given request body "{"QueryInfo":{"FilterMainID":"{(FilterMainID)}"},"pageSize":20,"pageNumber":1}"
    #And content type is "application/json"
    When the client performs POST request on /FHH/EM1HCRM/Contact/GetContactList
    Then response value is 
    Then status code is 200
    Then response contains property "Result.StatusCode" containing integer content "0"
    Then response contains property "Value.PagingInfo.PageSize" containing integer content "20"
    Then response contains property "Value.PagingInfo.PageNumber" containing integer content "1"
    Then response contains "{(ContactId)}" 
    
  #新增联系人后，调用“查看工作页获取关联联系人列表-历史记录”接口，  看该接口的返回值中是否含有联系人id（应该含有）
  Scenario: getContactWorkPageList after add--历史记录
    Given request body "{"Keyword":"","CustomerIDs":[],"Type":1,"PageSize":10,"PageNumber":1}"
    When the client performs POST request on /FHH/EM1HCRM/Contact/GetContactWorkPageList
    Then response value is 
    Then status code is 200
    Then response contains property "Result.StatusCode" containing integer content "0"
    Then response contains "{(ContactId)}" 
   
  #新增联系人后，调用“查看工作页获取关联联系人列表-我的联系人”接口，  看该接口的返回值中是否含有联系人id（应该含有）
  Scenario: getContactWorkPageList after add--我的联系人
    Given request body "{"CustomerIDs":[],"Keyword":"","queryType":0,"Type":1,"PageSize":10,"PageNumber":1}"
    When the client performs POST request on /FHH/EM1HCRM/Contact/GetContactWorkPageList
    Then response value is 
    Then status code is 200
    Then response contains property "Result.StatusCode" containing integer content "0"
    #Then response contains "{(ContactId)}" 
    
  #新增联系人后，调用“查看工作页获取关联联系人列表-我下属的联系人”接口，  看该接口的返回值中是否含有联系人id（不应该含有）
  Scenario: getContactWorkPageList after add--我下属的联系人，查不到我新增的联系人
    Given request body "{"CustomerIDs":[],"Keyword":"","queryType":2,"Type":2,"PageSize":10,"PageNumber":1}"
    When the client performs POST request on /FHH/EM1HCRM/Contact/GetContactWorkPageList
    Then response value is 
    Then status code is 200
    Then response contains property "Result.StatusCode" containing integer content "0"
    #Then response body does not contain "{(ContactId)}" 
    
   
  #新增联系人后，调用“修改联系人”接口，  修改该联系人的名字，并加上一个手机号
  Scenario: update contact info after add 
    And let variable "updateName" equal to "HelloUpdate"
    And let variable "telNum" equal to "18900001234"
    Given request body "{"UDFieldDatas":[{"FieldProperty":1,"FieldValue":{"Value":"{(updateName)}"},"FieldName":"Name","FieldType":2},{"FieldProperty":1,"FieldValue":{"Value":"{(telNum)}"},"FieldName":"Tel","FieldType":2}],"ContactID":"{(ContactId)}"}"
    When the client performs POST request on /FHH/EM1HCRM/Contact/UpdateContact
    Then response value is 
    Then status code is 200
    Then response contains property "Result.StatusCode" containing integer content "0"
  
  #修改联系人后，调用“根据联系人id查看联系人信息”接口，  看该接口的返回值得到的
  #1.联系人名字是否与修改联系人时传入的名字相等
  #2.联系人的手机号是否与修改联系人时传入的手机号相等
  Scenario: query contact info after update 
    Given request body "{"ContactID":"{(ContactId)}"}"
    When the client performs POST request on /FHH/EM1HCRM/Contact/GetContactDetailByID
    Then response value is 
    Then status code is 200
    Then response contains property "Result.StatusCode" containing integer content "0"
    Then response contains property "Value.ContactInfo.ContactID" containing phrase "{(ContactId)}"
    Then response contains property "Value.ContactInfo.Name" containing phrase "{(updateName)}"
    Then response contains property "Value.ContactInfo.Tel" containing phrase "{(telNum)}"
       
  #调用“删除联系人”接口，删除成功的话，该接口返回值的statuscode应该为0
  Scenario: delete contact just added 
    Given request body "{"ContactID":"{(ContactId)}"}"
    When the client performs POST request on /FHH/EM1HCRM/Contact/DeleteContact
    Then response value is 
    Then status code is 200
    Then response contains property "Result.StatusCode" containing integer content "0"
  
  #删除联系人后，调用“根据联系人id查询该联系人信息”接口，应该查不到该联系人，
  #验证：1.该接口返回的statuscode为6（业务异常）
  #验证：2.该接口返回的错误信息为“联系人已删除或已更换负责人”
  Scenario: query contact info after delete 
    Given request body "{"ContactID":"{(ContactId)}"}"
    When the client performs POST request on /FHH/EM1HCRM/Contact/GetContactDetailByID
    Then response value is 
    Then status code is 200
    Then response contains property "Result.StatusCode" containing integer content "6"
    Then response contains property "Result.FailureMessage" containing phrase "联系人已删除或已更换负责人"
   
  #删除联系人后，调用“获取联系人列表”接口，验证：返回的结果中不应该再包含刚刚删除的联系人id
  Scenario: getContactList after delete
    #And let variable "pageSize" equal to "20"
    Given request body "{"QueryInfo":{"FilterMainID":"{(FilterMainID)}"},"pageSize":20,"pageNumber":1}"
    When the client performs POST request on /FHH/EM1HCRM/Contact/GetContactList
    Then response value is 
    Then status code is 200
    Then response contains property "Result.StatusCode" containing integer content "0"
    Then response contains property "Value.PagingInfo.PageSize" containing integer content "20"
    Then response contains property "Value.PagingInfo.PageNumber" containing integer content "1"
    #Then response contains property "Value.ContactInfos[*].ContactID" containing phrase "{(name)}"
    Then response body does not contain "{(ContactId)}" 
  
  #删除联系人后，调用“工作页获取关联联系人列表--历史记录”接口，验证：返回的结果中不应该再包含刚刚删除的联系人id
  Scenario: getContactWorkPageList after delete--历史记录
    Given request body "{"Keyword":"","CustomerIDs":[],"Type":1,"PageSize":10,"PageNumber":1}"
    When the client performs POST request on /FHH/EM1HCRM/Contact/GetContactWorkPageList
    Then response value is 
    Then status code is 200
    Then response contains property "Result.StatusCode" containing integer content "0"
    Then response body does not contain "{(ContactId)}" 
  
  #删除联系人后，调用“工作页获取关联联系人列表--我的联系人”接口，验证：返回的结果中不应该再包含刚刚删除的联系人id
  Scenario: getContactWorkPageList after delete--我的联系人
    Given request body "{"CustomerIDs":[],"Keyword":"","queryType":0,"Type":1,"PageSize":10,"PageNumber":1}"
    When the client performs POST request on /FHH/EM1HCRM/Contact/GetContactWorkPageList
    Then response value is 
    Then status code is 200
    Then response contains property "Result.StatusCode" containing integer content "0"
    Then response body does not contain "{(ContactId)}" 
    
  
    
 