package app.dao.repo;


import app.dao.entity.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserRoleRepository extends JpaRepository<UserRole, Long> {
    List<UserRole> findByUid(Long uid);
}
