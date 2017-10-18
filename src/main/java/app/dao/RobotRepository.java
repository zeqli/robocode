package app.dao;

import app.entity.Robot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface RobotRepository extends JpaRepository<Robot, Long> {

    static final String FIND_DOMAIN_INFO = "SELECT userID as userId, packageID as packageId, robotID as robotId from robot";

    Robot findByPackageId(String packageId);
    List<Robot> findByPackageIdAndRobotId(String packageId, String robotId);

    @Query(value = FIND_DOMAIN_INFO, nativeQuery = true)
    List<Object[]> getAllDomainInformation();
}
