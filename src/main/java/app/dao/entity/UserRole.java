package app.dao.entity;

import java.sql.Date;

import javax.persistence.*;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;


@Entity
@Table(name = "User_Role")
public class UserRole {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;
    
    @Column(name = "usr_id", nullable = false)
    private Long usr_id;

    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role;
    
    @CreationTimestamp
    @Column(name = "create_time")
    private Date create_time;

	public Long getId() {
		return id;
	}

	public Long getUsr_id() {
		return usr_id;
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

	public void setUsr_id(Long usr_id) {
		this.usr_id = usr_id;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public void setCreate_time(Date create_time) {
		this.create_time = create_time;
	}
    
}
