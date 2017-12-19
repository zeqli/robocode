package app.dao.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import app.dao.entity.GroupRoleMap;


@Service
public interface GroupRoleMapRepository extends JpaRepository<GroupRoleMap, Long> {

}
