package app.authentication;

import app.dao.entity.Groups;
import app.dao.entity.Role;

import java.util.List;

public class JwtToken {
    // Private role
    private List<Role> roles;

    private Groups group;

    private List<Groups> groups;

    public JwtToken(List<Role> roles, Groups group, List<Groups> groups) {
        this.roles = roles;
        this.group = group;
        this.groups = groups;
    }

    public JwtToken() {
    }

    public List<Role> getRoles() {
        return roles;
    }

    public void setRoles(List<Role> roles) {
        this.roles = roles;
    }

    public Groups getGroup() {
        return group;
    }

    public void setGroup(Groups group) {
        this.group = group;
    }

    public List<Groups> getGroups() {
        return groups;
    }

    public void setGroups(List<Groups> groups) {
        this.groups = groups;
    }
}
