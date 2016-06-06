package util;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;

public class FileUtil {
	
	public String getFilePath(String filePath){
		return getRootPath()+filePath;
	}
	
	public String getRootPath() {
		// 取得根目录路径
		String rootPath = getClass().getResource("/").getFile().toString();
		String currentPath1 = getClass().getResource(".").getFile().toString();
		String currentPath2 = getClass().getResource("").getFile().toString();
		String parentPath = getClass().getResource("../").getFile().toString();

		return rootPath.substring(0, rootPath.lastIndexOf("target/classes"));

	}
	
	//获取某个文件夹下的文件
	public File[] getFiles(String filePath){
		File[] files = new File[]{};
		File file = new File(filePath);
		if(file.isDirectory()){
			files = file.listFiles();
			System.out.println(files.length);
		}
		return files;
		
	}
	
	//获取某个文件夹下的文件的具体路径
	public String[] getFilesPath(String filePath){
		File[] files = getFiles(filePath);
		String[] filesPath = new String[files.length];
		for (int i = 0; i < filesPath.length; i++) {
			filesPath[i] = files[i].getAbsolutePath();
		}
		return filesPath;
	}
	
	public String getHtmlContentByUrl(String ssourl) {
		try {
			URL url = new URL(ssourl);
			HttpURLConnection con = (HttpURLConnection) url.openConnection();

			con.setDoInput(true);        //设置输入流采用字节流
            con.setDoOutput(true);        //设置输出流采用字节流
			con.setInstanceFollowRedirects(false);
			con.setUseCaches(false);//设置缓存
			con.setAllowUserInteraction(false);
			con.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
			con.setRequestProperty("Charset", "utf-8");
			
			con.connect();
			StringBuffer sb = new StringBuffer();
			String line = "";
			BufferedReader URLinput = new BufferedReader(new InputStreamReader(
					con.getInputStream(),"utf-8"));
			while ((line = URLinput.readLine()) != null) {
				sb.append(line);
			}
			con.disconnect();

			return sb.toString();//.toLowerCase()
		} catch (Exception e) {

			return null;
		}
	}

	public String writeJsDataToFile(String write2Path, String jsPath) throws FileNotFoundException, UnsupportedEncodingException{
		PrintWriter pw = new PrintWriter(new OutputStreamWriter(new FileOutputStream(write2Path), "utf-8"));// 要将写的内容保存到哪里的文件路径
		pw.println(getHtmlContentByUrl(jsPath));// http://www.baidu.com是你要访问的页面
		pw.flush();
		pw.close();
		return write2Path;
	}
	
	public static void writeDataToFile(String content, String path) throws FileNotFoundException, UnsupportedEncodingException{
		PrintWriter pw = new PrintWriter(new OutputStreamWriter(new FileOutputStream(path), "utf-8"));// 要将写的内容保存到哪里的文件路径
		pw.println(content);
		pw.flush();
		pw.close();
	}
	
	public static String readfile(String path){
		
		StringBuilder sb = new StringBuilder();
		try {
			String encoding = "utf-8";
			File file = new File(path);
			if (file.isFile() && file.exists()) { // 判断文件是否存在
				InputStreamReader read = new InputStreamReader(
						new FileInputStream(file), encoding);// 考虑到编码格式
				BufferedReader bufferedReader = new BufferedReader(read);
				String lineTxt = null;
				
				while ((lineTxt = bufferedReader.readLine()) != null) {
					sb.append(lineTxt);
				}
				read.close();
			} else {
				System.out.println("找不到指定的文件");
			}
		} catch (Exception e) {
			System.out.println("读取文件内容出错");
			e.printStackTrace();
		}
		return sb.toString();
	}
	
	public static void main(String[] args) {
		FileUtil fileUtil = new FileUtil();
		String path=fileUtil.getFilePath("testres/abnormalpics");
		
	}
	

}
