package robocode.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public class DataAccessUtils {
    
    private final String userName = "root";
    private final String password = "root";
    private final String dbms = "mysql";
    private final String serverName = "localhost";
    private final String portNumber = "3306";
    private final String dbName = "robocode";

    public DataAccessUtils() {
        
    }
    
    
    public Connection getConnection() throws SQLException {

        Connection conn = null;
        Properties connectionProps = new Properties();
        connectionProps.put("user", this.userName);
        connectionProps.put("password", this.password);

        if (this.dbms.equals("mysql")) {
            conn = DriverManager.getConnection(
                       "jdbc:" + this.dbms + "://" +
                       this.serverName +
                       ":" + this.portNumber + "/" + 
                       this.dbName,
                       connectionProps);
        } 
        System.out.println("Connected to database");
        return conn;
    }

}
