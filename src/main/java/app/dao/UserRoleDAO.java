package app.dao;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import app.dao.entity.UserRole;
import app.dao.idao.IUserRoleDAO;
import app.dao.repo.UserRoleRepository;

@Repository
public class UserRoleDAO implements IUserRoleDAO {
	
	@Resource
	private UserRoleRepository repo;

	@Override
	@Transactional
	public UserRole getUserRoleById(Long id) {
		return repo.findOne(id);
	}

	@Override
	@Transactional
	public List<UserRole> getAllUserRole() {
		return repo.findAll();
	}

	@Override
	@Transactional
	public UserRole insertUserRole(UserRole userRole) {
		return repo.saveAndFlush(userRole);
	}

}
