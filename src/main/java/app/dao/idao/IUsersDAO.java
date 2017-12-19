package app.dao.idao;

import app.dao.entity.Users;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IUsersDAO {
	Users getUserById(Long id);
	List<Users> getAllUser();
	Users insertUser(Users newUser);

	Users getUserByCredential(String username, String password);
}
