package app.registration;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegisterController {

    @RequestMapping("/greet")
    public String index() {
        return "Greetings from Spring Boot!";
    }
}
