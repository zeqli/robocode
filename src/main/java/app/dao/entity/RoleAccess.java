package app.dao.entity;

import java.sql.Date;

import javax.persistence.*;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
@Table(name = "Role_Access")
public class RoleAccess {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;
    
    @Column(name = "role_id", nullable = false)
    private Long role_id;
    
    @ManyToOne
    @JoinColumn(name = "access_id")
    private Access access;
    
    @CreationTimestamp
    @Column(name = "create_time")
    private Date create_time;

	public Long getId() {
		return id;
	}

	public Long getRole_id() {
		return role_id;
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

	public void setRole_id(Long role_id) {
		this.role_id = role_id;
	}

	public void setAccess(Access access) {
		this.access = access;
	}

	public void setCreate_time(Date create_time) {
		this.create_time = create_time;
	}
    
   
}
