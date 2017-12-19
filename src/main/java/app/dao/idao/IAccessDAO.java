package app.dao.idao;

import app.dao.entity.Access;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public interface IAccessDAO {

    Access getAccessById(Long id);

    List<Access> getAllAccess();
    
    Access insertAccess(Access newAccess);
}
