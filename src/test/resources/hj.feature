Feature: Server is healthy

  Background:
    Given baseUri is http://hj.fsfte.com

  Scenario: test1
   Given request body "{"name":"2343","description":"234234","type":"","items":[{"productId":"4","productName":"PK ","quota":"2343"}],"id":""}"
    And content type is "application/json"
    When the client performs POST request on /op/api/coupon/packages/save
    Then status code is 200
    Then response value is 
    Then response contains property "success" containing integer content "true"
    Then response contains "7"
    Then let variable "EnterpriseId" equal to property "Value.EnterpriseId" value
    
    
  Scenario: test2
   Given request body "{"name":"2343","description":"234234","type":"","items":[{"productId":"4","productName":"PK ","quota":"2343"}],"id":""}"
    And content type is "application/json"
    When the client performs POST request on /op/api/coupon/packages/save
    Then status code is 200
    Then response value is 
    Then response contains property "success" containing integer content "true"
    Then response contains "7"
    Then let variable "EnterpriseId" equal to property "Value.EnterpriseId" value
    
#   Scenario: test login again
#    Given request body "{"ea":"{(EnterpriseId)}","UserAccount":"13522015303","Password":"123qwe"}"
#    And content type is "application/x-www-form-urlencoded"
#    When the client performs POST request on /g/api/login
#    Then status code is 200
#    Then response value is
#    Then response contains property "Value.EnterpriseId" containing integer content "166"
#    Then response contains "7"
#
#