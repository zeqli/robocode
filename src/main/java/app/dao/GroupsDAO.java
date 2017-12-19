package app.dao;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import app.dao.entity.Groups;
import app.dao.idao.IGroupsDAO;
import app.dao.repo.GroupsRepository;

@Repository
public class GroupsDAO implements IGroupsDAO {
	
	@Resource
	private GroupsRepository repo;

	@Override
	@Transactional
	public Groups getGroupById(Long id) {
		return repo.findOne(id);
	}

	@Override
	@Transactional
	public List<Groups> getAllGroup() {
		return repo.findAll();
	}

	@Override
	@Transactional
	public Groups insertGroup(Groups newGroup) {
		return repo.saveAndFlush(newGroup);
	}

}
