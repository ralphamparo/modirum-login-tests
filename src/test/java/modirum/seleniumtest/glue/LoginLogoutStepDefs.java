package modirum.seleniumtest.glue;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import modirum.seleniumtest.features.steps.serenity.LoginSteps;
import modirum.seleniumtest.features.steps.serenity.LogoutSteps;
import net.thucydides.core.annotations.Steps;

public class LoginLogoutStepDefs {
	@Steps
	LoginSteps login;
	@Steps
	LogoutSteps logout;
	
		@Given("^I have opened the URL$")
		public void i_have_opened_the_URL() {
			 // Write code here that turns the phrase above into concrete actions
			login.opens_home_page("http://localhost:8081/examples/jsp/loginlogout/home.jsp");
		}

		@When("^I enter the username \"([^\"]*)\" and password \"([^\"]*)\"$")
		public void i_enter_the_correct_username_and_password(String username, String password) {
			// Write code here that turns the phrase above into concrete actions
			login.login(username, password);
			login.clickLoginButton();
			
		}
		
		@When("I enter the username '(.*?)' and password '(.*?)'$")
		public void i_enter_username_and_password(String username, String password) {
			// Write code here that turns the phrase above into concrete actions
			login.login(username, password);
			login.clickLoginButton();
		}
		@Then("^I should see the home page$")
		public void i_should__see_the_home_page() {
			// Write code here that turns the phrase above into concrete actions
			 login.should_see_home_page();
		}
		
		@Then("I should be able to login and logout")
		public void i_should_see_the_home_page_and_logout() {
			// Write code here that turns the phrase above into concrete actions
			 login.should_see_home_page();
			 logout.should_log_out();
		}
		
		@Then("I should not see the home page")
		public void i_should_not_be_able_to_see_the_home_page() {
			// Write code here that turns the phrase above into concrete actions
			 login.should_not_see_home_page();
		}
		
		@Then("I should be able to logout")
		public void i_should_be_able_to_logout() {
			// Write code here that turns the phrase above into concrete actions
			logout.should_log_out();
		}


}
