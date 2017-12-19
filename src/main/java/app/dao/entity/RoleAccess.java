package app.dao.entity;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "Role_Access")
public class RoleAccess {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;
    
    @Column(name = "role_id", nullable = false)
    private Long roleId;
    
    @ManyToOne
    @JoinColumn(name = "access_id")
    private Access access;
    
    @CreationTimestamp
    @Column(name = "create_time")
    private Date create_time;

	public Long getId() {
		return id;
	}


	public Access getAccess() {
		return access;
	}

	public Date getCreate_time() {
		return create_time;
	}

	public void setId(Long id) {
		this.id = id;
	}


	public void setAccess(Access access) {
		this.access = access;
	}

	public void setCreate_time(Date create_time) {
		this.create_time = create_time;
	}

	public Long getRoleId() {
		return roleId;
	}

	public void setRoleId(Long roleId) {
		this.roleId = roleId;
	}
}
