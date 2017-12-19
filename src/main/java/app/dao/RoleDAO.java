package app.dao;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import app.dao.entity.Role;
import app.dao.idao.IRoleDAO;
import app.dao.repo.RoleRepository;

@Repository
public class RoleDAO implements IRoleDAO {
	
	@Resource
    private RoleRepository repo;
	
	@Override
	@Transactional
	public Role getRoleById(Long id) {
		return repo.findOne(id);
	}
	
	@Override
	@Transactional
	public List<Role> getAllRole() {
		return repo.findAll();
	}

	@Override
	@Transactional
	public Role insertRole(Role newRole) {
		return repo.saveAndFlush(newRole);
	}

}
