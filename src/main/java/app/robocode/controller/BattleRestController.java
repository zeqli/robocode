package app.robocode.controller;

import app.base.BaseController;
import app.entity.Robot;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class BattleRestController extends BaseController{


    @RequestMapping(value = "api/v1/robocode/battle/init", method = RequestMethod.POST)
    public Map<String, Object> battleInitialize(@RequestBody List<Robot> robotList, HttpServletRequest request) {
        log.debug("RobotsBattleController --> battleInitialize() ");
//        String baseUrl = "http://" + request.getServerName() + ":" +request.getLocalPort();
        String baseUrl = "http://" + request.getServerName();




        String queryParam = "?robots=";
        for(Robot robot: robotList) {
            queryParam += robot.getPackageId() + "." + robot.getRobotId() + ",";
        }
        if (robotList != null && robotList.size() > 0) {
            queryParam = queryParam.substring(0, queryParam.length() - 1);
        }
        String redirectUrl = "/battle/play/" + queryParam;
        log.debug("=================== Redirect Url " + redirectUrl + " ===================");

        Map<String, Object> response = new HashMap<>();
        response.put("redirectUrl", baseUrl + redirectUrl);
        return response;
    }
}
