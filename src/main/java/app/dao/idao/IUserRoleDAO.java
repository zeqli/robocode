package app.dao.idao;


import java.util.List;

import org.springframework.stereotype.Service;

import app.dao.entity.UserRole;

@Service
public interface IUserRoleDAO {
	UserRole getUserRoleById(Long id);
	List<UserRole> getAllUserRole();
	UserRole insertUserRole(UserRole userRole);
}
