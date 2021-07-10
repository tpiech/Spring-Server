package com.backend.springboot;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class AuctionAdder {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private String owner_login;
	private float price;
	private String pass;
	
	
	public AuctionAdder() {
		super();
	}


	public AuctionAdder(String name, String owner_login, float price, String pass) {
		super();
		this.name = name;
		this.owner_login = owner_login;
		this.price = price;
		this.pass = pass;
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


	public String getPass() {
		return pass;
	}


	public void setPass(String pass) {
		this.pass = pass;
	}


	@Override
	public String toString() {
		return "AuctionAdder [name=" + name + ", owner_login=" + owner_login + ", price=" + price + ", pass=" + pass
				+ "]";
	}
	
	
}
