package app.dao.idao;

import app.dao.entity.UserGroup;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IUserGroupDAO {
	
	UserGroup getUserGroupById(Long id);
	List<UserGroup> getAllUserGroup();
	UserGroup insertUserGroup(UserGroup userGroup);
}
