package robocode.util;

import netscape.javascript.JSException;
import netscape.javascript.JSObject;

public class LogUtil {
	private static JSObject window;
	
	private static final String DEBUG = "[ Debug] ";   
	public static final String APPLET_LOG = "aLog";

	public static  JSObject getWindow() {
		return window;
	}

	public  static  void setWindow(JSObject window) {
		LogUtil.window = window;
		LogUtil.log("window Loaded");
	}
	
	
	public static void log(String s){
		if(window!=null)
		 window.call("writeSummary", s);
		else
			System.out.println(s);
	}
	
	/**
	 * Log RoboCode running information to javascript.
	 * @param s
	 */
	public static void aLog(String s) {
	    if (window != null) {
	        try {
	            window.call("aLog", DEBUG + s);
	        } catch (JSException e) {
	            System.out.println(e.getMessage());
	        }
	    } else {
	        System.out.println(DEBUG + s);
	    }
	}
}
