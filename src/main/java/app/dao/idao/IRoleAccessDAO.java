package app.dao.idao;

import java.util.List;

import org.springframework.stereotype.Service;

import app.dao.entity.RoleAccess;

@Service
public interface IRoleAccessDAO {
	RoleAccess getRoleAccessById(Long id);
	List<RoleAccess> getAllRoleAccess();
	RoleAccess insertRoleAccess(RoleAccess roleAccsess);
}
