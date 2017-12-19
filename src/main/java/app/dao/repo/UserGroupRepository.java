package app.dao.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import app.dao.entity.UserGroup;
import app.entity.Robot;

@Service
public interface UserGroupRepository extends JpaRepository<UserGroup, Long> {

}
