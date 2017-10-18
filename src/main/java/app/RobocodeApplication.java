package app;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import app.authentication.controller.HomeController;

@SpringBootApplication
public class RobocodeApplication {
    

    
    private static final Logger log = LoggerFactory.getLogger(HomeController.class);

	public static void main(String[] args) {
	    log.info("********************************** BOOTING Robocode **********************************");
		SpringApplication.run(RobocodeApplication.class, args);
        log.info("********************************** BOOTED Robocode **********************************");
	}
}
