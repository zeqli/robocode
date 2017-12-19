package app.dao.repo;

import app.dao.entity.Access;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public interface AccessRepository extends JpaRepository<Access, Long> {
    
}
