Feature: test crmlogic contact module

  Background:
    Given baseUri is https://www.fsceshi.com
    
  #新增联系人接口
  #验证如下场景： 1)创建联系人（全fields）2)创建联系人（缺少必填项）3)创建联系人（参数异常，未规定的参数，优先级低）
  #调用“新增联系人”接口，传入所有参数
  Scenario: add contact with all params
    Given request body from file json/addContactWithFullParams.json
    When the client performs POST request on /FHH/EM1HCRM/Contact/AddContact
    Then response value is 
    Then response contentType is
    Then status code is 200
    Then response contains property "Result.StatusCode" containing integer content "0"
    Then response contains "ContactID"
    Then let variable "ContactIdWithFullParams" equal to property "Value.ContactID" value
      
  #调用“查看联系人”接口，检查上面Scenario的参数是否正确
  Scenario: query contact info after add 
    Given request body "{"ContactID":"{(ContactIdWithFullParams)}"}"
    When the client performs POST request on /FHH/EM1HCRM/Contact/GetContactDetailByID
    Then response value is 
    Then status code is 200
    Then response contains property "Result.StatusCode" containing integer content "0"
    Then response contains property "Value.ContactInfo.ContactID" containing phrase "{(ContactIdWithFullParams)}"
    Then response contains property "Value.ContactInfo.Name" containing phrase "ContactWithFullParams"
    Then response contains property "Value.ContactInfo.Gender" containing phrase "2"
    Then response contains property "Value.ContactInfo.YearOfBirth" containing integer content "2001"
    Then response contains property "Value.ContactInfo.MonthOfBirth" containing integer content "12"
    Then response contains property "Value.ContactInfo.DayOfBirth" containing integer content "2"
    Then response contains property "Value.ContactInfo.IsKeyPerson" containing integer content "2"
    Then response contains property "Value.ContactInfo.Tel" containing phrase "010-99887766"
    Then response contains property "Value.ContactInfo.Email" containing phrase "aa@qq.com"
    Then response contains property "Value.ContactInfo.Department" containing phrase "Department部门"
    Then response contains property "Value.ContactInfo.Post" containing phrase "Post职务"
    Then response contains property "Value.ContactInfo.Department" containing phrase "Department部门"
    Then response contains property "Value.ContactInfo.Post" containing phrase "Post职务"
    Then response contains property "Value.ContactInfo.Company" containing phrase "Company公司"
    Then response contains property "Value.ContactInfo.Address" containing phrase "address地址"
    Then response contains property "Value.ContactInfo.Remark" containing phrase "备注comment"
    Then response contains property "Value.ContactInfo.BirthDay" containing phrase "2001-12-02"
    Then response contains property "Value.ContactInfo.Mobile" containing phrase "18900001234"

  #调用“删除联系人”接口，删除上面新增的联系人
  Scenario: delete contact just added 
    Given request body "{"ContactID":"{(ContactIdWithFullParams)}"}"
    When the client performs POST request on /FHH/EM1HCRM/Contact/DeleteContact
    Then response value is 
    Then status code is 200
    Then response contains property "Result.StatusCode" containing integer content "0"
  
    
  #调用“新增联系人”接口，传入未规定的参数，会报错
  Scenario: add contact with not allowed params
    Given request body "{"CustomerID11":"","UDFieldData22s":[{"FieldName1":"Name","FieldProperty2":1,"FieldType3":2,"FieldValue4":{"Value":"puretest"}}],"Type5":1,"AssociateCustomerByCompany5":false}"
    When the client performs POST request on /FHH/EM1HCRM/Contact/AddContact
    Then response value is 
    Then status code is 200
    Then response contains property "Result.StatusCode" containing integer content "6"
    Then response contains property "Result.FailureCode" containing integer content "130"
   
  #调用“新增联系人”接口，未传入必填的参数Type，会报错
  Scenario: add contact without Type param
    Given request body "{"CustomerID":"","UDFieldDatas":[{"FieldName":"Name","FieldProperty":1,"FieldType":2,"FieldValue":{"Value":"puretest"}}],"AssociateCustomerByCompany":false}"
    When the client performs POST request on /FHH/EM1HCRM/Contact/AddContact
    Then response value is 
    Then status code is 200
    Then response contains property "Result.StatusCode" containing integer content "6"
    Then response contains property "Result.FailureCode" containing integer content "130"    
     
  #调用“新增联系人”接口，将必填传入的参数Type改为Type5，会报错
  Scenario: add contact with param Type5 instead of Type
    Given request body "{"CustomerID":"","UDFieldDatas":[{"FieldName":"Name","FieldProperty":1,"FieldType":2,"FieldValue":{"Value":"puretest"}}],"Type5":1,"AssociateCustomerByCompany":false}"
    When the client performs POST request on /FHH/EM1HCRM/Contact/AddContact
    Then response value is 
    Then status code is 200
    Then response contains property "Result.StatusCode" containing integer content "6"
    Then response contains property "Result.FailureCode" containing integer content "130"
     
  #调用“新增联系人”接口，必填项Name传人空字符串，会报错
  Scenario: add contact with name null string
    Given request body "{"CustomerID":"","UDFieldDatas":[{"FieldName":"Name","FieldProperty":1,"FieldType":2,"FieldValue":{"Value":""}}],"Type":1,"AssociateCustomerByCompany":false}"
    When the client performs POST request on /FHH/EM1HCRM/Contact/AddContact
    Then response value is 
    Then status code is 200
    Then response contains property "Result.StatusCode" containing integer content "6"
    Then response contains property "Result.FailureCode" containing integer content "0"
    Then response contains property "Result.FailureMessage" containing phrase "请填写[姓名]！"
    
  #删除联系人接口
  # 验证如下异常场景：1)删除不存在的  2)不传联系人ID 3)联系人id传人空字符串  4)联系人ID不属于登录客户
  # 1、删除不存在的联系人
  Scenario: delete not existed contact 
    Given request body "{"ContactID":"addd4fasfb08b3c"}"
    When the client performs POST request on /FHH/EM1HCRM/Contact/DeleteContact
    Then response value is 
    Then status code is 200
    Then response contains property "Result.StatusCode" containing integer content "6"
    Then response contains property "Result.FailureCode" containing integer content "40000010"
    Then response contains property "Result.FailureMessage" containing phrase "联系人不存在或已被删除!"
    
  # 2、删除联系人，不传入联系人id，body传空
  Scenario: delete with no null body
    When the client performs POST request on /FHH/EM1HCRM/Contact/DeleteContact
    Then response value is 
    Then status code is 200
    Then response contains property "Result.StatusCode" containing integer content "6"
    Then response contains property "Result.FailureCode" containing integer content "130"
    Then response contains property "Result.FailureMessage" containing phrase "Required property 'ContactID' not found in JSON"
    
  # 3、删除联系人，联系人id传空字符串
  Scenario: delete contact with null contactId
    Given request body "{"ContactID":""}"
    When the client performs POST request on /FHH/EM1HCRM/Contact/DeleteContact
    Then response value is 
    Then status code is 200
    Then response contains property "Result.StatusCode" containing integer content "6"
    Then response contains property "Result.FailureCode" containing integer content "40000022"
    Then response contains property "Result.FailureMessage" containing phrase "联系人ID不能为空"
   
  # 4、联系人id不属于当前登录用户 ，返回{"Result": {"FailureCode":40000010,"FailureMessage":"联系人不存在或已被删除!","StatusCode":6},"Value": null}
  Scenario: delete contact with null contactId
    Given request body "{"ContactID":"54ff35b518f94e7fba1c1a4acb20f950"}"
    When the client performs POST request on /FHH/EM1HCRM/Contact/DeleteContact
    Then response value is 
    Then status code is 200
    Then response contains property "Result.StatusCode" containing integer content "6"
    Then response contains property "Result.FailureCode" containing integer content "40000010"
    Then response contains property "Result.FailureMessage" containing phrase "联系人不存在或已被删除!"
   
  #获取联系人详情接口
  #验证如下异常情况：1)查看不存在的  2)不传联系人ID 3)联系人id传人空字符串  4)联系人ID不属于当前登录客户
  #1. 获取联系人详情接口，传人不存在的联系人id
  Scenario: query contact info with not existed contactId 
    Given request body "{"ContactID":"addd4fasfb08b3c"}"
    When the client performs POST request on /FHH/EM1HCRM/Contact/GetContactDetailByID
    Then response value is 
    Then status code is 200
    Then response contains property "Result.StatusCode" containing integer content "6"
    Then response contains property "Result.FailureCode" containing integer content "0"
    Then response contains property "Result.FailureMessage" containing phrase "联系人已删除或已更换负责人"
     
  # 2. 获取联系人详情接口，不传入联系人id，body传空
  Scenario: delete with no null body
    When the client performs POST request on /FHH/EM1HCRM/Contact/GetContactDetailByID
    Then response value is 
    Then status code is 200
    Then response contains property "Result.StatusCode" containing integer content "6"
    Then response contains property "Result.FailureCode" containing integer content "130"
    Then response contains property "Result.FailureMessage" containing phrase "Required property 'ContactID' not found in JSON"
    
  # 3. 获取联系人详情接口，联系人id传空字符串
  Scenario: delete contact with null contactId
    Given request body "{"ContactID":""}"
    When the client performs POST request on /FHH/EM1HCRM/Contact/GetContactDetailByID
    Then response value is 
    Then status code is 200
    Then response contains property "Result.StatusCode" containing integer content "6"
    Then response contains property "Result.FailureCode" containing integer content "0"
    Then response contains property "Result.FailureMessage" containing phrase "联系人ID不能为空"
   
  # 4. 获取联系人详情接口，联系人id不属于当前登录用户 ，返回{"Result": {"FailureCode":40000010,"FailureMessage":"联系人已删除或已更换负责人","StatusCode":6},"Value": null}
  Scenario: delete contact with null contactId
    Given request body "{"ContactID":"54ff35b518f94e7fba1c1a4acb20f950"}"
    When the client performs POST request on /FHH/EM1HCRM/Contact/GetContactDetailByID
    Then response value is 
    Then status code is 200
    Then response contains property "Result.StatusCode" containing integer content "6"
    Then response contains property "Result.FailureCode" containing integer content "0"
    Then response contains property "Result.FailureMessage" containing phrase "联系人已删除或已更换负责人"
    
  #获取客户关联联系人列表接口
  #验证如下异常情况：1)查看不存在的  2)不传联系人ID 3)联系人id传人空字符串  4)联系人ID不属于当前登录客户
  # 1、获取客户关联联系人列表接口，客户id为不存在的id
  Scenario: 获取客户关联的联系人列表信息
    Given request body "{"CustomerID":"addd4fasfb08b3c"}"
    When the client performs POST request on /FHH/EM1HCRM/Contact/GetCustomerContactList
    Then response value is 
    Then status code is 200
    Then response contains property "Result.StatusCode" containing integer content "0"
    Then response contains an array "Value.Contacts" of size "0"   
    
  # 2、获取客户关联联系人列表接口，不传入联系人id，body传空
  Scenario: 获取客户关联的联系人列表信息，不传入联系人id，body传空
    When the client performs POST request on /FHH/EM1HCRM/Contact/GetCustomerContactList
    Then response value is 
    Then status code is 200
    Then response contains property "Result.StatusCode" containing integer content "6"
    Then response contains property "Result.FailureCode" containing integer content "130"
    Then response contains property "Result.FailureMessage" containing phrase "Required property 'CustomerID' not found in JSON"
    
  # 3. 获取客户关联联系人列表接口，联系人id传空字符串
  Scenario: getCustomerContactList with null customerId
    Given request body "{"CustomerID":""}"
    When the client performs POST request on /FHH/EM1HCRM/Contact/GetCustomerContactList
    Then response value is 
    Then status code is 200
    Then response contains property "Result.StatusCode" containing integer content "0"
    Then response contains property "Result.FailureCode" containing integer content "0"
    Then response contains an array "Value.Contacts" of size "0"   
    
  # 4. 获取客户关联联系人列表接口，联系人id不属于当前登录用户 ，返回{"Result": {"FailureCode":0,"StatusCode":0},"Value": {"Contacts":[]}}
  Scenario: getCustomerContactList with the other user's customerId
    Given request body "{"CustomerID":"f50ecde9bbf845e3b6c9c995d7fe0e5a"}"
    When the client performs POST request on /FHH/EM1HCRM/Contact/GetCustomerContactList
    Then response value is 
    Then status code is 200
    Then response contains property "Result.StatusCode" containing integer content "0"
    Then response contains property "Result.FailureCode" containing integer content "0"
    Then response contains an array "Value.Contacts" of size "0"   
    
  
     
