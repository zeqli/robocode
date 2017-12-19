package app.dao.repo;

import app.dao.entity.UserGroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserGroupRepository extends JpaRepository<UserGroup, Long> {
    List<UserGroup> findByUid(Long uid);
}
