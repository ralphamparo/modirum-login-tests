package modirum.seleniumtest.pages;

import net.serenitybdd.core.pages.WebElementFacade;
import net.thucydides.core.annotations.DefaultUrl;
import net.thucydides.core.pages.PageObject;

import java.util.List;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.FindBy;

// tag::header[]
@DefaultUrl("http://localhost:8081/examples/jsp/loginlogout/home.jsp")                      // <1>
public class Navigate extends PageObject {              // <2>
// end::header[]
// tag::searchByKeyword[]	
	public void open_new_window(String windowURL) {
		
		((JavascriptExecutor) getDriver()).executeScript("window.open(arguments[0])", windowURL);
		
		java.util.Set<java.lang.String> windowHandles = getDriver().getWindowHandles();
		
		System.out.println(windowHandles);
		
		int handlesCount = windowHandles.size();
		int windowCtr=1;
		//if (count > 1) {
		for (String window: windowHandles) {
		    if(windowCtr == handlesCount ){
		        getDriver().switchTo().window(window);
		        //getDriver().navigate().to(windowURL);;
		    }
		    windowCtr++;
		}   
	
		
	}

}
// end::tail[]