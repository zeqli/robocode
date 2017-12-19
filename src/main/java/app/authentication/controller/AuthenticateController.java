package app.authentication.controller;


import app.authentication.JwtToken;
import app.authentication.LoginForm;
import app.authentication.RolesRequest;
import app.authentication.UserDetails;
import app.authentication.servicce.AccessInfoService;
import app.dao.entity.Access;
import app.dao.entity.Groups;
import app.dao.entity.Role;
import app.dao.entity.Users;
import app.dao.idao.IUsersDAO;
import app.dto.ResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class AuthenticateController {

    private static final String SUCCESS = "success";
    private static final String ERROR = "error";

    @Autowired
    private IUsersDAO usersDAO;

    @Autowired
    private AccessInfoService accessInfoService;

    @RequestMapping(value = "/api/authenticate", method = RequestMethod.POST, produces = "application/json")
    public @ResponseBody
    ResponseDTO<UserDetails> authenticate(@RequestBody LoginForm loginForm){

        ResponseDTO<UserDetails> response = new ResponseDTO<>();
        UserDetails userDetails = null;

        Users user = usersDAO.getUserByCredential(loginForm.getUsername(), loginForm.getPassword());

        if (user != null) {
            List<Groups> groups = accessInfoService.getGroupsByUserId(user.getId());

            // Default
            Groups currentGroup = groups.size() > 0 ? groups.get(0) : Groups.defaultGroup();

            List<Role> roles = accessInfoService.getRolesByUserId(user.getId());

            userDetails = new UserDetails();
            userDetails.setId(String.valueOf(user.getId()));
            userDetails.setUsername(user.getUserID());
            userDetails.setToken(new JwtToken(roles, currentGroup, groups));

            response.setStatus(SUCCESS);
        } else {
            response.setStatus(ERROR);
        }
        response.setData(userDetails);

        return response;
    }


    @RequestMapping(value = "/api/accesses", method = RequestMethod.POST, produces = "application/json")
    public List<Access> getUserAccesses(@RequestBody RolesRequest rr) {
        List<Long> rids = rr.getRids();
        List<Access> res = new ArrayList<>();
        if (rids != null) {
            res = accessInfoService.getAllAccesses(rids);
        }
        return res;
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
