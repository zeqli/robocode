package app.dao.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import app.dao.entity.Groups;

@Service
public interface GroupsRepository extends JpaRepository<Groups, Long> {
	
}
