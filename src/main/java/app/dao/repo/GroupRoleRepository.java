package app.dao.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import app.dao.entity.GroupRole;

@Service
public interface GroupRoleRepository extends JpaRepository<GroupRole, Long> {

}
