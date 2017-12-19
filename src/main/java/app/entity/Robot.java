package app.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Arrays;

@Entity
@Table(name="robot")
public class Robot implements Serializable{

    private static final long serialVersionId = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "userId")
    private String userId;


    @Column(name = "packageID")
    private String packageId;


    @Column(name = "robotID")
    private String robotId;


    @Column(name = "dataaccess")
    private String access;


    @Column(name = "filepath")
    private String filePath;


    @Column(name = "CreatedDate")
    private String createdDate;


    @Column(name = "UpdatedDate")
    private String updatedDate;


    @Column(name = "RobotCode")
    private String robotSrcCode;


    @Lob @Basic(fetch = FetchType.LAZY)
    @Column(name = "file", length = 16777215)
    @JsonIgnore
    private byte[] blob;

    @Column(name = "groupId")
    private Integer groupId;

    public Robot() {}

    public Robot(String userId, String packageId, String robotId, String access, String filePath, String createdDate, String updatedDate, String robotSrcCode, byte[] blob, Integer groupId) {
        this.userId = userId;
        this.packageId = packageId;
        this.robotId = robotId;
        this.access = access;
        this.filePath = filePath;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.robotSrcCode = robotSrcCode;
        this.blob = blob;
        this.groupId = groupId;
    }

    public Robot(String packageId, String robotId, String access, String robotSrcCode, Integer groupId) {
        this.packageId = packageId;
        this.robotId = robotId;
        this.access = access;
        this.robotSrcCode = robotSrcCode;
        this.groupId = groupId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String getFilePath() {
        return filePath;
    }

    public void setFilePath(String filePath) {
        this.filePath = filePath;
    }

    public String getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(String createdDate) {
        this.createdDate = createdDate;
    }

    public String getUpdatedDate() {
        return updatedDate;
    }

    public void setUpdatedDate(String updatedDate) {
        this.updatedDate = updatedDate;
    }

    public String getRobotSrcCode() {
        return robotSrcCode;
    }

    public void setRobotSrcCode(String robotSrcCode) {
        this.robotSrcCode = robotSrcCode;
    }

    public byte[] getBlob() {
        return blob;
    }

    public void setBlob(byte[] blob) {
        this.blob = blob;
    }

    public Integer getGroupId() {
        return groupId;
    }

    public void setGroupId(Integer groupId) {
        this.groupId = groupId;
    }

    @Override
    public String toString() {
        return "Robot{" +
                "id=" + id +
                ", userId='" + userId + '\'' +
                ", packageId='" + packageId + '\'' +
                ", robotId='" + robotId + '\'' +
                ", access='" + access + '\'' +
                ", filePath='" + filePath + '\'' +
                ", createdDate='" + createdDate + '\'' +
                ", updatedDate='" + updatedDate + '\'' +
                ", robotSrcCode='" + robotSrcCode + '\'' +
                ", blob=" + Arrays.toString(blob) + '\'' +
                ", groupId" + groupId +
                '}';
    }
}
