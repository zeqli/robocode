package app.authentication.controller;

import app.authentication.servicce.AccessInfoService;
import app.base.BaseController;
import app.dao.entity.Groups;
import app.dao.idao.IGroupsDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class AccessInfoController extends BaseController {
    @Autowired
    private IGroupsDAO groupsDAO;

    @Autowired
    private AccessInfoService accessInfoService;



    @RequestMapping(value = "/group/update/{id}/{name}", method = RequestMethod.PUT, produces = "application/json")
    public Groups UpdateGroupById(@PathVariable String id, @PathVariable String name) {
        Long idL = null;
        Groups response = null;

        try {
            idL = Long.parseLong(id);
        } catch (Exception e) {
            e.printStackTrace();
        }

        if (idL != null) {
            response = groupsDAO.getGroupById(idL);
        }
        Groups updatedGroup = null;
        if (response != null) {
            response.setName(name);
            updatedGroup = groupsDAO.insertGroup(response);
        }
        return updatedGroup;
    }



    @RequestMapping(value = "/group/{id}", method = RequestMethod.GET, produces = "application/json")
    public Groups getGroupById(@PathVariable String id) {
        Long idL = null;
        Groups response = null;

        try {
            idL = Long.parseLong(id);
        } catch (Exception e) {
            e.printStackTrace();
        }

        if (idL != null) {
            response = groupsDAO.getGroupById(idL);
        }

        return response;
    }



    @RequestMapping(value = "/group/list", method = RequestMethod.GET, produces = "application/json")
    public List<Groups> getAllGroupInfo() {
        List<Groups> response = null;
        response = groupsDAO.getAllGroup();
        return response;
    }


    @RequestMapping(value = "/group/new/{name}", method = RequestMethod.POST, produces = "application/json")
    public Groups createGroup(@PathVariable String name){
        Groups response = null;

        Groups newGroup = new Groups();
        newGroup.setName(name);
        response = groupsDAO.insertGroup(newGroup);
        return response;
    }




    @RequestMapping(value = "/user/{id}/groups", method = RequestMethod.GET, produces = "application/json")
    public List<Groups> getGroupsByUserId(@PathVariable String id) {

        Long idL = null;
        List<Groups> response = null;

        try {
            idL = Long.parseLong(id);
        } catch (Exception e) {
            e.printStackTrace();
        }

        if (idL != null) {
            response = accessInfoService.getGroupsByUserId(idL);
        } else {
            response = new ArrayList<>();
        }

        return response;
    }
}
