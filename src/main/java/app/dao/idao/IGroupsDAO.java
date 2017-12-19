package app.dao.idao;

import java.util.List;

import org.springframework.stereotype.Service;

import app.dao.entity.Groups;

@Service
public interface IGroupsDAO {
	
	Groups getGroupById(Long id);
	List<Groups> getAllGroup();
	Groups insertGroup(Groups newGroup);

}
