package app.robocode.controller;

import app.dao.IRobotDAO;
import app.entity.DomainInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CreateRobotController {

    @Autowired
    IRobotDAO robotDAO;

    @RequestMapping(value = "api/v1/robocode/domain-info", method = RequestMethod.GET)
    public List<DomainInfo> getDomainInformation() {
        List<DomainInfo> domainInfo = robotDAO.getAllDomainInformation();
        return domainInfo;
    }

}
