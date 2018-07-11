package modirum.seleniumtest.features.steps.serenity;

import modirum.seleniumtest.pages.HomePage;
import net.thucydides.core.annotations.Step;

// tag::header[]
public class LoginSteps {
// end::header[]
// tag::searchByKeywordSteps[]

    HomePage homePage;                                          // <1>
  
    @Step
	public void opens_home_page(String url) {
		// TODO Auto-generated method stub
    	homePage.open_home_page(url);
	}
    
    @Step
	public void login(String username, String password) {
		// TODO Auto-generated method stub
    	homePage.login(username, password);
	}
    
    @Step
   	public void clickLoginButton() {
   		// TODO Auto-generated method stub
       	homePage.clickLoginButton();
   	}

    @Step
	public void should_see_home_page() {
		// TODO Auto-generated method stub
    	homePage.should_see_home_page();
	}
    
    @Step
	public void should_not_see_home_page() {
		// TODO Auto-generated method stub
    	homePage.should_not_see_home_page();
	}

// tag::tail[]
}
//end:tail
