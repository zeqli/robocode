package app.authentication.controller;


import app.authentication.JwtToken;
import app.authentication.LoginForm;
import app.authentication.UserDetails;
import app.dao.entity.Users;
import app.dao.idao.IUsersDAO;
import app.dto.ResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;

@RestController
public class AuthenticateController {

    private static final String SUCCESS = "success";
    private static final String ERROR = "error";

    @Autowired
    private IUsersDAO usersDAO;

    @RequestMapping(value = "/api/authenticate", method = RequestMethod.POST, produces = "application/json")
    public @ResponseBody
    ResponseDTO<UserDetails> authenticate(@RequestBody LoginForm loginForm){

        ResponseDTO<UserDetails> response = new ResponseDTO<>();
        UserDetails userDetails = null;

        Users user = usersDAO.getUserByCredential(loginForm.getUsername(), loginForm.getPassword());

        if (user != null) {
            userDetails = new UserDetails();
            userDetails.setId(String.valueOf(user.getId()));
            userDetails.setUsername(user.getUserID());
            userDetails.setToken(new JwtToken(Arrays.asList("Player", "Admin"), "group1"));

            response.setStatus(SUCCESS);
        } else {
            response.setStatus(ERROR);
        }
        response.setData(userDetails);

        return response;
    }

    @RequestMapping(value = "/api/users/{id}", method = RequestMethod.GET, produces = "application/json")
    public Users getUserById(@PathVariable String id) {
        Long idL = null;
        Users response = null;

        try {
            idL = Long.parseLong(id);
        } catch (Exception e) {
            e.printStackTrace();
        }

        if (idL != null) {
            response = usersDAO.getUserById(idL);
        }

        return response;
    }
}
