package app.authentication;
import java.util.List;

public class RolesRequest {
    List<Long> rids;

    public List<Long> getRids() {
        return rids;
    }

    public void setRids(List<Long> rids) {
        this.rids = rids;
    }
}
