package com.backend.springboot;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user_table")
public class User {
	public User() {
		super();
	}
	public User(Integer id, String login, String email, String pass) {
		super();
		this.id = id;
		this.login = login;
		this.email = email;
		this.pass = pass;
	}
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String login;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	private String pass;
	private String email;
	public String getLogin() {
		return login;
	}
	public void setLogin(String login) {
		this.login = login;
	}
	public String getPass() {
		return pass;
	}
	public void setPass(String pass) {
		this.pass = pass;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "User [login=" + login + ", pass=" + pass + ", email=" + email + "]";
	}
	
	
}
