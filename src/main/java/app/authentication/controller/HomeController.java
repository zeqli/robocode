package app.authentication.controller;


import app.dao.entity.Access;
import app.dao.entity.GroupRole;
import app.dao.entity.GroupRoleMap;
import app.dao.entity.Groups;
import app.dao.entity.Role;
import app.dao.entity.RoleAccess;
import app.dao.entity.UserGroup;
import app.dao.entity.UserRole;
import app.dao.entity.Users;
import app.dao.idao.IAccessDAO;
import app.dao.idao.IGroupRole;
import app.dao.idao.IGroupRoleMapDAO;
import app.dao.idao.IGroupsDAO;
import app.dao.idao.IRoleAccessDAO;
import app.dao.idao.IRoleDAO;
import app.dao.idao.IUserGroupDAO;
import app.dao.idao.IUserRoleDAO;
import app.dao.idao.IUsersDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import app.base.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import java.util.*;

@RestController
public class HomeController extends BaseController {

    @Autowired
    private IAccessDAO accessDAO;
    
    @Autowired
    private IRoleDAO roleDAO;
    
    @Autowired
    private IUsersDAO usersDAO;
    
    @Autowired
    private IGroupsDAO groupsDAO;
    
    @Autowired
    private IRoleAccessDAO roleAccessDAO;
    
    @Autowired
    private IUserRoleDAO userRoleDAO;
    
    @Autowired
    private IUserGroupDAO userGroupDAO;
    
    @Autowired
    private IGroupRole groupRoleDAO;
    
    @Autowired
    private IGroupRoleMapDAO groupRoleMapDAO;

    @RequestMapping("/")
    public String home() {
        return "Greetings from Spring Boot!";
    }

    @RequestMapping(value ="/access/{id}", method = RequestMethod.GET, produces = "application/json")
    public Access getAccessById(@PathVariable String id){
        Long idL = null;
        Access response = null;

        try {
            idL = Long.parseLong(id);
        } catch (Exception e) {
            e.printStackTrace();
        }

        if (idL != null) {
             response = accessDAO.getAccessById(idL);
        }
        return response;
    }

    @RequestMapping(value ="/access/list", method = RequestMethod.GET, produces = "application/json")
    public List<Access> getAllAccessInfo(){
        List<Access> response = null;
        response = accessDAO.getAllAccess();
        return response;
    }
    
    @RequestMapping(value ="/role/{id}", method = RequestMethod.GET, produces = "application/json")
    public Role getRoleById(@PathVariable String id) {
    	Long idL = null;
    	Role response = null;
    	
    	try {
    		idL = Long.parseLong(id);
    	} catch (Exception e) {
    		e.printStackTrace();
    	}
    	
    	if (idL != null) {
    		response = roleDAO.getRoleById(idL);
    	}
    	
    	return response;
    }
    
    @RequestMapping(value = "/role/list", method = RequestMethod.GET, produces = "application/json")
    public List<Role> getAllRoleInfo() {
    	List<Role> response = null;
    	response = roleDAO.getAllRole();
    	return response;
    }
    
    @RequestMapping(value = "/user/{id}", method = RequestMethod.GET, produces = "application/json")
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
    
