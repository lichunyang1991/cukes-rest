package lv.ctco.cukesrest.run;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import client.ApiClient;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import util.WebLogin;

/*@RunWith(Suite.class)
@SuiteClasses({
	Contact4WebTest.class,
	ContactAssociateToCustomer4WebTest.class,
	
	Contact4AndroidTest.class,
	ContactAssociateToCustomer4AndroidTest.class
	
  })*/
@RunWith(Cucumber.class)
@CucumberOptions(
    //format = { "junit:reports/junit/junit.xml", "html:reports/html", "pretty"},
	plugin = {"pretty", "html:target/cucumber","json:target/cucumber.json"},
    features = "classpath:hj.feature",//运行test/resources下面的所有文件
//    features = "classpath:contact4Web.feature",//指定运行某个feature
    glue = "lv.ctco.cukesrest.api",
    strict = true
)
public class RunAllHjTest {
	 @BeforeClass
	 public static void setUp() throws Exception{
	   	WebLogin.hjLogin();       
	   	//Thread.sleep(20000);
     }
	    
	 @AfterClass
	 public static void afterClass() {
			// close httpclient
		 ApiClient.closeConnection();
	 }

}
