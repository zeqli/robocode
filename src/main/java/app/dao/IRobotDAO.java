package app.dao;

import app.entity.DomainInfo;
import app.entity.Robot;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IRobotDAO {

    List<Robot> getAllRobots();
    Robot getRobotById(Long id);
    Robot getRobotByPackageId(String pkgId);
    Robot addRobot(Robot robot);
    Robot updateRobot(Robot robot);
    Robot deleteRobot(Long id);
    List<Robot> findByPackageIdAndRobotId(String packageId, String robotId);
    List<DomainInfo> getAllDomainInformation();

}
