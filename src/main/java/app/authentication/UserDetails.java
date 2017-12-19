package app.authentication;

public class UserDetails {
    private String id;

    private String username;

    private JwtToken token;

    public UserDetails() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public JwtToken getToken() {
        return token;
    }

    public void setToken(JwtToken token) {
        this.token = token;
    }
}
