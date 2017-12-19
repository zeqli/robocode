package app.robocode.vo;

import java.io.Serializable;

public class SimpleRobot implements Serializable {

    private static final long serialVersionId = 1L;

    private String userId;
    private String packageId;
    private String robotId;
    private String access;
    private String robotSrcCode;

    public SimpleRobot() {};

    public SimpleRobot(String packageId, String robotId, String access, String robotSrcCode) {
        this.packageId = packageId;
        this.robotId = robotId;
        this.access = access;
        this.robotSrcCode = robotSrcCode;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getPackageId() {
        return packageId;
    }

    public void setPackageId(String packageId) {
        this.packageId = packageId;
    }

    public String getRobotId() {
        return robotId;
    }

    public void setRobotId(String robotId) {
        this.robotId = robotId;
    }

    public String getAccess() {
        return access;
    }

    public void setAccess(String access) {
        this.access = access;
    }

    public String getRobotSrcCode() {
        return robotSrcCode;
    }

    public void setRobotSrcCode(String robotSrcCode) {
        this.robotSrcCode = robotSrcCode;
    }
}
