package app.dao.idao;

import java.util.List;

import org.springframework.stereotype.Service;

import app.dao.entity.UserGroup;

@Service
public interface IUserGroupDAO {
	
	UserGroup getUserGroupById(Long id);
	List<UserGroup> getAllUserGroup();
	UserGroup insertUserGroup(UserGroup userGroup);
}
