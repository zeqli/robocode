package app.dao.entity;

import java.sql.Date;

import javax.persistence.*;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
@Table(name = "Role")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name")
    private String name;
    
    @CreationTimestamp
    @Column(name = "create_time")
    private Date create_time;
    
    @UpdateTimestamp
    @Column(name = "update_time")
    private Date update_time;

	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public Date getCreate_time() {
		return create_time;
	}

	public Date getUpdate_time() {
		return update_time;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setCreate_time(Date create_time) {
		this.create_time = create_time;
	}

	public void setUpdate_time(Date update_time) {
		this.update_time = update_time;
	}
    
}
