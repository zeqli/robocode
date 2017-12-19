package app.dao;

import app.dao.entity.UserGroup;
import app.dao.idao.IUserGroupDAO;
import app.dao.repo.UserGroupRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

@Repository
public class UserGroupDAO implements IUserGroupDAO {
	
	@Resource
	private UserGroupRepository repo;

	@Override
	@Transactional
	public UserGroup getUserGroupById(Long id) {
		return repo.findOne(id);
	}

	@Override
	@Transactional
	public List<UserGroup> getAllUserGroup() {
		return repo.findAll();
	}

	@Override
	@Transactional
	public UserGroup insertUserGroup(UserGroup userGroup) {
		return repo.saveAndFlush(userGroup);
	}
	
}
