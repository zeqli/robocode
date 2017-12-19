package app.dao.idao;

import java.util.List;

import org.springframework.stereotype.Service;

import app.dao.entity.GroupRoleMap;

@Service
public interface IGroupRoleMapDAO {

	GroupRoleMap getGroupRoleMapById(Long id);
	List<GroupRoleMap> getAllGroupRoleMap();
	GroupRoleMap insertGroupRoleMap(GroupRoleMap groupRoleMap);
}
