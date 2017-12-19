package app.dao.entity;
import javax.persistence.*;


@Entity
@Table(name = "Group_Role_Map")
public class GroupRoleMap {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;
    
    @Column(name = "from_role_id")
    private Long from_role_id;
    
    @Column(name = "from_group_id")
    private Long from_group_id;
    
    @ManyToOne
    @JoinColumn(name = "to_role_id")
    private Role role;
    
    @Column(name = "to_group_id")
    private Long to_group_id;

	public Long getId() {
		return id;
	}

	public Long getFrom_role_id() {
		return from_role_id;
	}

	public Long getFrom_group_id() {
		return from_group_id;
	}

	public Role getRole() {
		return role;
	}

	public Long getTo_group_id() {
		return to_group_id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setFrom_role_id(Long from_role_id) {
		this.from_role_id = from_role_id;
	}

	public void setFrom_group_id(Long from_group_id) {
		this.from_group_id = from_group_id;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public void setTo_group_id(Long to_group_id) {
		this.to_group_id = to_group_id;
	}
    
    
}
