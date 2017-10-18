/*******************************************************************************
 * Copyright (c) 2001, 2007 Mathew A. Nelson and Robocode contributors
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Common Public License v1.0
 * which accompanies this distribution, and is available at
 * http://robocode.sourceforge.net/license/cpl-v10.html
 *
 * Contributors:
 *     Mathew A. Nelson
 *     - Initial API and implementation
 *     Flemming N. Larsen
 *     - Code cleanup
 *     - Removed check for the system property "SINGLEBUFFER", as it is not used
 *       anymore
 *     - Replaced the noDisplay with manager.setEnableGUI() and isGUIEnabled()
 *     - Replaced the -fps option with the -tps option
 *     - Added -nosound option and disables sound i the -nogui is specified
 *     - Updated to use methods from WindowUtil, FileUtil, Logger, which replaces
 *       methods that has been (re)moved from the robocode.util.Utils class
 *     - Moved the printRunningThreads() from robocode.util.Utils into this class
 *       and added javadoc for it
 *     - Added playing theme music at the startup, if music is provided
 *     - Changed to use FileUtil.getRobotsDir()
 *******************************************************************************/
package robocode;




import java.net.URL;
import java.nio.file.Paths;
import java.security.AccessController;
import java.security.PrivilegedAction;
import java.util.PropertyPermission;

import javax.swing.JApplet;
import javax.swing.JPanel;
import javax.swing.SwingUtilities;

import netscape.javascript.JSException;
import netscape.javascript.JSObject;

import appletComponentArch.DynamicTreePanel;

import robocode.battle.BattleProperties;
import robocode.dialog.WindowUtil;
import robocode.io.FileUtil;
import robocode.io.Logger;
import robocode.manager.RobocodeManager;
import robocode.render.ImageUtil;
import robocode.security.RobocodeSecurityManager;
import robocode.security.RobocodeSecurityPolicy;
import robocode.security.SecureInputStream;
import robocode.security.SecurePrintStream;
import robocode.util.Constants;
import robocode.util.LogUtil;
import robocode.util.StringUtils;
import robocode.vo.BattleVO;


/**
 * Robocode - A programming game involving battling AI tanks.<br>
 * Copyright (c) 2001, 2007 Mathew A. Nelson and Robocode contributors
 *
 * @see <a target="_top" href="http://robocode.sourceforge.net">robocode.sourceforge.net</a>
 *
 * @author Mathew A. Nelson (original)
 * @author Flemming N. Larsen (contributor)
 */
public class Robocode extends JApplet{

	private RobocodeManager manager;

	/**
	 * Use the command-line to start Robocode.
	 * The command is:
	 * <pre>
	 *    java -Xmx512M -Dsun.io.useCanonCaches=false -jar libs/robocode.jar
	 * </pre>
	 *
	 * @param args an array of command-line arguments
	 */
	public static void main(String[] args) {

//		Robocode robocode = new Robocode();
//		robocode.initialize(new String[0]);
	}
	
	
	@Override
	public void init() {
		 setSize( 800, 600);
	     //Execute a job on the event-dispatching thread; creating this applet's GUI.
        try {
            SwingUtilities.invokeAndWait(new Runnable() {
                public void run() {

            		
               /*	 DynamicTreePanel newContentPane = new DynamicTreePanel();
                     newContentPane.setOpaque(true); 
                     setContentPane(newContentPane);*/
         	       
                }
            });
        } catch (Exception e) { 
            System.err.println("createGUI didn't complete successfully");
        }
	}
	public Robocode() {}
	
