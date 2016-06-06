package lv.ctco.cukesrest.internal.json;

import java.io.IOException;
import java.util.Map;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;

import com.jayway.jsonpath.JsonPath;

public class JsonUtil {
	
	static String jsonData = "";
	
	public static String MapToJson(Map<String, Object> obj) {
		ObjectMapper mapper = new ObjectMapper();
		try {
			jsonData = mapper.writeValueAsString(obj);
		} catch (JsonGenerationException e) {
			e.printStackTrace();
		} catch (JsonMappingException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return jsonData;
	}
	
	/**
	 * 利用jsonPath解析返回值
	 * @param jsonpath: 类似xpath，传的是结构
	 * @param responsecontent，接口请求的返回值
	 * @return
	 */
	public static Object getValByJsonPath(String jsonpath, String responseContent) {
		Object value = null;
		try {
			value = (Object) JsonPath.read(responseContent, jsonpath);
		} catch (Exception e) {
			value=null;
		}
		return value;
	}
	
	public static int getIntValByJsonPath(String jsonpath, String responseContent){
		return Integer.parseInt(getValByJsonPath(jsonpath, responseContent)+"");
	}
	
	public static boolean getBoolValByJsonPath(String jsonpath, String responseContent){
		return Boolean.parseBoolean(getValByJsonPath(jsonpath, responseContent)+"");
	}
	
	public static double getDoubleValByJsonPath(String jsonpath, String responseContent){
		return Double.parseDouble(getValByJsonPath(jsonpath, responseContent)+"");
	}
	
	public static String getStringValByJsonPath(String jsonpath, String responseContent){
		return getValByJsonPath(jsonpath, responseContent)+"";
	}
	
}
