package app.dao;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import app.dao.entity.RoleAccess;
import app.dao.idao.IRoleAccessDAO;
import app.dao.repo.RoleAccessRepository;

@Repository
public class RoleAccessDAO implements IRoleAccessDAO {
	
	@Resource
	private RoleAccessRepository repo;

	@Override
	@Transactional
	public RoleAccess getRoleAccessById(Long id) {
		return repo.findOne(id);
	}

	@Override
	@Transactional
	public List<RoleAccess> getAllRoleAccess() {
		return repo.findAll();
	}

	@Override
	@Transactional
	public RoleAccess insertRoleAccess(RoleAccess roleAccess) {
		return repo.saveAndFlush(roleAccess);
	}
	
	
	
}
