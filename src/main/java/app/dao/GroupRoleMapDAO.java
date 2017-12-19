package app.dao;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import app.dao.entity.GroupRoleMap;
import app.dao.idao.IGroupRoleMapDAO;
import app.dao.repo.GroupRoleMapRepository;

@Repository
public class GroupRoleMapDAO implements IGroupRoleMapDAO {

	@Resource
	private GroupRoleMapRepository repo;

	@Override
	@Transactional
	public GroupRoleMap getGroupRoleMapById(Long id) {
		return repo.findOne(id);
	}

	@Override
	@Transactional
	public List<GroupRoleMap> getAllGroupRoleMap() {
		return repo.findAll();
	}

	@Override
	@Transactional
	public GroupRoleMap insertGroupRoleMap(GroupRoleMap groupRoleMap) {
		return repo.saveAndFlush(groupRoleMap);
	}
	
	
}
