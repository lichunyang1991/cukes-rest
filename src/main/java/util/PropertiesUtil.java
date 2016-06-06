package util;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Properties;

public class PropertiesUtil {
	
	public static void storeProperties(HashMap<String, String> map){
		Properties prop = new Properties();
		File file = new File("FSAuthXstr.properties");
		if (!file.exists()) {
			try {
				file.createNewFile();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}else {
			file.delete();
			try {
				file.createNewFile();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		FileOutputStream oFile = null;
		try {
			/// 保存属性到FSAuthXstr.properties文件
			oFile = new FileOutputStream(file);
			Iterator<Map.Entry<String, String>> iterator = map.entrySet().iterator();
			while (iterator.hasNext()) {
				Map.Entry<String,String> entry = (Entry<String,String>) iterator.next();
				prop.setProperty(entry.getKey(), entry.getValue());
			}
			prop.store(oFile, "The New properties file");
			oFile.close();
		} catch (Exception e) {
			// TODO: handle exception
		}
		
		
	}

	public static HashMap<String, String> getProperties(){
		Properties prop = new Properties();
		InputStream in = null;
		File file = new File("FSAuthXstr.properties");
		HashMap<String, String> map = new HashMap<String,String>();
		try {
			// 读取属性文件a.properties
			in = new BufferedInputStream(new FileInputStream(file));
			prop.load(in); /// 加载属性列表
			Iterator<String> it = prop.stringPropertyNames().iterator();
			while (it.hasNext()) {
				String key = it.next();
				map.put(key, prop.getProperty(key));
			}
			in.close();
		} catch (Exception e) {
			// TODO: handle exception
		}
		return map;
	}
}