	@SuppressWarnings("unchecked")
    @Override
	public void start() {
//		Robocode robocode = new Robocode();
	    
	    AccessController.doPrivileged((PrivilegedAction) () -> {
            // privileged code goes here, for example:
            System.out.println("Current Working Directory");
            System.out.println(Paths.get(".").toAbsolutePath().normalize().toString());
            return null; // nothing to return
        });

//	    // Check Applet Permission
//
//	    SecurityManager manager = System.getSecurityManager();
//
//	    if (manager != null) {
//
//	        try {
//	        // RobotClassLoader
//	        manager.checkPermission(new RuntimePermission("createClassLoader"));
//
//	        // Exit Robocode Applet
//	        manager.checkPermission(new RuntimePermission("exitVM.0"));
//
//	        manager.checkPermission(new PropertyPermission("NOSECURITY", "read"));
//	        } catch (SecurityException e) {
//	            e.printStackTrace(System.out);
//	        }
//	    }
    	System.out.println("[ Debug] document base url " + getDocumentBase());
    	System.out.println("[ Debug] code base url " + getCodeBase());
		URL url = getDocumentBase();
		FileUtil.setUrl(getCodeBase());
		FileUtil.setCodeBaseUrl(getCodeBase());
		FileUtil.setDocBaseUrl(getDocumentBase());
		
		/* The browser window object */
		JSObject window = null;
		try {
		    window = JSObject.getWindow(this); 
		} catch (JSException e) {
		    System.out.println(e.getMessage());
		}
        String summary = "hello world";
        LogUtil.setWindow(window);
        LogUtil.log(summary);
        LogUtil.aLog(summary);
        LogUtil.log("codebase url:: " + url.getFile());
        LogUtil.log(url.getFile());
        
//        BattleVO battleMeta = (BattleVO)window.eval("getBattleInfo()");
		JPanel newContentPane = initialize(new String[0], null); 
		setContentPane(newContentPane); 
	}
	
	/**
	 * Initialize Robocode 
	 * @param args
	 * @return
	 */
	public JPanel initialize(String args[], BattleVO battleInfo) {
	    

		try {
			manager = new RobocodeManager(false, null);

			Thread.currentThread().setName("Application Thread");
	        
	        
			/* Set Battle Specifications */
			BattleProperties battleProperties = manager.getBattleManager().getBattleProperties();
			
			
			String selectedRobots = null;
			if (battleInfo != null) {
			    selectedRobots = StringUtils.defaultString(
			            battleInfo.getSelectedRobots(), 
			            "sample.Corners,sample.Fire,sample.Target,sample.Walls");

			    
			    
			    Integer numRounds = battleInfo.getNumRounds();
			    Double coolRates = battleInfo.getGunCoolingRate();
			    Long inactiveTime = battleInfo.getInactivityTime();
			    
			    
                if (numRounds != null) {
                    battleProperties.setNumRounds(numRounds);
                }

                if (coolRates != null) {
                    battleProperties.setGunCoolingRate(coolRates);
                }

                if (inactiveTime != null) {
                    battleProperties.setInactivityTime(inactiveTime);
                }
			    
			} else {
//			    selectedRobots = "sample.Corners,sample.Fire,sample.Target,sample.Walls";
                selectedRobots = "sample.ABC,sample.NidhiFirst";
			}
			
            battleProperties.setSelectedRobots(selectedRobots);
			
			
			/* 
			 * Border Sentry and Hide Enemy Name properties are not available for 
			 * current version of RoboCode 
			 * */
//            String borderSize = getParameter(Constants.BATTLE_SENTRY_BORDER_SIZE); 
//            String hideEnemyName = getParameter(Constants.BATTLE_HIDE_ENEMY_NAME); 

			LogUtil.log(battleProperties.toString());
			manager.getBattleManager().startNewBattle(battleProperties, Constants.EXIT_ON_COMPLETE, Constants.NO_REPLAY);
			//manager.getBattleManager().getBattle().setDesiredTPS(tps);
			
			
			JPanel panel = manager.getWindowManager().getRobocodeFrame().getRobocodeContentPane();
			//panel.setBounds(x, y, width, height)
			panel.setBounds(100, 100, 500, 600);
			/*//setContentPane(panel);
			frame.setContentPane(panel);
			frame.setVisible(true);
			frame.setTitle("Raghav");*/
	        panel.setOpaque(true); 
			return panel;
		} catch (Throwable e) {
			Logger.log(e);
			return null;
		}
	}
	

	
}
