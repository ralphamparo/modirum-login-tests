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
      "name": "@loginPositiveCases"
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
      "name": "@loginPositiveCases"
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
      "name": "@loginPositiveCases"
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
      "name": "@loginPositiveCases"
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
formatter.scenarioOutline({
  "name": "Unsuccessful login with different username and password combinations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@loginNegativeCases"
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
  "name": "I should not see the home page",
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
        "\u0027 OR \u00271\u0027\u003d\u00271\u0027;",
        ""
      ]
    },
    {
      "cells": [
        "\u0027 OR \u00271\u0027\u003d\u00271\u0027; drop table users;",
        ""
      ]
    },
    {
      "cells": [
        "testadmin",
        "OR \u00271\u0027\u003d\u00271\u0027;"
      ]
    },
    {
      "cells": [
        "admin",
        "\u0027 OR \u00271\u0027\u003d\u00271\u0027; drop table users;"
      ]
    },
    {
      "cells": [
        "admin",
        "password"
      ]
    },
    {
      "cells": [
        "admin",
        "1234"
      ]
    },
    {
      "cells": [
        "aarosamaira",
        "chua"
      ]
    },
    {
      "cells": [
        "arosesophiaa",
        "alorena"
      ]
    },
    {
      "cells": [
        "raprap",
        "amparoa$"
      ]
    },
    {
      "cells": [
        "",
        "chua"
      ]
    },
    {
      "cells": [
        "rosamair",
        ""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Unsuccessful login with different username and password combinations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@loginFeature"
    },
    {
      "name": "@loginNegativeCases"
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
  "name": "I enter the username \"\u0027 OR \u00271\u0027\u003d\u00271\u0027;\" and password \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_enter_the_correct_username_and_password(String,String)"
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
formatter.scenario({
  "name": "Unsuccessful login with different username and password combinations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@loginFeature"
    },
    {
      "name": "@loginNegativeCases"
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
  "name": "I enter the username \"\u0027 OR \u00271\u0027\u003d\u00271\u0027; drop table users;\" and password \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_enter_the_correct_username_and_password(String,String)"
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
formatter.scenario({
  "name": "Unsuccessful login with different username and password combinations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@loginFeature"
    },
    {
      "name": "@loginNegativeCases"
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
  "name": "I enter the username \"testadmin\" and password \"OR \u00271\u0027\u003d\u00271\u0027;\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_enter_the_correct_username_and_password(String,String)"
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
formatter.scenario({
  "name": "Unsuccessful login with different username and password combinations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@loginFeature"
    },
    {
      "name": "@loginNegativeCases"
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
  "name": "I enter the username \"admin\" and password \"\u0027 OR \u00271\u0027\u003d\u00271\u0027; drop table users;\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_enter_the_correct_username_and_password(String,String)"
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
formatter.scenario({
  "name": "Unsuccessful login with different username and password combinations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@loginFeature"
    },
    {
      "name": "@loginNegativeCases"
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
  "name": "I enter the username \"admin\" and password \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_enter_the_correct_username_and_password(String,String)"
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
formatter.scenario({
  "name": "Unsuccessful login with different username and password combinations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@loginFeature"
    },
    {
      "name": "@loginNegativeCases"
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
  "name": "I enter the username \"admin\" and password \"1234\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_enter_the_correct_username_and_password(String,String)"
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
formatter.scenario({
  "name": "Unsuccessful login with different username and password combinations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@loginFeature"
    },
    {
      "name": "@loginNegativeCases"
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
  "name": "I enter the username \"aarosamaira\" and password \"chua\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_enter_the_correct_username_and_password(String,String)"
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
formatter.scenario({
  "name": "Unsuccessful login with different username and password combinations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@loginFeature"
    },
    {
      "name": "@loginNegativeCases"
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
  "name": "I enter the username \"arosesophiaa\" and password \"alorena\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_enter_the_correct_username_and_password(String,String)"
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
formatter.scenario({
  "name": "Unsuccessful login with different username and password combinations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@loginFeature"
    },
    {
      "name": "@loginNegativeCases"
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
  "name": "I enter the username \"raprap\" and password \"amparoa$\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_enter_the_correct_username_and_password(String,String)"
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
formatter.scenario({
  "name": "Unsuccessful login with different username and password combinations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@loginFeature"
    },
    {
      "name": "@loginNegativeCases"
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
  "name": "I enter the username \"\" and password \"chua\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_enter_the_correct_username_and_password(String,String)"
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
formatter.scenario({
  "name": "Unsuccessful login with different username and password combinations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@loginFeature"
    },
    {
      "name": "@loginNegativeCases"
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
  "name": "I enter the username \"rosamair\" and password \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_enter_the_correct_username_and_password(String,String)"
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
formatter.scenario({
  "name": "Login with different username and password combinations",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@loginFeature"
    },
    {
      "name": "@loginUXCases"
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
  "name": "I enter the username \u0027rosamair\u0027 and password \u0027chua\u0027",
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
  "name": "I enter the username \u0027raprap\u0027 and password \u0027aaa\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_enter_username_and_password(String,String)"
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
  "name": "I enter the username \u0027raprapa\u0027 and password \u0027amparo\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_enter_username_and_password(String,String)"
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
  "name": "I enter the username \u0027 raprap\u0027 and password \u0027amparo\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_enter_username_and_password(String,String)"
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
  "name": "I enter the username \u0027raprap\u0027 and password \u0027amparo \u0027",
  "keyword": "When "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_enter_username_and_password(String,String)"
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
formatter.scenario({
  "name": "Login with different username and password combinations",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@loginFeature"
    },
    {
      "name": "@boundToFailTestCases"
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
  "name": "I enter the username \u0027rosesophia\u0027 and password \u0027lorena\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_enter_username_and_password(String,String)"
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
  "error_message": "net.thucydides.core.webdriver.exceptions.ElementShouldBeEnabledException: Expected enabled element was not enabled\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.waitUntilClickable(WebElementFacadeImpl.java:975)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat net.thucydides.core.annotations.locators.AbstractSingleItemHandler.invoke(AbstractSingleItemHandler.java:45)\r\n\tat com.sun.proxy.$Proxy23.waitUntilClickable(Unknown Source)\r\n\tat modirum.seleniumtest.pages.HomePage.should_see_home_page(HomePage.java:50)\r\n\tat modirum.seleniumtest.features.steps.serenity.LoginSteps.should_see_home_page(LoginSteps.java:34)\r\n\tat modirum.seleniumtest.features.steps.serenity.LoginSteps$$EnhancerByCGLIB$$241cb23a.CGLIB$should_see_home_page$4(\u003cgenerated\u003e)\r\n\tat modirum.seleniumtest.features.steps.serenity.LoginSteps$$EnhancerByCGLIB$$241cb23a$$FastClassByCGLIB$$13871bb6.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:449)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:434)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:409)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:150)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:137)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\r\n\tat modirum.seleniumtest.features.steps.serenity.LoginSteps$$EnhancerByCGLIB$$241cb23a.should_see_home_page(\u003cgenerated\u003e)\r\n\tat modirum.seleniumtest.glue.LoginLogoutStepDefs.i_should__see_the_home_page(LoginLogoutStepDefs.java:39)\r\n\tat ✽.I should see the home page(src/test/resources/features/login_logout/login_logout.feature:72)\r\nCaused by: org.openqa.selenium.TimeoutException: Expected condition failed: waiting for HomePage.logoutLink to be clickable (tried for 5 second(s) with 100 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:303)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.waitUntilClickable(WebElementFacadeImpl.java:972)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat net.thucydides.core.annotations.locators.AbstractSingleItemHandler.invoke(AbstractSingleItemHandler.java:45)\r\n\tat com.sun.proxy.$Proxy23.waitUntilClickable(Unknown Source)\r\n\tat modirum.seleniumtest.pages.HomePage.should_see_home_page(HomePage.java:50)\r\n\tat modirum.seleniumtest.features.steps.serenity.LoginSteps.should_see_home_page(LoginSteps.java:34)\r\n\tat modirum.seleniumtest.features.steps.serenity.LoginSteps$$EnhancerByCGLIB$$241cb23a.CGLIB$should_see_home_page$4(\u003cgenerated\u003e)\r\n\tat modirum.seleniumtest.features.steps.serenity.LoginSteps$$EnhancerByCGLIB$$241cb23a$$FastClassByCGLIB$$13871bb6.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:449)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:434)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:409)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:150)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:137)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\r\n\tat modirum.seleniumtest.features.steps.serenity.LoginSteps$$EnhancerByCGLIB$$241cb23a.should_see_home_page(\u003cgenerated\u003e)\r\n\tat modirum.seleniumtest.glue.LoginLogoutStepDefs.i_should__see_the_home_page(LoginLogoutStepDefs.java:39)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Timed out after 2 seconds. Element not found\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027RALPHXMAIR\u0027, ip: \u0027192.168.254.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_172\u0027\nDriver info: driver.version: unknown\r\n\tat net.thucydides.core.annotations.locators.SmartAjaxElementLocator.ajaxFindElement(SmartAjaxElementLocator.java:173)\r\n\tat net.thucydides.core.annotations.locators.SmartAjaxElementLocator.findElement(SmartAjaxElementLocator.java:125)\r\n\tat net.serenitybdd.core.pages.WebElementResolverByElementLocator.resolveForDriver(WebElementResolverByElementLocator.java:27)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.getElement(WebElementFacadeImpl.java:208)\r\n\tat net.serenitybdd.core.pages.WebElementExpectations$5.apply(WebElementExpectations.java:105)\r\n\tat net.serenitybdd.core.pages.WebElementExpectations$5.apply(WebElementExpectations.java:97)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\t... 58 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I enter the username \u0027raprap\u0027 and password \u0027amparo\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_enter_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutStepDefs.i_should__see_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
});