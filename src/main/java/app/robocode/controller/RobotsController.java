package app.robocode.controller;

import app.base.BaseController;
import app.dao.IRobotDAO;
import app.entity.Robot;
import app.robocode.service.RobotCompiler;
import app.robocode.vo.SimpleRobot;
import app.utils.DateUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class RobotsController extends BaseController{

    @Autowired
    IRobotDAO robotDAO;

    @Autowired
    RobotCompiler compiler;

    @RequestMapping("/robot/all")
    public String getAllRobot() {
        List<Robot> robots = robotDAO.getAllRobots();

        for (Robot bot : robots) {
            System.out.println(bot.toString());
        }
        return "done";
    }


    @RequestMapping(value = "api/v1/robocode/robot/new/save", method = RequestMethod.POST)
    public Map<String, Object> saveNewRobot(@RequestBody SimpleRobot robot) {
        Robot robotDto = new Robot(robot.getPackageId(), robot.getRobotId(), robot.getAccess(), robot.getRobotSrcCode());
        robotDto.setUserId(robot.getUserId());
        robotDto.setFilePath("C:/robocode/robots/" + robot.getPackageId() + "/" + robot.getRobotId() + ".java");
        robotDto.setCreatedDate(DateUtil.getDateNowAsString());
        robotDto.setUpdatedDate(DateUtil.getDateNowAsString());
        this.robotDAO.addRobot(robotDto);
        Map<String, Object> res = new HashMap<>();
        res.put("response", "success");
        return res;
    }

    @RequestMapping(value = "api/v1/robocode/robot/save", method = RequestMethod.POST)
    public Map<String, Object> saveRobot(@RequestBody Robot robot) {

        Robot legacyRobot = this.robotDAO.getRobotById(robot.getId());
        legacyRobot.setUpdatedDate(robot.getUpdatedDate());
        legacyRobot.setRobotSrcCode(robot.getRobotSrcCode());
        legacyRobot.setUpdatedDate(DateUtil.getDateNowAsString());
        this.robotDAO.updateRobot(legacyRobot);


        Map<String, Object> res = new HashMap<>();
        res.put("response", "success");
        return res;
    }

    @RequestMapping(value = "api/v1/robocode/robot/{id}", method = RequestMethod.GET)
    public Robot getRobotById(@PathVariable("id") String id) {
        return this.robotDAO.getRobotById(Long.parseLong(id));
    }


    @RequestMapping(value = "api/v1/robocode/robots/all", method = RequestMethod.GET)
    public List<Robot> getAllRobots() {
        List<Robot> robots = robotDAO.getAllRobots();
        return robots;
    }

    @RequestMapping(value = "api/v1/robocode/robot/{id}/compile", method = RequestMethod.GET)
    public Map<String, Object> compileRobot(@PathVariable("id") String id) {
        Map<String, Object> res = new HashMap<>();

        Robot robot = this.robotDAO.getRobotById(Long.parseLong(id));

        try {
            byte[] binary = compiler.compile(robot.getPackageId(), robot.getRobotId(), robot.getRobotSrcCode(), " ");
            robot.setBlob(binary);
            this.robotDAO.updateRobot(robot);
        } catch (Exception e) {
            log.debug("RobotsController --> compileRobot() " + e.getMessage());
            e.printStackTrace();
            res.put("response", "Error Occur While Compiling. Please check Robot syntax and do not use experimental robot");
            return res;
        }

        res.put("response", "success");
        return res;
    }


}
