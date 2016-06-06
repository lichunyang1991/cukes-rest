package lv.ctco.cukesrest.run;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
    format = { "pretty" },
    features = "classpath:login.feature",
    glue = "lv.ctco.cukesrest.api",
    strict = true
)
public class LoginTest {

//    @BeforeClass
//    public static void setUp() throws Exception {
//        new SampleApplication().run(new String[]{"server", "server.yml"});
//    }
}
