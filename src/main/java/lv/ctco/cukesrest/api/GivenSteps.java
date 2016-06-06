package lv.ctco.cukesrest.api;

import com.google.inject.Inject;
import com.google.inject.Singleton;

import cucumber.api.java.en.Given;
import lv.ctco.cukesrest.CukesOptions;
import lv.ctco.cukesrest.internal.RequestSpecificationFacade;
import lv.ctco.cukesrest.internal.context.GlobalWorldFacade;
import lv.ctco.cukesrest.internal.helpers.time.Time;
import lv.ctco.cukesrest.internal.resources.ResourceFileReader;
import util.FileUtil;
import util.TimeUtil;

@Singleton
public class GivenSteps {

    @Inject
    RequestSpecificationFacade facade;

    @Inject
    GlobalWorldFacade world;

    @Inject
    ResourceFileReader reader;

    @Given("^let variable \"([^\"]+)\" equal to \"([^\"]+)\"$")
    public void var_assigned(String varName, String value) {
        world.put(varName, value);
    }
    
    @Given("^let variable \"([^\"]+)\" equal to \"([^\"]+)\" with timeStamp$")
    public void var_assigned_with_timeStamp(String varName, String value) {
        world.put(varName, value+TimeUtil.getCurrentTime());
    }
       
    @Given("^let variable \"([^\"]+)\" equal to file value$")
    public void var_assigned(String varName) {
        world.put(varName, FileUtil.readfile("FSAuthXStr.txt").replace("\n", ""));
    }
    
    @Given("^let variable \"([^\"]+)\" equal to getSystemTime$")
    public void var_assigned_toSystime(String varName) {
        world.put(varName, TimeUtil.getCurrentTime()+"");
    }

    @Given("^baseUri is (.+)$")
    public void base_Uri_Is(String url) {
        facade.baseUri(url);
    }

    @Given("^resources root is (.+)$")
    public void resources_Root_Is(String url) {
        var_assigned(CukesOptions.RESOURCES_ROOT, url);
    }

    @Given("^proxy settings are (http|https)://([^:]+)(?::(\\d+))?$")
    public void proxy(String scheme, String host, Integer port) {
        facade.proxy(scheme, host, port);
    }

    @Given("^param \"(.+)\" \"(.+)\"$")
    public void param(String key, String value) {
        facade.param(key, value);
    }

    @Given("^accept \"(.+)\" mediaTypes$")
    public void accept(String mediaTypes) {
        facade.accept(mediaTypes);
    }

    @Given("^content type is \"(.+)\"$")
    public void content_Type(String contentType) {
        facade.contentType(contentType);
    }
    
    @Given("^cookie name \"(.+)\" with value \"(.+)\"$")
    public void cookie(String cookieName, String cookieValue) {
        facade.cookie(cookieName, cookieValue);
    }

    @Given("^queryParam \"(.+)\" is \"(.+)\"$")
    public void query_Param(String key, String value) {
        facade.queryParam(key, value);
    }

    @Given("^formParam \"(.+)\" is \"(.+)\"$")
    public void form_Param(String key, String value) {
        facade.formParam(key, value);
    }

    @Given("^request body \"(.+)\"$")
    public void request_Body(String body) {
        facade.body(body);
    }
    
    @Given("^Android request body \"(.+)\"$")
    public void Android_request_Body(String body) {
    	System.out.println("Android requestBody==  "+body);
    	System.out.println("requestBody=="+world.get("NewContactId"));
    	String androidHeaderStr = "<FHE><Tickets><FSTicket N=\"\" V=\"\" EV=\"\" /><FSTicket N=\"\" V=\"\" EV=\"\" /></Tickets><PostId>e2acefa45cec401e8467824867cb3a59</PostId><Data DataType=\"Json/P\">";
    	String androidEndStr = "</Data></FHE>";
    	facade.body(androidHeaderStr+body+androidEndStr);
    }

    @Given("^request body:$")
    public void request_Body_From_Object(String body) {
        facade.body(body);
    }

    @Given("^request body from file (.+)$")
    public void request_Body_From_File(String path) {
        facade.body(reader.read(path));
    }

    @Given("^session ID \"([^\"]+)\"$")
    public void session_ID(String sessionId) {
        facade.sessionId(sessionId);
    }

    @Given("^session ID \"([^\"]+)\" with value \"([^\"]+)\"$")
    public void session_ID_With_Value(String sessionId, String value) {
        facade.sessionId(sessionId, value);
    }

    @Given("^cookie \"([^\"]+)\" with value \"([^\"]+)\"$")
    public void cookie_With_Value(String cookie, String value) {
        facade.cookie(cookie, value);
    }
    
    //注意，关键字中如果含有. 需要加上转义符
    @Given("^cookie name \"([^\"]+)\" with value read from FSAuthXstr\\.txt file$")
    public void cookie_name_with_value_read_from_FSAuthXstr_txt_file(String cookie) {
        facade.cookie(cookie, FileUtil.readfile("FSAuthXStr.txt").replace("\n", ""));
    }

    @Given("^header ([^\"]+) with value \"([^\"]+)\"$")
    public void header_With_Value(String name, String value) {
        facade.header(name, value);
    }

    @Given("^username \"([^\"]+)\" and password \"([^\"]+)\"$")
    public void authentication(String username, String password) {
        facade.authentication(username, password);
    }

    @Given("^authentication type is \"([^\"]+)\"$")
    public void authentication(String authenticationType) {
        facade.authenticationType(authenticationType);
    }

    @Given("^should wait at most (\\d+) ([^ ]+) with interval (\\d+) ([^ ]+) until status code (\\d+)$")
    public void should_wait_at_most_seconds_until_status_code_with_interval_second
            (int atMostTime, String atMostUnit,
             int intervalTime, String intervalUnit,
             int statusCode) {
        facade.shouldWaitWithIntervalUntilStatusCodeReceived(
            Time.of(atMostTime, atMostUnit),
            Time.of(intervalTime, intervalUnit),
            statusCode);
    }

    @Given("^should wait at most (\\d+) ([^ ]+) with interval (\\d+) ([^ ]+) until property \"([^\"]+)\" equal to \"([^\"]+)\"$")
    public void should_wait_at_most_until_property_equals_with_interval
            (int atMostTime, String atMostUnit,
             int intervalTime, String intervalUnit,
             String property, String value) {
        facade.shouldWaitWithIntervalUntilPropertyEqualToValue(
            Time.of(atMostTime, atMostUnit),
            Time.of(intervalTime, intervalUnit),
            property, value);
    }
   
}
