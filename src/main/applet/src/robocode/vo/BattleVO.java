package robocode.vo;

public class BattleVO {
    
    private Integer numRounds;
    
    private Double gunCoolingRate;
    
    private Long inactivityTime;
    
    private String selectedRobots;
    
    public BattleVO() {   }


    public Integer getNumRounds() {
        return numRounds;
    }

    public void setNumRounds(Integer numRounds) {
        this.numRounds = numRounds;
    }

    public Double getGunCoolingRate() {
        return gunCoolingRate;
    }

    public void setGunCoolingRate(Double gunCoolingRate) {
        this.gunCoolingRate = gunCoolingRate;
    }

    public Long getInactivityTime() {
        return inactivityTime;
    }

    public void setInactivityTime(Long inactivityTime) {
        this.inactivityTime = inactivityTime;
    }

    public String getSelectedRobots() {
        return selectedRobots;
    }

    public void setSelectedRobots(String selectedRobots) {
        this.selectedRobots = selectedRobots;
    }
    
    

}
