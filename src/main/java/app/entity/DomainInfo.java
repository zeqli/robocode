package app.entity;

public class DomainInfo {

    private String userID;

    private String packageID;

    private String robotID;

    public DomainInfo() {}

    public DomainInfo(String userID, String packageID, String robotID) {
        this.userID = userID;
        this.packageID = packageID;
        this.robotID = robotID;
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
}
