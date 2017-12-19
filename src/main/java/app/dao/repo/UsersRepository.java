package app.dao.repo;


import app.dao.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public interface UsersRepository extends JpaRepository<Users, Long>{

    Users getUsersByUserIDAndPasswd(String userId, String passwd);
}
