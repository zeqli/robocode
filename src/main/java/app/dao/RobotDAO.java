package app.dao;

import app.entity.DomainInfo;
import app.entity.Robot;
import app.exception.RobotNotFoundException;
import app.utils.DateUtil;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;


@Repository
public class RobotDAO implements IRobotDAO {

    @Resource
    private RobotRepository robotRepository;


    @Override
    @Transactional
    public List<Robot> getAllRobots() {
        return robotRepository.findAll();
    }

    @Override
    @Transactional
    public Robot getRobotById(Long id) {
        return robotRepository.findOne(id);
    }

    @Override
    public Robot getRobotByPackageId(String pkgId) {
        return robotRepository.findByPackageId(pkgId);
    }

    @Override
    @Transactional
    public Robot addRobot(Robot robot) {
        Robot bot = robot;
        return robotRepository.save(bot);
    }

    @Override
    @Transactional(rollbackFor = RobotNotFoundException.class)
    public Robot updateRobot(Robot robot) {
        Robot updatedRobot = robotRepository.findOne(robot.getId());

        if (updatedRobot == null)
            throw new RobotNotFoundException("Failed to update Robot");

        updatedRobot.setId(robot.getId());
        updatedRobot.setUserId(robot.getUserId());
        updatedRobot.setPackageId(robot.getPackageId());
        updatedRobot.setRobotId(robot.getRobotId());
        updatedRobot.setAccess(robot.getAccess());
        updatedRobot.setFilePath(robot.getFilePath());
        updatedRobot.setCreatedDate(robot.getCreatedDate());
        updatedRobot.setUpdatedDate(DateUtil.getDateNowAsString());
        updatedRobot.setRobotSrcCode(robot.getRobotSrcCode());
        updatedRobot.setBlob(robot.getBlob());
        robotRepository.save(updatedRobot);
        return updatedRobot;
    }

    @Override
    @Transactional(rollbackFor = RobotNotFoundException.class)
    public Robot deleteRobot(Long id) throws RobotNotFoundException {
        Robot bot = robotRepository.findOne(id);

        if (bot == null) {
            throw new RobotNotFoundException("Cannot find the robot");
        }

        robotRepository.delete(bot);
        return bot;
    }

    @Override
    public List<Robot> findByPackageIdAndRobotId(String packageId, String robotId) {
        return robotRepository.findByPackageIdAndRobotId(packageId, robotId);
    }

    @Override
    public List<DomainInfo> getAllDomainInformation() {
        List<Object[]> resultSet = robotRepository.getAllDomainInformation();
        List<DomainInfo> res = new ArrayList<>();
        resultSet.forEach((result) -> {
            String userID = (String)result[0];
            String packageID = (String)result[1];
            String robotID = (String)result[2];
            res.add(new DomainInfo(userID, packageID, robotID));
        });
        return res;
    }

}
