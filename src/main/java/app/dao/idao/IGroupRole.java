package app.dao.idao;

import java.util.List;

import org.springframework.stereotype.Service;

import app.dao.entity.GroupRole;

@Service
public interface IGroupRole {
	GroupRole getGroupRoleById(Long id);
	List<GroupRole> getAllGroupRole();
	GroupRole insertGroupRole(GroupRole groupRole);
}
