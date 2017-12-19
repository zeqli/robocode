package app.dao.repo;

import app.dao.entity.RoleAccess;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface RoleAccessRepository extends JpaRepository<RoleAccess, Long> {

    List<RoleAccess> findByRoleId(Long rid);
}
