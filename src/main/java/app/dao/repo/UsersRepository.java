package app.dao.repo;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import app.dao.entity.Users;

@Service
public interface UsersRepository extends JpaRepository<Users, Long>{

}
