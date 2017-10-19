package app.config.data;

import org.springframework.cloud.config.java.AbstractCloudConfig;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import javax.sql.DataSource;

@Configuration
@Profile({"mysql-cloud", "postgres-cloud", "oracle-cloud"})
public class RelationalCloudDataSourceConfig extends AbstractCloudConfig {

    //Connect to the only available relational database service
    @Bean
    public DataSource dataSource() {
        return connectionFactory().dataSource();
    }

}