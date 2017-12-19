package app.entity;

public class DomainInfo {

    private String userID;

    private String packageID;

    private String robotID;

    private Integer groupID;

    public DomainInfo() {}

    public DomainInfo(String userID, String packageID, String robotID, Integer groupID) {
        this.userID = userID;
        this.packageID = packageID;
        this.robotID = robotID;
        this.groupID = groupID;
    }

    public String getUserID() {
        return userID;
    }

    public void setUserID(String userID) {
        this.userID = userID;
    }

    public String getPackageID() {
        return packageID;
    }

    public void setPackageID(String packageID) {
        this.packageID = packageID;
    }

    public String getRobotID() {
        return robotID;
    }

    public void setRobotID(String robotID) {
        this.robotID = robotID;
    }

    public Integer getGroupID() {
        return groupID;
    }

    public void setGroupID(Integer groupID) {
        this.groupID = groupID;
    }
}
