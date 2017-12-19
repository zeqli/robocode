package app.dao.idao;

import java.util.List;

import org.springframework.stereotype.Service;

import app.dao.entity.Role;

@Service
public interface IRoleDAO {
	Role getRoleById(Long id);
	List<Role> getAllRole();
	Role insertRole(Role newRole);
}
