package app.dao.entity;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class RoleRelation {

    @Id
    @Column(name = "from_role_id", nullable = false)
    private Long fromRoleId;

}
