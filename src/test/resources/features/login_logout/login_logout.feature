#tag::loginlogout[]
@loginFeature
Feature: Login and Logout functionality

  In order to be hired at your company
  As an Automation Engineer
  I want to be able to login and logout in a page I designed and developed using Java

@positiveCases
  Scenario Outline: Successful login with different usernames and password combinations
    Given I have opened the URL 'http://localhost:8081/examples/jsp/loginlogout/home.jsp'
    When I enter the username "<username>" and password "<password>"
    Then I should see the home page for user "<username>"
    When I have opened a new window with URL 'http://localhost:8081/examples/jsp/loginlogout/welcome.jsp'
    Then I should see the home page for user "<username>"
    Then I should be able to logout
    When I have opened the URL 'http://localhost:8081/examples/jsp/loginlogout/home.jsp'
    Then I should not see the home page for user "<username>"
   
  Examples:
   | username   | password  |
   | rosamair   | chua      |
   | rosesophia | loren     |
   | raprap     | amparo    |
# end::positivescenarios[]

@negativeCases
  Scenario Outline: Unsuccessful login with different username and password combinations
    Given I have opened the URL 'http://localhost:8081/examples/jsp/loginlogout/home.jsp'
    When I enter the username "<username>" and password "<password>"
    Then I should see login error message "Invalid username or password. Please try again."
    When I have opened a new window with URL 'http://localhost:8081/examples/jsp/loginlogout/home.jsp'
    Then I should not see the home page for user "<username>"
    When I have opened a new window with URL 'http://localhost:8081/examples/jsp/loginlogout/welcome.jsp'
  	Then I should not see the home page for user "<username>"
  
  Examples:
   | username   | password  |
   | aarosamaira   | chua      |
   | arosesophiaa | alorena     |
   | raprap     | amparoa$    |
   |     | chua    |
   | rosamair    |           |
   |    |  amparo         |

@sqlInjectionCases
# tag::@sqlInjectionScenarios[]
  Scenario Outline: Inject malicious SQL in the login form
    Given I have opened the URL 'http://localhost:8081/examples/jsp/loginlogout/home.jsp'
    When I enter the username "<username>" and password "<password>"
    Then I should see login error message "Invalid username or password. Please try again."
  
  Examples:
   | username   | password  |
   |  ' OR '1'='1';|        |
   | ' OR '1'='1'; drop table users;| |
   | testadmin| OR '1'='1';       |
   | admin | ' OR '1'='1'; drop table users;|
   

@commonUsernamesAndPasswordCases
# tag::commonUsernamesAndPasswordCases[]
  Scenario Outline: Login with common usernames and passwords to verify unsecure credentials
    Given I have opened the URL 'http://localhost:8081/examples/jsp/loginlogout/home.jsp'
    When I enter the username "<username>" and password "<password>"
    Then I should see login error message "Invalid username or password. Please try again."
  
  Examples:
   | username | password|
   | admin | 1234|
   |username|password|
   |administrator|admin|	
   |administrator|administrator|
   | admin | st@rt123|
   
@loginLogoutProcessCases
  Scenario: Verify consistency and reliablity of the login and logout process
    Given  I have opened the URL 'http://localhost:8081/examples/jsp/loginlogout/home.jsp'
    When I enter the username 'rosesophia' and password 'loren'
    Then I should be able to login and logout user "rosesophia"
    When I enter the username 'raprap' and password 'amparo'
    Then I should be able to login and logout user "raprap"
    When I enter the username 'rosamair' and password 'chua'
    Then I should be able to login and logout user "rosamair"
    When I enter the username 'raprap' and password 'aaa'
    Then I should see login error message "Invalid username or password. Please try again."
    When I enter the username 'raprap' and password 'amparo'
    Then I should be able to login and logout user "raprap"
    When I enter the username 'raprapa' and password 'amparo'
	Then I should see login error message "Invalid username or password. Please try again."
    When I enter the username ' raprap' and password 'amparo'
	Then I should see login error message "Invalid username or password. Please try again."
    When I enter the username 'raprap' and password 'amparo '
	Then I should see login error message "Invalid username or password. Please try again."
	When I enter the username 'raprap' and password 'amparo'
    Then I should be able to login and logout user "raprap"

@sessionManagementValidationCases
  Scenario: Login with different username and password combinations
    Given I have opened the URL 'http://localhost:8081/examples/jsp/loginlogout/home.jsp'
    When I enter the username 'rosesophia' and password 'loren'
    Then I should see the home page for user "rosesophia"
    When I have opened a new window with URL 'http://localhost:8081/examples/jsp/loginlogout/welcome.jsp'
    Then I should not see the home page for user "raprap"
    Then I should be able to logout
    When I have opened the URL 'http://localhost:8081/examples/jsp/loginlogout/home.jsp'
    Then I should not see the home page for user "rosesophia"
    When I enter the username 'raprap' and password 'amparo'
    Then I should be able to login and logout user "raprap"
    When I have opened an invalid URL 'http://localhost:8081/examples/jsp/loginlogout/error.jsp'
    Then I should not see the home page for user ""
  	When I have opened an invalid URL 'http://localhost:8081/examples/jsp/loginlogout/login.jsp'
    Then I should not see the home page for user ""
  	When I have opened an invalid URL 'http://localhost:8081/examples/jsp/loginlogout/logout.jsp'
    Then I should not see the home page for user ""
    When I enter the username 'rosesophia' and password 'loren'
    Then I should be able to login and logout user "rosesophia"
    When I have opened an invalid URL 'http://localhost:8081/examples/jsp/loginlogout/welcome.jsp'
	Then I should not see the home page for user "rosesophia"
    
@boundToFailCases
# tag:boundtofailscenarios[]
  Scenario: Login with incorrect username and password combinations
    Given I have opened the URL 'http://localhost:8081/examples/jsp/loginlogout/home.jsp'
    When I enter the username 'rosesophia' and password 'lorena'
    Then I should see the home page for user "rosesophia"
    When I have opened the URL 'http://localhost:8081/examples/jsp/loginlogout/home.jsp'
    And I enter the username 'raprap' and password 'amparo'
    Then I should see the home page for user "raprap"
# end::boundtofailscenarios[]