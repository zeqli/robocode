package app.dao.idao;

import java.util.List;

import org.springframework.stereotype.Service;

import app.dao.entity.Users;

@Service
public interface IUsersDAO {
	Users getUserById(Long id);
	List<Users> getAllUser();
	Users insertUser(Users newUser);
}
