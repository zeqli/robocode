package app.authentication.controller;

import app.base.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController extends BaseController {

    @RequestMapping(value = {"/", "/home"}, method = RequestMethod.GET)
    public ModelAndView home(@RequestParam(value="name", required=false, defaultValue="World") String name, Model model)  {
        log.info("Launching Robocode Home");

        ModelAndView mav = new ModelAndView();
        mav.setViewName("../static/index");
        return mav;
    }
}