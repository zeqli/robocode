package app.redirect;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ForwardController {

    @RequestMapping(value = {"robocode","/robocode/**", "/dashboard", "/login"})
    public String redirect() {
        // Forward to home page so that route is preserved.
        return "forward:/index.html";
    }
}