package modirum.seleniumtest.pages;

import net.serenitybdd.core.pages.WebElementFacade;
import net.thucydides.core.annotations.DefaultUrl;
import net.thucydides.core.pages.PageObject;
import org.openqa.selenium.support.FindBy;

// tag::header[]
@DefaultUrl("http://localhost:8081/examples/jsp/loginlogout/home.jsp")                      // <1>
public class HomePage extends PageObject {              // <2>
// end::header[]
// tag::searchByKeyword[]

    @FindBy(name = "name")
    WebElementFacade usernameTextbox;

    @FindBy(name = "password")
    WebElementFacade passwordTextbox;
    
    @FindBy(name = "loginbutton")
    WebElementFacade loginButton;
    
    @FindBy(name = "errorText")
    WebElementFacade errorLabel;
    
    @FindBy(linkText = "Logout")
    WebElementFacade logoutLink;
    
	public void login(String username, String password) {
		// TODO Auto-generated method stub
		usernameTextbox.waitUntilVisible();
		usernameTextbox.sendKeys(username);
		passwordTextbox.waitUntilVisible();
		passwordTextbox.sendKeys(password);
	}
	
	public void clickLoginButton() {
		loginButton.waitUntilVisible();
		loginButton.click();
	}
	
	public void open_home_page(String url) {
		// TODO Auto-generated method stub
		getDriver().navigate().to(url);
		getDriver().manage().window().maximize();
	}
	
	public void should_see_home_page() {
		// TODO Auto-generated method stub
		logoutLink.waitUntilClickable();
		logoutLink.shouldBeCurrentlyVisible();		
	}

	public void should_not_see_home_page() {
		//assertion1  -> fail
		errorLabel.waitUntilVisible();
		errorLabel.shouldBeCurrentlyVisible();
			
	}
	
	public void clickLogoutButton() 
	{
		 logoutLink.click();
	}
	
	public void should_log_out() {
		usernameTextbox.waitUntilVisible();
	}
	

}
// end::tail[]