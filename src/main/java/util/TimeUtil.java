package util;

import java.text.SimpleDateFormat;

public class TimeUtil {
	
	/**
	 * 将当前系统时间转为指定格式的：yyyy-MM-dd HH:mm:ss
	 * @param givenTime
	 * @return
	 */
	public static String getStrDateByGivenTime1(long givenTime){
		String strDate = "";
		String dateFormat = "yyyyMMddHHmmss";//"yyyy-MM-dd HH:mm:ss"
		strDate = new SimpleDateFormat(dateFormat).format(givenTime);
		System.out.println("strDate==  "+strDate);
		return strDate;
	}
	
	/**
	 * @return long类型的当前系统时间
	 */
	public static long getCurrentTime(){
		return System.currentTimeMillis();
	}
	
	public static void main(String[] args) {
		TimeUtil.getStrDateByGivenTime1(getCurrentTime());
	}

}
