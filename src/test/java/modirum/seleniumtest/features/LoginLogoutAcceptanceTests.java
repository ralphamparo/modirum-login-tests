package modirum.seleniumtest.features;

import cucumber.api.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;
import org.junit.runner.RunWith;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(
		plugin = {"pretty", "html:target/cucumber-html-report"},
		features="src/test/resources/features/login_logout/login_logout.feature",glue="modirum.seleniumtest.glue"
		)
public class LoginLogoutAcceptanceTests 
{}
