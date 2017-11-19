package com.gift.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Registry {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "registry_id")
	private long registryId;

	@OneToMany
	private Set<Item> items = new HashSet<Item>();

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "user_id")
	private User assignedUser;

	public Registry(Set<Item> items, User assignedUser) {
		super();
		this.items = items;
		this.assignedUser = assignedUser;
	}

	public Registry() {
		super();
	}

	public long getRegistryId() {
		return registryId;
	}

	public void setRegistryId(long registryId) {
		this.registryId = registryId;
	}

	public Set<Item> getItems() {
		return items;
	}

	public void setItems(Set<Item> items) {
		this.items = items;
	}

	public User getAssignedUser() {
		return assignedUser;
	}

	public void setAssignedUser(User assignedUser) {
		this.assignedUser = assignedUser;
	}

}
