Feature: Login and Logout

@positiveCases @testWithCorrectUsernamesAndPassword
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
   | rosamair   | chua      |
   | rosesophia | loren     |
   | raprap     | amparo    |

#@signUpPage

@negativeCases 
@testWithIncorrectUsernamesAndPassword 
@testWithEmptyUserAndCorrectPassword
@testWithCorrectUserNameAndEmptyPassword
@verifyLoginErrorMessages
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
   | aarosamaira   | chua   |
   | arosesophiaa | alorena |
   | raprap     | amparoa$  |
   |            | chua      |
   | rosamair   |           |
   |            |   amparo  |

@navigationCases
@backButtonShouldNotDisplayHomeageAfterLogout
 Scenario Outline: Session Management tests after logging out and clicking back button of the browser
    Given I have opened the URL 'http://localhost:8081/examples/jsp/loginlogout/home.jsp'
    When I enter the username "<username>" and password "<password>"
    Then I should be able to login and logout user  "<username>"
  	When I click the back button of the browser
  	Then I should see not the home page for user "<username>" #bug found here
  	
   Examples:
   | username   | password  |
   | raprap     | amparo    |
 
@sessionTimeoutVerification 
 Scenario Outline: Unsuccessful login with different username and password combinations
   Given I have opened the URL 'http://localhost:8081/examples/jsp/loginlogout/home.jsp'
   When I enter the username "<username>" and password "<password>"
   Then I should be able to login user  "<username>"
   When I am inactive for '5' minutes
   And I have opened the URL 'http://localhost:8081/examples/jsp/loginlogout/welcome.jsp'
   Then I should see that my session has timed out
   And I should see a link that can redirect me to the login page
   
   Examples:
   | username   | password  |
   |  ramparo   | amparo  |

@accountLockOut 
 Scenario Outline: Verify that account lock outs after multiple invalid attempts 
   Given I have opened the URL 'http://localhost:8081/examples/jsp/loginlogout/home.jsp'
   When I enter multiple invalid credentials for an existing user
    | username   | password | attemptsCount |  
    | raprap | a |     5         |
   Then I should see an error messaging prompting the account is locked
   When I click 'Forgot Password' link
   And I entered the user's email
   And I have successfully answered the security questions
   And I have entered verified the old login password "<oldPassword>"
   And I have entered new password "<newPassword>"
   And I have verified the new credentials "<newPassword>" via email
   When I enter the username "<username>" and password "<newPassword>"
   Then I should not see the home page for user "<username>"
   When I enter "<invalidAttemptsAccount>" invalid password "<invalidpassword>" for  user "<username>"
   Then I should see an error messaging prompting the account is locked
   When I click 'Forgot Password' link
   And I entered the user's "<username>" email "<email>"
   And I have successfully answered the security questions
   And I have entered verified the old login password "<oldPassword>"
   And I have entered new password "<newPassword>"
   When I have opened the URL 'http://localhost:8081/examples/jsp/loginlogout/home.jsp'
   And I enter the username "<username> and password "<newPassword>"
   Then I should not see the home page for user "<username>"
   
   Examples:
	| username   | oldPassword    | invalidpassword | invalidAttemptsCount | email           | newPassword | 
    | raprap     | amparo         | a               |     5                |  email@gmail.com| newPassword |
    
@sqlInjectionCases
  Scenario Outline: Inject malicious SQL in the login form
    Given I have opened the URL 'http://localhost:8081/examples/jsp/loginlogout/home.jsp'
    When I enter the username "<username>" and password "<password>"
    Then I should not see the home page for user "<username>"

  Examples:
   | username   | password  |
   |  ' OR '1'='1';|        |
   | ' OR '1'='1'; drop table users;| |
   | testadmin| OR '1'='1';       |
   | admin | ' OR '1'='1'; drop table users;|
   |  ' OR '1'='1'|        |
   | testadmin| OR '1'='1'       |
   
@commonUsernamesAndPasswordCases
# tag::commonUsernamesAndPasswordCases[]
  Scenario Outline: Login with common usernames and passwords to verify unsecure credentials
    Given I have opened the URL 'http://localhost:8081/examples/jsp/loginlogout/home.jsp'
    When I enter the username "<username>" and password "<password>"
    Then I should not see the home page for user "<username>"

  Examples:
   | username | password|
   | admin | 1234|
   |username|password|
   |administrator|admin|	
   |administrator|administrator|
   | admin | st@rt123|
   
@loginLogoutProcessCases
  Scenario: Verify consistency and reliability of the login and logout process
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
  Scenario: Session Management validation tests
    Given I have opened the URL 'http://localhost:8081/examples/jsp/loginlogout/home.jsp'
    When I enter the username 'rosesophia' and password 'loren'
    Then I should see the home page for user "rosesophia"
    When I have opened a new window with URL 'http://localhost:8081/examples/jsp/loginlogout/welcome.jsp'
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

@concurrentConnectionsCases
	Scenario: Verify that concurrent connections are not allowed
	Given I have opened the URL 'http://localhost:8081/examples/jsp/loginlogout/home.jsp' in "chrome" browser
    When I enter the username 'rosesophia' and password 'loren'
    Then I should see the home page for user "rosesophia"
    When I have opened the URL 'http://localhost:8081/examples/jsp/loginlogout/home.jsp' in "opera" browser
    Then I should see the home page for user "rosesophia"
    When I have opened the URL 'http://localhost:8081/examples/jsp/loginlogout/home.jsp' in "safari" browser
    Then I should see the home page for user "rosesophia"
    When I have opened the URL 'http://localhost:8081/examples/jsp/loginlogout/home.jsp' in "firefox" browser
    Then I should see the home page for user "rosesophia"
    When I have opened the URL 'http://localhost:8081/examples/jsp/loginlogout/home.jsp' in "chromium" browser
    Then I should see the home page for user "rosesophia"
    When I have opened the URL 'http://localhost:8081/examples/jsp/loginlogout/home.jsp' in "iexplorer" browser
    Then I should see the home page for user "rosesophia"
    When I have opened the URL 'http://localhost:8081/examples/jsp/loginlogout/home.jsp' in "microsoft edge" browser
    Then I should see the home page for user "rosesophia"
   
   
   
   
   
       
