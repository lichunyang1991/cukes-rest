package lv.ctco.cukesrest.internal;

import com.google.inject.*;
import com.jayway.restassured.path.json.JsonPath;
import com.jayway.restassured.response.*;
import lv.ctco.cukesrest.*;
import lv.ctco.cukesrest.internal.context.*;
import lv.ctco.cukesrest.internal.json.*;
import lv.ctco.cukesrest.internal.matchers.*;
import lv.ctco.cukesrest.internal.switches.*;
import util.ParseXmlUtil;

import org.hamcrest.*;

import java.util.*;

import static org.hamcrest.Matchers.*;
import static org.junit.Assert.*;

@Singleton
@SwitchedBy(CukesOptions.ASSERTIONS_DISABLED)
@InflateContext
public class AssertionFacadeImpl implements AssertionFacade {

    @Inject
    private GlobalWorldFacade world;

    @Inject
    private JsonParser jsonParser;

    @Inject
    ResponseFacade facade;

    public void bodyEqualTo(String body) {
        facade.response().then().body(equalTo(body));
    }

    public void bodyNotEqualTo(String body) {
        facade.response().then().body(not(equalTo(body)));
    }

    public void bodyNotEmpty() {
        facade.response().then().body(not(isEmptyOrNullString()));
    }

    public void bodyContains(String body) {
    	System.out.println("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    	System.out.println("AssertionFacadeImpl  bodyContans response==  "+facade.response().asString());
    	System.out.println("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    	facade.response().then().body(containsString(body));
    }
    
    public void mobileBodyContains(String body) {
		// TODO Auto-generated method stub
    	String responseContent = ParseXmlUtil.xmlElements4FX(facade.response().asString()).get("jsonResult");
        assertTrue(responseContent.contains(body));
	}
    
    public void mobileBodyNotContains(String body) {
		// TODO Auto-generated method stub
    	String responseContent = ParseXmlUtil.xmlElements4FX(facade.response().asString()).get("jsonResult");
        assertFalse(responseContent.contains(body));
	}

    public void bodyDoesNotContain(String body) {
        facade.response().then().body(not(containsString(body)));
    }

    public void headerIsEmpty(String headerName) {
        facade.response().then().header(headerName, isEmptyString());
    }

    public void headerIsNotEmpty(String headerName) {
        facade.response().then().header(headerName, not(isEmptyString()));
    }

    public void statusCodeIs(int statusCode) {
        facade.response().then().statusCode(statusCode);
    }

    public void statusCodeIsNot(int statusCode) {
        facade.response().then().statusCode(not(statusCode));
    }

    public void headerEndsWith(String headerName, String suffix) {
        facade.response().then().header(headerName, EndsWithRegexp.endsWithRegexp(suffix));
    }

    public void varAssignedFromHeader(@InflateContext.Ignore String varName, String headerName) {
        String value = facade.response().getHeader(headerName);
        world.put(varName, value);
    }

    public void headerEqualTo(String headerName, String value) {
        facade.response().then().header(headerName, equalTo(value));
    }

    public void headerNotEqualTo(String headerName, String value) {
        facade.response().then().header(headerName, not(equalTo(value)));
    }

    public void headerContains(String headerName, String text) {
        facade.response().then().header(headerName, containsString(text));
    }

    public void headerDoesNotContain(String headerName, String text) {
        facade.response().then().header(headerName, not(containsString(text)));
    }

    public void bodyContainsPropertiesFromJson(String json) {
        // TODO: make multiple failures visible. Rework to allOf() matcher
        // TODO: Implement XML ?
        Map<String, String> stringStringMap = jsonParser.convertToPathToValueMap(json);
        for (Map.Entry<String, String> entry : stringStringMap.entrySet()) {
            bodyContainsPathWithValue(entry.getKey(), entry.getValue());
        }
    }

    public void bodyContainsPathWithValue(String path, String value) {
        ResponseBody responseBody = facade.response().body();
        assertThat(responseBody, JsonMatchers.containsValueByPath(path, EqualToIgnoringTypeMatcher
            .equalToIgnoringType(value)));
    }

    public void bodyContainsPathWithOtherValue(String path, String value) {
        ResponseBody responseBody = facade.response().body();
        assertThat(responseBody, JsonMatchers.containsValueByPath(path, EqualToIgnoringTypeMatcher
            .notEqualToIgnoringType(value)));
    }

    public void bodyDoesNotContainPath(String path) {
        Object value = facade.response().body().path(path);
        assertThat(value, nullValue());
    }

    public void bodyContainsArrayWithSize(String path, String size) {
        ResponseBody responseBody = facade.response().body();
        assertThat(responseBody, JsonMatchers.containsValueByPath(path, ArrayWithSizeMatcher.arrayWithSize(size)));
    }

    public void bodyContainsPathOfType(String path, String type) {
        ResponseBody responseBody = facade.response().body();
        assertThat(responseBody, JsonMatchers.containsValueByPath(path, OfTypeMatcher.ofType(type)));
    }

    public void bodyContainsPathMatchingPattern(String path, String pattern) {
        ResponseBody responseBody = facade.response().body();
        assertThat(responseBody, JsonMatchers.containsValueByPath(path, MiscMatchers.that(ContainsPattern
            .containsPattern(pattern))));
    }

    public void bodyContainsPathNotMatchingPattern(String path, String pattern) {
        ResponseBody responseBody = facade.response().body();
        assertThat(responseBody, JsonMatchers.containsValueByPath(path, MiscMatchers.that(Matchers.not
            (ContainsPattern.containsPattern(pattern)))));
    }

    // TODO: Experimental
    public void varAssignedFromProperty(@InflateContext.Ignore String varName, String property) {
//        String value = String.valueOf(facade.response().body().path(property));
        String value = facade.response().body().path(property).toString();
        world.put(varName, value);
    }
    
    public void varAssignedFromJsonPath(@InflateContext.Ignore String varName, String jsonPath) {
        String response = facade.response().asString();
        JsonPath jPath = new JsonPath(response);
    	String value = jPath.getString(jsonPath);
    	System.out.println("varAssignedFromJsonPath value== "+value);
        world.put(varName, value);
    }
    
    public void varAssignedFromMobileJsonPath(@InflateContext.Ignore String varName, String jsonPath) {
    	String response = ParseXmlUtil.xmlElements4FX(facade.response().asString()).get("jsonResult");
        JsonPath jPath = new JsonPath(response);
        System.out.println("Android response varassigned== "+response);
    	String value = jPath.getString(jsonPath);
    	System.out.println("varAssignedFromMobileJsonPath value== "+value);
    	System.out.println("varAssignedFromMobileJsonPath varName== "+varName);
    	
        world.put(varName, value);
    }

    public void bodyContainsJsonPathValueContainingPhrase(String path, String phrase) {
        ResponseBody responseBody = facade.response().body();
        assertThat(responseBody, JsonMatchers.containsValueByPath(path, containsString(phrase)));
    }
    
    public String getResponseContent() {
        return facade.response().asString();
    }
    
    public void bodyContainsJsonPathValueContainingIntegerContent(String path, int value) {
        String responseContent = facade.response().asString();
        assertEquals(JsonUtil.getIntValByJsonPath(path, responseContent), value);
    }
    
    public void mobileBodyContainsJsonPathValueContainingStringContent(String path, String value) {
        String responseContent = ParseXmlUtil.xmlElements4FX(facade.response().asString()).get("jsonResult");
        assertEquals(JsonUtil.getStringValByJsonPath(path, responseContent), value);
    }

    public void mobileXMLBodyContainsElementKeyValueContainingStringContent(String key, String value) {
        String result = ParseXmlUtil.xmlElements4FX(facade.response().asString()).get(key);
        assertEquals(result, value);
    }

	@Override
	public String getResponseContentType() {
		return facade.response().getContentType();
	}

    
}
