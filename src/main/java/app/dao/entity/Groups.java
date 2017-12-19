package app.dao.entity;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "Groups")
public class Groups {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name")
    private String name;
    
    @CreationTimestamp
    @Column(name = "create_time")
    private Date create_time;

	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public Date getCreate_time() {
		return create_time;
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

	public static Groups defaultGroup() {
		Groups ng = new Groups();
		ng.setId(0L);
		ng.setName("Default");
		ng.setCreate_time(Date.valueOf("2017-12-19"));
		return ng;
	}
    
}
