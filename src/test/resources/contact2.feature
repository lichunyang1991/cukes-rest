Feature: test crmlogic contact module

  Background:
    Given baseUri is https://www.fsceshi.com
    
  Scenario: add contact with required param Name 
    #And let variable "cookieValue" equal to file value
    And let variable "name" equal to "Hello"
    Given request body "{"CustomerID":"","UDFieldDatas":[{"FieldName":"Name","FieldProperty":1,"FieldType":2,"FieldValue":{"Value":"{(name)}"}}],"Type":1,"AssociateCustomerByCompany":false}"
    #And content type is "application/json"
    #And cookie name "FSAuthX" with value "{(cookieValue)}"  
    When the client performs POST request on /FHH/EM1HCRM/Contact/AddContact
    Then response value is 
    Then status code is 200
    Then response contains property "Result.StatusCode" containing integer content "0"
    Then response contains "ContactID"
    Then let variable "ContactId" equal to property "Value.ContactID" value

     
    
  
