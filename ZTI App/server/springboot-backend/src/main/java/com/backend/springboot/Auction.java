package com.backend.springboot;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "auction_table")
public class Auction {
	Auction(){super();}
	
	public Auction(String name, String owner_login, float price) {
		super();
		this.name = name;
		this.owner_login = owner_login;
		this.price = price;
	}
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String name;
	private String owner_login;
	private float price;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public String getOwner_login() {
		return owner_login;
	}
	public void setOwner_login(String owner_login) {
		this.owner_login = owner_login;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	@Override
	public String toString() {
		return "Auction [id=" + id + ", name=" + name + ", user_login=" + owner_login + ", price=" + price + "]";
	}
	
	
}
