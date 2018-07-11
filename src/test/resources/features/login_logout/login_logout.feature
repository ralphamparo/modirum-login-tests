#tag::loginlogout[]
@loginFeature
Feature: Login page

  In order to be hired at your comapny
  As an Automation Engineer
  I want to be able to login and logout in a page I designed and developed using Java

# tag::positivescenarios[]
@loginPositiveCases
  Scenario Outline: Successful login with different usernames and password combinations
    Given I have opened the URL
    When I enter the username "<username>" and password "<password>"
    Then I should see the home page
    Then I should be able to logout
  Examples:
   | username   | password  |
   | rosamair   | chua      |
   | rosesophia | loren     |
   | raprap     | amparo    |
# end::positivescenarios[]

@loginNegativeCases
# tag::negativescenarios[]
  Scenario Outline: Unsuccessful login with different username and password combinations
    Given I have opened the URL
    When I enter the username "<username>" and password "<password>"
    Then I should not see the home page

  Examples:
   | username   | password  |
   |  ' OR '1'='1';|        |
   | ' OR '1'='1'; drop table users;| |
   | testadmin| OR '1'='1';       |
   | admin | ' OR '1'='1'; drop table users;|
   | admin | password|
   | admin | 1234|
   | aarosamaira   | chua      |
   | arosesophiaa | alorena     |
   | raprap     | amparoa$    |
   |     | chua    |
   | rosamair    |           |
# end::negativescenarios[]

@loginUXCases
# tag:userexperiencescenarios[]
  Scenario: Login with different username and password combinations
    Given I have opened the URL
    When I enter the username 'rosesophia' and password 'loren'
    Then I should be able to login and logout
    When I enter the username 'raprap' and password 'amparo'
    Then I should be able to login and logout
    When I enter the username 'rosamair' and password 'chua'
    Then I should be able to login and logout
    When I enter the username 'raprap' and password 'aaa'
    Then I should not see the home page
    When I enter the username 'raprap' and password 'amparo'
    Then I should be able to login and logout
    When I enter the username 'raprapa' and password 'amparo'
	Then I should not see the home page
	When I enter the username ' raprap' and password 'amparo'
	Then I should not see the home page
	When I enter the username 'raprap' and password 'amparo '
	Then I should not see the home page
	# end::userexperiencescenarios[]
	
@boundToFailTestCases
# tag:boundtofailscenarios[]
  Scenario: Login with different username and password combinations
    Given I have opened the URL
    When I enter the username 'rosesophia' and password 'lorena'
    Then I should see the home page
    When I enter the username 'raprap' and password 'amparo'
    Then I should see the home page
# end::boundtofailscenarios[]