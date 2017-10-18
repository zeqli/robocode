package app.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

/**
 * Web Security Setting.
 * Please consult https://spring.io/guides/gs/securing-web/ for more indepth details
 */
@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {        
        
        http
        .authorizeRequests()
            .anyRequest().permitAll();

        http.csrf().disable();

    }
    
    @Override
    public void configure(final WebSecurity web) throws Exception {
        // Allow resource traffic 
        web.ignoring().antMatchers("/resources/**");
    }
    
    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        /* Define System Administrator Account & Role */
        auth
            .inMemoryAuthentication()
                .withUser("admin").password("admin").roles("USER");
    }

}
