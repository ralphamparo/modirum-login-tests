$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/login_logout/login_logout.feature");
formatter.feature({
  "name": "Login page",
  "description": "  In order to be hired at your comapny\n  As an Automation Engineer\n  I want to be able to login and logout in a page I designed and developed using Java",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@loginFeature"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Successful login with different usernames and password combinations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@positiveCases"
    }
  ]
});
formatter.step({
  "name": "I have opened the URL",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter the username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I should see the home page",
  "keyword": "Then "
});
formatter.step({
  "name": "I should be able to logout",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "rosamair",
        "chua"
      ]
    },
    {
      "cells": [
        "rosesophia",
        "loren"
      ]
    },
    {
      "cells": [
        "raprap",
        "amparo"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Successful login with different usernames and password combinations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@loginFeature"
    },
    {
      "name": "@positiveCases"
    }
  ]
});
formatter.step({
  "name": "I have opened the URL",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_have_opened_the_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the username \"rosamair\" and password \"chua\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_enter_the_correct_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_should__see_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to logout",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_should_be_able_to_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successful login with different usernames and password combinations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@loginFeature"
    },
    {
      "name": "@positiveCases"
    }
  ]
});
formatter.step({
  "name": "I have opened the URL",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_have_opened_the_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the username \"rosesophia\" and password \"loren\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_enter_the_correct_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_should__see_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to logout",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_should_be_able_to_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successful login with different usernames and password combinations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@loginFeature"
    },
    {
      "name": "@positiveCases"
    }
  ]
});
formatter.step({
  "name": "I have opened the URL",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_have_opened_the_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the username \"raprap\" and password \"amparo\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_enter_the_correct_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_should__see_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to logout",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_should_be_able_to_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with different username and password combinations",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@loginFeature"
    },
    {
      "name": "@sessionValidationTestCases"
    }
  ]
});
formatter.step({
  "name": "I have opened the URL",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_have_opened_the_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the username \u0027rosesophia\u0027 and password \u0027loren\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_enter_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to login and logout",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_should_see_the_home_page_and_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the URL",
  "keyword": "When "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_have_opened_the_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should not see the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_should_not_be_able_to_see_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the username \u0027raprap\u0027 and password \u0027amparo\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_enter_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to login and logout",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_should_see_the_home_page_and_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have opened an invalid URL \u0027http://localhost:8081/examples/jsp/loginlogout/error.jsp\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_enter_username_and_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should not see the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_should_not_be_able_to_see_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have opened an invalid URL \u0027http://localhost:8081/examples/jsp/loginlogout/login.jsp\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_enter_username_and_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should not see the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_should_not_be_able_to_see_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have opened an invalid URL \u0027http://localhost:8081/examples/jsp/loginlogout/logout.jsp\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_enter_username_and_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should not see the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_should_not_be_able_to_see_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the username \u0027rosesophia\u0027 and password \u0027loren\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_enter_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to login and logout",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_should_see_the_home_page_and_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have opened an invalid URL \u0027http://localhost:8081/examples/jsp/loginlogout/welcome.jsp\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_enter_username_and_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should not see the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_should_not_be_able_to_see_the_home_page()"
});
formatter.result({
  "status": "passed"
});
});