    @RequestMapping(value = "/user/list", method = RequestMethod.GET, produces = "application/json")
    public List<Users> getAllUserInfo() {
    	List<Users> response = null;
    	response = usersDAO.getAllUser();
    	return response;
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
    
    @RequestMapping(value = "/role_access/{id}", method = RequestMethod.GET, produces = "application/json")
    public RoleAccess getRoleAccessById(@PathVariable String id) {
    	Long idL = null;
    	RoleAccess response = null;
    	
    	try {
    		idL = Long.parseLong(id);
    	} catch (Exception e) {
    		e.printStackTrace();
    	}
    	
    	if (idL != null) {
    		response = roleAccessDAO.getRoleAccessById(idL);
    	}
    	
    	return response;
    }
    
    @RequestMapping(value = "/role_access/list", method = RequestMethod.GET, produces = "application/json")
    public List<RoleAccess> getAllRoleAccessInfo() {
    	List<RoleAccess> response = null;
    	response = roleAccessDAO.getAllRoleAccess();
    	return response;
    }
    
    @RequestMapping(value = "/user_role/{id}", method = RequestMethod.GET, produces = "application/json")
    public UserRole getUserRoleById(@PathVariable String id) {
    	Long idL = null;
    	UserRole response = null;
    	
    	try {
    		idL = Long.parseLong(id);
    	} catch (Exception e) {
    		e.printStackTrace();
    	}
    	
    	if (idL != null) {
    		response = userRoleDAO.getUserRoleById(idL);
    	}
    	
    	return response;
    }
    
    @RequestMapping(value = "/user_role/list", method = RequestMethod.GET, produces = "application/json")
    public List<UserRole> getAllUserRoleInfo() {
    	List<UserRole> response = null;
    	response = userRoleDAO.getAllUserRole();
    	return response;
    }
    
    @RequestMapping(value = "/user_group/{id}", method = RequestMethod.GET, produces = "application/json")
    public UserGroup getUserGroupById(@PathVariable String id) {
    	Long idL = null;
    	UserGroup response = null;
    	
    	try {
    		idL = Long.parseLong(id);
    	} catch (Exception e) {
    		e.printStackTrace();
    	}
    	
    	if (idL != null) {
    		response = userGroupDAO.getUserGroupById(idL);
    	}
    	
    	return response;
    }
    
    @RequestMapping(value = "/user_group/list", method = RequestMethod.GET, produces = "application/json")
    public List<UserGroup> getAllUserGroupInfo() {
    	List<UserGroup> response = null;
    	response = userGroupDAO.getAllUserGroup();
    	return response;
    }
    
    @RequestMapping(value = "/group_role/{id}", method = RequestMethod.GET, produces = "application/json")
    public GroupRole getGroupRoleById(@PathVariable String id) {
    	Long idL = null;
    	GroupRole response = null;
    	
    	try {
    		idL = Long.parseLong(id);
    	} catch (Exception e) {
    		e.printStackTrace();
    	}
    	
    	if (idL != null) {
    		response = groupRoleDAO.getGroupRoleById(idL);
    	}
    	
    	return response;
    }
    
    @RequestMapping(value = "/group_role/list", method = RequestMethod.GET, produces = "application/json")
    public List<GroupRole> getAllGroupRoleInfo() {
    	List<GroupRole> response = null;
    	response = groupRoleDAO.getAllGroupRole();
    	return response;
    }
    
    @RequestMapping(value = "/group_role_map/{id}", method = RequestMethod.GET, produces = "application/json")
    public GroupRoleMap getGroupRoleMapById(@PathVariable String id) {
    	Long idL = null;
    	GroupRoleMap response = null;
    	
    	try {
    		idL = Long.parseLong(id);
    	} catch (Exception e) {
    		e.printStackTrace();
    	}
    	
    	if (idL != null) {
    		response = groupRoleMapDAO.getGroupRoleMapById(idL);
    	}
    	
    	return response;
    }

    @RequestMapping(value = "/group_role_map/list", method = RequestMethod.GET, produces = "application/json")
    public List<GroupRoleMap> getAllGroupRoleMapInfo() {
    	List<GroupRoleMap> response = null;
    	response = groupRoleMapDAO.getAllGroupRoleMap();
    	return response;
    }
    
    @RequestMapping(value = "/access/new/{name}", method = RequestMethod.POST, produces = "application/json")
    public Access createAccess(@PathVariable String name){
        Access response = null;
        
        Access newAccess = new Access();
        newAccess.setName(name);
        response = accessDAO.insertAccess(newAccess);
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
    
    @RequestMapping(value = "/role/new/{name}", method = RequestMethod.POST, produces = "application/json")
    public Role createRole(@PathVariable String name){
        Role response = null;
        
        Role newRole = new Role();
        newRole.setName(name);
        response = roleDAO.insertRole(newRole);
        return response;
    }
    
    @RequestMapping(value = "/user/new/{UserID}", method = RequestMethod.POST, produces = "application/json")
    public Users createUser(@PathVariable String UserID){
        Users response = null;
        
        Users newUser = new Users();
        newUser.setUserID(UserID);
        response = usersDAO.insertUser(newUser);
        return response;
    }
    
    @RequestMapping(value = "/group_role/new/{groupID}/{roleID}", method = RequestMethod.POST, produces = "application/json")
    public GroupRole createGroupRole(@PathVariable String groupID, @PathVariable String roleID){
        GroupRole response = null;
        
        GroupRole groupRole = new GroupRole();
        Long gID = null, rID = null;
        
        try {
        	gID = Long.parseLong(groupID);
        } catch (Exception e) {
        	e.printStackTrace();
        }
        
        try {
        	rID = Long.parseLong(roleID);
        } catch (Exception e) {
        	e.printStackTrace();
        }
        
        groupRole.setGroup_id(gID);
        groupRole.setRole(roleDAO.getRoleById(rID));
        
        response = groupRoleDAO.insertGroupRole(groupRole);
        
        return response;
    }
    
    @RequestMapping(value = "/group_role_map/new/{from_groupID}/{from_roleID}/{to_groupID}/{to_roleID}", method = RequestMethod.POST, produces = "application/json")
    public GroupRoleMap createGroupRoleMap(@PathVariable String from_groupID, @PathVariable String from_roleID, @PathVariable String to_groupID, @PathVariable String to_roleID) {
        GroupRoleMap response = null;
        
        GroupRoleMap groupRoleMap = new GroupRoleMap();
        Long toGID = null, toRID = null, fromGID = null, fromRID = null;
        
        try {
        	toGID = Long.parseLong(to_groupID);
        } catch (Exception e) {
        	e.printStackTrace();
        }
        
        try {
        	fromGID = Long.parseLong(from_groupID);
        } catch (Exception e) {
        	e.printStackTrace();
        }
        
        try {
        	toRID = Long.parseLong(to_roleID);
        } catch (Exception e) {
        	e.printStackTrace();
        }
        
        try {
        	fromRID = Long.parseLong(from_roleID);
        } catch (Exception e) {
        	e.printStackTrace();
        }
        
        groupRoleMap.setFrom_group_id(fromGID);
        groupRoleMap.setTo_group_id(toGID);
        groupRoleMap.setFrom_role_id(fromRID);
        groupRoleMap.setRole(roleDAO.getRoleById(toRID));
        
        response = groupRoleMapDAO.insertGroupRoleMap(groupRoleMap);
        
        return response;
    }
    
    @RequestMapping(value = "/role_access/new/{role_id}/{access_id}", method = RequestMethod.POST, produces = "application/json")
    public RoleAccess createRoleAccess(@PathVariable String role_id, @PathVariable String access_id){
        RoleAccess response = null;
        
        RoleAccess roleAccess = new RoleAccess();
        Long rID = null, aID = null;
        
        try {
        	rID = Long.parseLong(role_id);
        } catch (Exception e) {
        	e.printStackTrace();
        }
        
        try {
        	aID = Long.parseLong(access_id);
        } catch (Exception e) {
        	e.printStackTrace();
        }
        
        roleAccess.setRole_id(rID);
        roleAccess.setAccess(accessDAO.getAccessById(aID));
        response = roleAccessDAO.insertRoleAccess(roleAccess);
        
        return response;
    }
    
    @RequestMapping(value = "/user_group/new/{user_id}/{group_id}", method = RequestMethod.POST, produces = "application/json")
    public UserGroup createUserGroup(@PathVariable String user_id, @PathVariable String group_id){
        UserGroup response = null;
        
        UserGroup userGroup = new UserGroup();
        Long uID = null, gID = null;
        
        try {
        	uID = Long.parseLong(user_id);
        } catch (Exception e) {
        	e.printStackTrace();
        }
        
        try {
        	gID = Long.parseLong(group_id);
        } catch (Exception e) {
        	e.printStackTrace();
        }

        userGroup.setGroups(groupsDAO.getGroupById(gID));
        userGroup.setUsr_id(uID);
        response = userGroupDAO.insertUserGroup(userGroup);
        
        return response;
    }
    
    @RequestMapping(value = "/user_role/new/{user_id}/{role_id}", method = RequestMethod.POST, produces = "application/json")
    public UserRole createUserRole(@PathVariable String user_id, @PathVariable String role_id){
        UserRole response = null;
        
        UserRole userRole = new UserRole();
        Long uID = null, rID = null;
        
        try {
        	uID = Long.parseLong(user_id);
        } catch (Exception e) {
        	e.printStackTrace();
        }
        
        try {
        	rID = Long.parseLong(role_id);
        } catch (Exception e) {
        	e.printStackTrace();
        }
        
        userRole.setUsr_id(uID);
        userRole.setRole(roleDAO.getRoleById(rID));
        response = userRoleDAO.insertUserRole(userRole);
        
        return response;
    }
    
    
    @RequestMapping(value = "/access/update/{id}/{name}", method = RequestMethod.PUT, produces = "application/json")
    public Access UpdateAccessById(@PathVariable String id, @PathVariable String name){
        Long idL = null;
        Access response = null;

        try {
            idL = Long.parseLong(id);
        } catch (Exception e) {
            e.printStackTrace();
        }

        if (idL != null) {
             response = accessDAO.getAccessById(idL);
        }
        Access updatedAccess = null;
        if (response != null) {
        	response.setName(name);
        	updatedAccess = accessDAO.insertAccess(response);
        }
        return updatedAccess;
    }
    
    @RequestMapping(value = "/role/update/{id}/{name}", method = RequestMethod.PUT, produces = "application/json")
    public Role UpdateRoleById(@PathVariable String id, @PathVariable String name) {
    	Long idL = null;
    	Role response = null;
    	
    	try {
    		idL = Long.parseLong(id);
    	} catch (Exception e) {
    		e.printStackTrace();
    	}
    	
    	if (idL != null) {
    		response = roleDAO.getRoleById(idL);
    	}
    	Role updatedRole = null;
    	if (response != null) {
    		response.setName(name);
    		updatedRole = roleDAO.insertRole(response);
    	}
    	return updatedRole;
    }
    
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
    
    @RequestMapping(value = "/user/update/{id}/{UserID}", method = RequestMethod.PUT, produces = "application/json")
    public Users UpdateUserById(@PathVariable String id, @PathVariable String UserID) {
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
    	Users updatedUser = null;
    	if (response != null) {
    		response.setUserID(UserID);
    		updatedUser = usersDAO.insertUser(response);
    	}
    	return updatedUser;
    }
    
    @RequestMapping(value = "/group_role/update/{id}/{group_id}/{role_id}", method = RequestMethod.PUT, produces = "application/json")
    public GroupRole UpdateGroupRoleById(@PathVariable String id, @PathVariable String group_id, @PathVariable String role_id) {
    	Long idL = null;
    	GroupRole groupRole = null;
    	GroupRole response = null;
    	Long gID = null, rID = null;
    	
    	try {
    		idL = Long.parseLong(id);
    	} catch (Exception e) {
    		e.printStackTrace();
    	}
    	
    	if (idL != null) {
    		groupRole = groupRoleDAO.getGroupRoleById(idL);
    	}
    	
    	try {
    		gID = Long.parseLong(group_id);
    	} catch (Exception e) {
    		e.printStackTrace();
    	}
    	
    	try {
    		rID = Long.parseLong(role_id);
    	} catch (Exception e) {
    		e.printStackTrace();
    	}
    	
    	groupRole.setGroup_id(gID);
    	groupRole.setRole(roleDAO.getRoleById(rID));
    	response = groupRoleDAO.insertGroupRole(groupRole);
    	
    	return response;
    }
    
    @RequestMapping(value = "/group_role_map/update/{id}/{from_groupID}/{from_roleID}/{to_groupID}/{to_roleID}", method = RequestMethod.PUT, produces = "application/json")
    public GroupRoleMap UpdateGroupRoleMap(@PathVariable String id, @PathVariable String from_groupID, @PathVariable String from_roleID, @PathVariable String to_groupID, @PathVariable String to_roleID) {
        GroupRoleMap response = null;
        
        GroupRoleMap groupRoleMap = null;
        Long idL = null, toGID = null, toRID = null, fromGID = null, fromRID = null;
        
    	try {
    		idL = Long.parseLong(id);
    	} catch (Exception e) {
    		e.printStackTrace();
    	}
    	
    	if (idL != null) {
    		groupRoleMap = groupRoleMapDAO.getGroupRoleMapById(idL);
    	}
        
        try {
        	toGID = Long.parseLong(to_groupID);
        } catch (Exception e) {
        	e.printStackTrace();
        }
        
        try {
        	fromGID = Long.parseLong(from_groupID);
        } catch (Exception e) {
        	e.printStackTrace();
        }
        
        try {
        	toRID = Long.parseLong(to_roleID);
        } catch (Exception e) {
        	e.printStackTrace();
        }
        
        try {
        	fromRID = Long.parseLong(from_roleID);
        } catch (Exception e) {
        	e.printStackTrace();
        }
        
        groupRoleMap.setFrom_group_id(fromGID);
        groupRoleMap.setTo_group_id(toGID);
        groupRoleMap.setFrom_role_id(fromRID);
        groupRoleMap.setRole(roleDAO.getRoleById(toRID));
        
        response = groupRoleMapDAO.insertGroupRoleMap(groupRoleMap);
        
        return response;
    }
    
    @RequestMapping(value = "/role_access/update/{id}/{role_id}/{access_id}", method = RequestMethod.PUT, produces = "application/json")
    public RoleAccess UpdateRoleAccess(@PathVariable String id, @PathVariable String role_id, @PathVariable String access_id){
        RoleAccess response = null;
        
        RoleAccess roleAccess = null;
        
        Long idL = null, rID = null, aID = null;
        
    	try {
    		idL = Long.parseLong(id);
    	} catch (Exception e) {
    		e.printStackTrace();
    	}
    	
    	if (idL != null) {
    		roleAccess = roleAccessDAO.getRoleAccessById(idL);
    	}
        
        try {
        	rID = Long.parseLong(role_id);
        } catch (Exception e) {
        	e.printStackTrace();
        }
        
        try {
        	aID = Long.parseLong(access_id);
        } catch (Exception e) {
        	e.printStackTrace();
        }
        
        roleAccess.setRole_id(rID);
        roleAccess.setAccess(accessDAO.getAccessById(aID));
        response = roleAccessDAO.insertRoleAccess(roleAccess);
        
        return response;
    }
    
    @RequestMapping(value = "/user_group/update/{id}/{user_id}/{group_id}", method = RequestMethod.PUT, produces = "application/json")
    public UserGroup UpdateUserGroup(@PathVariable String id, @PathVariable String user_id, @PathVariable String group_id){
        UserGroup response = null;
        
        UserGroup userGroup = null;
        Long idL = null, uID = null, gID = null;
        
    	try {
    		idL = Long.parseLong(id);
    	} catch (Exception e) {
    		e.printStackTrace();
    	}
    	
    	if (idL != null) {
    		userGroup = userGroupDAO.getUserGroupById(idL);
    	}
        
        try {
        	uID = Long.parseLong(user_id);
        } catch (Exception e) {
        	e.printStackTrace();
        }
        
        try {
        	gID = Long.parseLong(group_id);
        } catch (Exception e) {
        	e.printStackTrace();
        }

        userGroup.setGroups(groupsDAO.getGroupById(gID));
        userGroup.setUsr_id(uID);
        response = userGroupDAO.insertUserGroup(userGroup);
        
        return response;
    }
    
    @RequestMapping(value = "/user_role/update/{id}/{user_id}/{role_id}", method = RequestMethod.PUT, produces = "application/json")
    public UserRole UpdateUserRole(@PathVariable String id, @PathVariable String user_id, @PathVariable String role_id){
        UserRole response = null;
        
        UserRole userRole = new UserRole();
        Long idL = null, uID = null, rID = null;
        
    	try {
    		idL = Long.parseLong(id);
    	} catch (Exception e) {
    		e.printStackTrace();
    	}
    	
    	if (idL != null) {
    		userRole = userRoleDAO.getUserRoleById(idL);
    	}
    	
        try {
        	uID = Long.parseLong(user_id);
        } catch (Exception e) {
        	e.printStackTrace();
        }
        
        try {
        	rID = Long.parseLong(role_id);
        } catch (Exception e) {
        	e.printStackTrace();
        }
        
        userRole.setUsr_id(uID);
        userRole.setRole(roleDAO.getRoleById(rID));
        response = userRoleDAO.insertUserRole(userRole);
        
        return response;
    }

    @RequestMapping(value = {"/", "/home"}, method = RequestMethod.GET)
    public ModelAndView home(@RequestParam(value="name", required=false, defaultValue="World") String name, Model model)  {
        log.info("Launching Robocode Home");

        ModelAndView mav = new ModelAndView();
        mav.setViewName("../static/index");
        return mav;
    }
}