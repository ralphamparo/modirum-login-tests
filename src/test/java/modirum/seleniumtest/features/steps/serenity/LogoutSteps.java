package modirum.seleniumtest.features.steps.serenity;


import modirum.seleniumtest.pages.HomePage;
import net.thucydides.core.annotations.Step;


// tag::header[]
public class LogoutSteps {
// end::header[]
// tag::searchByKeywordSteps[]

	HomePage homePage;     

    @Step
	public void should_log_out() {
		// TODO Auto-generated method stub
    	homePage.clickLogoutButton();
    	homePage.should_log_out();
	}

// tag::tail[]
}
//end:tail
