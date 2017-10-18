package app.robocode.controller;

import app.dao.IRobotDAO;
import app.entity.Robot;
import app.robocode.vo.SimpleRobot;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RobotsController {

    @Autowired
    IRobotDAO robotDAO;

    @RequestMapping("/robot/all")
    public String getAllRobot() {
        List<Robot> robots = robotDAO.getAllRobots();

        for (Robot bot : robots) {
            System.out.println(bot.toString());
        }
        return "done";
    }


    @RequestMapping(value = "api/v1/robocode/robot/new/save", method = RequestMethod.POST)
    public String saveNewRobot(@RequestBody SimpleRobot robot) {
        Robot robotDto = new Robot(robot.getPackageId(), robot.getRobotId(), robot.getAccess(), robot.getRobotSrcCode());
        this.robotDAO.addRobot(robotDto);
        return "Success";
    }

    @RequestMapping(value = "api/v1/robocode/robot/save", method = RequestMethod.POST)
    public String saveRobot(@RequestBody Robot robot) {

        Robot legacyRobot = this.robotDAO.getRobotById(robot.getId());
        legacyRobot.setUpdatedDate(robot.getUpdatedDate());
        legacyRobot.setRobotSrcCode(robot.getRobotSrcCode());
        this.robotDAO.updateRobot(legacyRobot);
        return "Success";
    }

    @RequestMapping(value = "api/v1/robocode/robot/{id}", method = RequestMethod.GET)
    public Robot getRobotById(@RequestParam("id") String id) {
        return this.robotDAO.getRobotById(Long.parseLong(id));
    }


    @RequestMapping(value = "api/v1/robocode/robots/all", method = RequestMethod.GET)
    public List<Robot> getAllRobots() {
        List<Robot> robots = robotDAO.getAllRobots();
        return robots;
    }

}
