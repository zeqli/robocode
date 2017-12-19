package app.dao.entity;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.sql.Date;


@Entity
@Table(name = "User_Role")
public class UserRole {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;
    
    @Column(name = "usr_id", nullable = false)
    private Long uid;

    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role;
    
    @CreationTimestamp
    @Column(name = "create_time")
    private Date create_time;

	public Long getId() {
		return id;
	}

	public Role getRole() {
		return role;
	}

	public Date getCreate_time() {
		return create_time;
	}

	public void setId(Long id) {
		this.id = id;
	}


	public void setRole(Role role) {
		this.role = role;
	}

	public void setCreate_time(Date create_time) {
		this.create_time = create_time;
	}


	public Long getUid() {
		return uid;
	}

	public void setUid(Long uid) {
		this.uid = uid;
	}
}
