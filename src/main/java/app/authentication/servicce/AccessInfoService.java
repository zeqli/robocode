package app.authentication.servicce;

import app.dao.entity.*;
import app.dao.idao.IUserGroupDAO;
import app.dao.repo.RoleAccessRepository;
import app.dao.repo.UserGroupRepository;
import app.dao.repo.UserRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class AccessInfoService {
    @Autowired
    IUserGroupDAO userGroupDAO;

    @Resource
    private UserGroupRepository userGrouprepo;

    @Resource
    private UserRoleRepository userRoleRepo;

    @Resource
    private RoleAccessRepository roleAccessRepo;



    public List<Groups> getGroupsByUserId(Long uid) {
        List<Groups> res = new ArrayList<>();
        List<UserGroup> userGroups = userGrouprepo.findByUid(uid);
        if (userGroups != null) {
            for(UserGroup userGroup: userGroups) {
                res.add(userGroup.getGroups());
            }
        }
        return res;
    }

    public List<Role> getRolesByUserId(Long uid) {
        List<Role> res = new ArrayList<>();
        List<UserRole> userRoles = userRoleRepo.findByUid(uid);
        if (userRoles != null) {
            for(UserRole userGroup: userRoles) {
                res.add(userGroup.getRole());
            }
        }
        return res;
    }

    public List<Access> getAllAccesses(List<Long> rids) {
        Set<Access> accesses = new HashSet<>();
        for(Long rid: rids) {
            List<RoleAccess> acs = roleAccessRepo.findByRoleId(rid);
            for (RoleAccess ra: acs) {
                accesses.add(ra.getAccess());
            }
        }
        List<Access> res = new ArrayList<>();
        res.addAll(accesses);
        return res;
    }

}
