package app.authentication;

import java.util.List;

public class JwtToken {
    // Private role
    private List<String> roles;

    private String group;

    public JwtToken(List<String> roles, String group) {
        this.roles = roles;
        this.group = group;
    }

    public JwtToken() {
    }

    public List<String> getRoles() {
        return roles;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }

    public String getGroup() {
        return group;
    }

    public void setGroup(String group) {
        this.group = group;
    }
}
