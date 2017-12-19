package app.dao.repo;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import app.dao.entity.UserRole;

@Service
public interface UserRoleRepository extends JpaRepository<UserRole, Long> {
	
}
