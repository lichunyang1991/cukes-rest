package util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.apache.http.NameValuePair;
import org.apache.http.message.BasicNameValuePair;

import client.ApiClient;
import lv.ctco.cukesrest.internal.json.JsonUtil;

public class WebLogin {
		
	public static String login() throws Exception{
		String loginUrl = GetConfigUtil.getTestProperty("config","login_url");
    	String enterPriceId = GetConfigUtil.getTestProperty("config","enterpriseId");
	   	String userName = GetConfigUtil.getTestProperty("config","userAccount");
	    String password = GetConfigUtil.getTestProperty("config","userPassword");

	    HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("EnterpriseAccount", enterPriceId);
		map.put("UserAccount", userName);
		map.put("Password", password);
		
    	String loginBody = JsonUtil.MapToJson(map);
    	String result = (ApiClient.Post(loginUrl, loginBody));
    	System.out.println("loginResult: "+result);
    	int resultCode = JsonUtil.getIntValByJsonPath("Value.Result", result);
		if(resultCode!=7){
			System.out.println("登录返回的response为："+result);
			System.out.println("登录失败，因为登录成功，要求返回的ValueResult值为7，实际为："+resultCode);
			throw new Exception();
		}
    	return result;
	}
	
	public static String hjLogin() throws Exception{
		String loginUrl = GetConfigUtil.getTestProperty("config","hj_login_url");
		String enterPriceId = GetConfigUtil.getTestProperty("config","hj_enterpriseId");
		String userName = GetConfigUtil.getTestProperty("config","hj_userAccount");
		String passWord = GetConfigUtil.getTestProperty("config","hj_userPassword");

		List<NameValuePair> params = new ArrayList<NameValuePair>();
		params.add(new BasicNameValuePair("ea",enterPriceId));
		params.add(new BasicNameValuePair("username",userName));
		params.add(new BasicNameValuePair("password",passWord));

		String result = (ApiClient.Post(loginUrl, params));
		System.out.println("loginResult: "+result);
		boolean resultFlag = JsonUtil.getBoolValByJsonPath("success", result);
		if(!resultFlag){
		System.out.println("登录返回的response为："+result);
		System.out.println("登录失败，因为登录成功，要求返回的ValueResult值为7，实际为："+resultFlag);
		throw new Exception();
		}
		return result;
		}
}
