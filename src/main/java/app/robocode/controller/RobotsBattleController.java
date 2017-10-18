package app.robocode.controller;

import app.base.BaseController;
import app.robocode.service.PlayBattleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import java.io.IOException;
import java.util.*;

@Controller
public class RobotsBattleController extends BaseController{

    @Autowired
    PlayBattleService playBattleService;

    @RequestMapping(value = "/battle/play", method = RequestMethod.GET)
    public ModelAndView playBattle(@RequestParam(value="robots", required=false, defaultValue="") String[] robotList, Model model)  {
        log.info("Playing Battle..............");

        List<String> res = new ArrayList<>();

        Map<String, List<String>> selection = new HashMap<>();

        for (String name: robotList) {
            String[] tokens = name.split("\\.");
            String packageName = tokens[0];
            String robotName = tokens[1];

            if (selection.containsKey(packageName)) {
                selection.get(packageName).add(robotName);
            } else {
                List<String> robots = new ArrayList<>();
                robots.add(robotName);
                selection.put(packageName, robots);
            }
        }

//        selection.put("sample", Arrays.asList(new String[]{"Crazy", "Corners", "SittingDuck", "NidhiFirst", "FirstAbcd"}));
        // Imcompatible Version
//        selection.put("sampleex", Arrays.asList(new String[]{"Alien", "MasterAndSlave"}));

        try {
            res = playBattleService.prepareRobots(selection);
        } catch (IOException e) {
            e.printStackTrace();
        }

        ModelAndView mav = new ModelAndView();

        mav.addObject("selected_robots", String.join(",", res.get(1)));
        mav.addObject("robots_path", res.get(0));
        log.info("Temp jar " + res.get(0));
        mav.setViewName("robocode-applet");
        return mav;
    }


}
