package app.dao;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import app.dao.entity.Users;
import app.dao.idao.IUsersDAO;
import app.dao.repo.UsersRepository;

@Repository
public class UsersDAO implements IUsersDAO {
	
	@Resource
	private UsersRepository repo;
	
	@Override
	@Transactional
	public Users getUserById(Long id) {
		return repo.findOne(id);
	}

	@Override
	@Transactional
	public List<Users> getAllUser() {
		return repo.findAll();
	}

	@Override
	@Transactional
	public Users insertUser(Users newUser) {
		return repo.saveAndFlush(newUser);
	}


}
