package com.backend.springboot;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("CONNECTED AT PORT 8085!");
		//getAllAuctions();
		//getUsersAcutions("test_user");
		//User testUser = new User("Test2", "TestPass2", "TestMail2", false);
		//addUser(testUser);

		//System.exit(0);
	}


}
