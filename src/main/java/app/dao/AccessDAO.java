package app.dao;

import app.dao.idao.IAccessDAO;
import app.dao.entity.Access;
import app.dao.repo.AccessRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

@Repository
public class AccessDAO implements IAccessDAO {


    @Resource
    private AccessRepository repo;

    @Override
    @Transactional
    public Access getAccessById(Long id) {
        return repo.findOne(id);
    }

    @Override
    @Transactional
    public List<Access> getAllAccess() {
        return repo.findAll();
    }

	@Override
	@Transactional
	public Access insertAccess(Access newAccess) {
		
		return repo.saveAndFlush(newAccess);
	}


}
