package app.dao;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import app.dao.entity.GroupRole;
import app.dao.idao.IGroupRole;
import app.dao.repo.GroupRoleRepository;

@Repository
public class GroupRoleDAO implements IGroupRole {
	
	@Resource
	private GroupRoleRepository repo;

	@Override
	@Transactional
	public GroupRole getGroupRoleById(Long id) {
		return repo.findOne(id);
	}

	@Override
	@Transactional
	public List<GroupRole> getAllGroupRole() {
		return repo.findAll();
	}

	@Override
	@Transactional
	public GroupRole insertGroupRole(GroupRole groupRole) {
		return repo.saveAndFlush(groupRole);
	}
}
