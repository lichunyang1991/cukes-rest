package client;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.security.KeyManagementException;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;
import java.util.HashMap;
import java.util.List;

import javax.net.ssl.SSLContext;

import org.apache.http.Header;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.ParseException;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicHeader;
import org.apache.http.ssl.SSLContextBuilder;
import org.apache.http.ssl.TrustStrategy;
import org.apache.http.util.EntityUtils;

import util.FileUtil;
import util.GetConfigUtil;
import util.PropertiesUtil;

public class ApiClient {
	private static int httpCode = -1;
	private static HttpPost post;
	private static HttpResponse response;
	private static HttpEntity entity;
	static String result="";
	public static HashMap<String, String> cookieMap = new HashMap<String, String>();
	
	private final static ThreadLocal<CloseableHttpClient> CLIENT_CACHE = new InheritableThreadLocal<CloseableHttpClient>() {
		@Override
		protected CloseableHttpClient initialValue() {

			SSLContext sslContext = null;
			try {
				sslContext = new SSLContextBuilder().loadTrustMaterial(null, new TrustStrategy() {
					public boolean isTrusted(X509Certificate[] chain, String authType) throws CertificateException {
						return true;
					}
				}).build();
			} catch (KeyManagementException e) {
				e.printStackTrace();
			} catch (NoSuchAlgorithmException e) {
				e.printStackTrace();
			} catch (KeyStoreException e) {
				e.printStackTrace();
			}

			SSLConnectionSocketFactory sslsf = new SSLConnectionSocketFactory(sslContext);

			RequestConfig requestConfig = RequestConfig.custom().setSocketTimeout(HttpConstants.Connection_Timeout)
					.setConnectTimeout(HttpConstants.Connection_Timeout)
					.setConnectionRequestTimeout(HttpConstants.Connection_Timeout).build();

			CloseableHttpClient client = HttpClients.custom().setDefaultRequestConfig(requestConfig)
					.setSSLSocketFactory(sslsf).build();

			return client;

		}
	};

	private static Header JSON_TYPE_HEADER = new BasicHeader(HttpConstants.Content_Type, HttpConstants.JSON_MEDIA_TYPE);

	public static void closeConnection(){
		try {
			CLIENT_CACHE.get().close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static int getHttpCode() {
		return httpCode;
	}

	public static String Post(String url, String httpbody) {
		post = new HttpPost(getBaseUrl()+url);
		post.setHeader(JSON_TYPE_HEADER);
		StringEntity s;
		s = new StringEntity(httpbody,"utf-8"); 
		s.setContentType("application/json");    
		post.setEntity(s);
		try {
			response = CLIENT_CACHE.get().execute(post);
		} catch (ClientProtocolException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		entity = response.getEntity();
		httpCode = response.getStatusLine().getStatusCode();
		
		//得到所需要的cookie
		//String FSAuthXStr = getCookiesFromResponse(response);
		getCookiesFromResponse(response);
		
		//将cookie写入文件中，方便文件读取
		/*try {
			FileUtil.writeDataToFile(FSAuthXStr, "FSAuthXStr.txt");
		} catch (FileNotFoundException e1) {
			e1.printStackTrace();
		} catch (UnsupportedEncodingException e1) {
			e1.printStackTrace();
		}
		*/
		try {
			result = EntityUtils.toString(entity);
		} catch (ParseException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return result;
	}
	
	/**
	 * 给汇聚登录用的。。。暂时先这样，后期会把hj_base_url提出来
	 * @param endpoint
	 * @param params
	 * @return
	 */
	public static String Post(String endpoint,List<NameValuePair> params){
		post = new HttpPost(GetConfigUtil.getTestProperty("config","hj_base_url")+endpoint);
		try{
		post.setEntity(new UrlEncodedFormEntity(params,"UTF-8"));
		}catch(Exception e){
		e.printStackTrace();
		}
		try {
		response = CLIENT_CACHE.get().execute(post);
		} catch (ClientProtocolException e) {
		e.printStackTrace();
		} catch (IOException e) {
		e.printStackTrace();
		}
		entity = response.getEntity();
		httpCode = response.getStatusLine().getStatusCode();

		//得到所需要的cookie并且把cookie写入properties文件		
		getHjCookiesAndWriteIntoPropertiesFile(response);
		
		try {
		result = EntityUtils.toString(entity);
		} catch (ParseException e) {
		e.printStackTrace();
		} catch (IOException e) {
		e.printStackTrace();
		}
		return result;
		}

	/*private static String getCookiesFromResponse(HttpResponse response2) {
		Header[] headers = response.getHeaders("Set-Cookie");
		String FSAuthXStr = "";
		for (Header h : headers) {
			String hVal = h.getValue().toString();
			System.out.println("hVal="+hVal);
		    if(hVal.startsWith("FSAuthX")){
		    	FSAuthXStr = hVal.substring(hVal.indexOf("FSAuthX=")+"FSAuthX=".length(), hVal.indexOf(";"));
		    }
		}
		System.out.println("FSAuthXStr== "+FSAuthXStr);
		
		return FSAuthXStr;
	}*/
	
	private static void getCookiesFromResponse(HttpResponse response) {
		Header[] headers = response.getHeaders("Set-Cookie");
		HashMap<String, String> map = new HashMap<String,String>();
		String FSAuthXStr = "";
		for (Header h : headers) {
			String hVal = h.getValue().toString();
			System.out.println("hVal="+hVal);
		    if(hVal.startsWith("FSAuthX")){
		    	FSAuthXStr = hVal.substring(hVal.indexOf("FSAuthX=")+"FSAuthX=".length(), hVal.indexOf(";"));
		    }
		}
		map.put("FSAuthX", FSAuthXStr);
		System.out.println("FSAuthXStr== "+FSAuthXStr);
		
		PropertiesUtil.storeProperties(map);
	}
	
	private static void getHjCookiesAndWriteIntoPropertiesFile(HttpResponse response) {
		Header[] headers = response.getHeaders("Set-Cookie");
		HashMap<String, String> map = new HashMap<String,String>();
		for (Header h : headers) {
			String hVal = h.getValue().toString();
			System.out.println(hVal);
		    if(hVal.startsWith("sat")){
		    	map.put("sat", hVal.substring(hVal.indexOf("sat=")+"sat=".length(), hVal.indexOf(";")));
		    }
		    if(hVal.startsWith("ea")){
		    	map.put("ea", hVal.substring(hVal.indexOf("ea=")+"ea=".length(),hVal.indexOf(";")));
		    }
		    if(hVal.startsWith("un")){
		    	map.put("un", hVal.substring(hVal.indexOf("un=")+"un=".length(),hVal.indexOf(";")));
		    }
		}
		PropertiesUtil.storeProperties(map);
	}
	
	public static String getBaseUrl(){
		return GetConfigUtil.getTestProperty("config","base_url");
	}

}
