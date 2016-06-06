Feature: Server is healthy

  Background:
    Given baseUri is https://www.fsceshi.com

  Scenario: test login
    Given request body "{"EnterpriseAccount":"166","UserAccount":"13522015303","Password":"123qwe"}"
    And content type is "application/json"
    When the client performs POST request on /FHH/EM0HXUL/Authorize/Login
    Then status code is 200
    Then response value is 
    Then response contains property "Value.Result" containing integer content "7"
    Then response contains "7"
    Then let variable "EnterpriseId" equal to property "Value.EnterpriseId" value
    
   Scenario: test login again
    Given request body "{"EnterpriseAccount":"{(EnterpriseId)}","UserAccount":"13522015303","Password":"123qwe"}"
    And content type is "application/json"
    When the client performs POST request on /FHH/EM0HXUL/Authorize/Login
    Then status code is 200
    Then response value is 
    Then response contains property "Value.EnterpriseId" containing integer content "166"
    Then response contains "7"
    
    