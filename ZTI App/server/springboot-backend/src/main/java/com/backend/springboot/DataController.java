package com.backend.springboot;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class DataController {

	@Autowired
	private UserRepository userRepo;
	@Autowired
	private AdminRepository adminRepo;
	@Autowired
	private AuctionRepository auctionRepo;

	@RequestMapping("users")
	public List<User> getUsers(){
		return this.userRepo.findAll();
	}
	@RequestMapping("admins")
	public List<Admin> getAdmins(){
		return this.adminRepo.findAll();
	}
	@RequestMapping("auctions")
	public List<Auction> getAuctions(){
		return this.auctionRepo.findAll();
	}
	@RequestMapping("auctions/ofuser/{owner_login}")
	public List<Auction> getAuctionsOfUser(@PathVariable String owner_login){
		List<Auction> allAuctions = auctionRepo.findAll();
		List<Auction> foundAuctions = new ArrayList<Auction>();
		for(Auction a: allAuctions) {
			if(a.getOwner_login().equals(owner_login)) {
				foundAuctions.add(a);
			}
		} 
		return foundAuctions;
	}
	@RequestMapping("auctions/withname/{name}")
	public List<Auction> getAuctionsWithName(@PathVariable String name){
		List<Auction> allAuctions = auctionRepo.findAll();
		List<Auction> foundAuctions = new ArrayList<Auction>();
		for(Auction a: allAuctions) {
			if(a.getName().equals(name)) {
				foundAuctions.add(a);
			}
		} 
		return foundAuctions;
	}
	@RequestMapping(value = "addUser", method = RequestMethod.POST)
	@ResponseBody
	public String addUser(@RequestBody User u) {
		String mlogin = u.getLogin();
		userRepo.save(u);
		return "Success!";
	}
	
	public int LoginAdmin(String AdLogin, String AdPass) {

		int canIEnter = 0;
		List <Admin> adminList = adminRepo.findAll();
		for(Admin a: adminList) {
			if(a.getLogin().equals(AdLogin) && a.getPass().equals(AdPass)) {
				canIEnter = 1;
				return canIEnter;
			}
		}
		return canIEnter;
	}
	
	
	@RequestMapping(value = "login", method = RequestMethod.POST)
	@ResponseBody
	public int Login(@RequestBody User u) 
	{	
		String loggedUser = "";
		int isLogged = 0;
		String userPass = u.getPass();
		int isAdmin = LoginAdmin(u.getLogin(), userPass);
		if(isAdmin == 1) {
			isLogged = 1;
			return isLogged;
		}
		else {
			List<User> userList = userRepo.findAll();
			for(User us: userList) {
				if(us.getLogin().equals(u.getLogin()) && us.getPass().equals(userPass)) {
					//loggedUser = u.getLogin();
					isLogged = 2;
					return isLogged;
				}
			}
		}
		
		return isLogged;
	}
	

	
	@RequestMapping(value = "buyProduct", method = RequestMethod.POST)
	@ResponseBody
	public String BuyProduct(@RequestBody Auction a){
		auctionRepo.deleteById(a.getId());
		return "Bought Succefully!";
	}
	
	@RequestMapping(value = "userRemove", method = RequestMethod.POST)
	@ResponseBody
	public String Deleter(@RequestBody User u){
		//auctionRepo.deleteById(a.getId());
		int userIdToRemove = u.getId();
		Optional<User> usrToRemove = userRepo.findById(userIdToRemove);
		User gotUser = usrToRemove.get();
		List<Auction> auctions = auctionRepo.findAll();
		List<Integer> auctionsToRemove = new ArrayList<Integer>();
		System.out.println("USER LOGIN TO DELETE:" + gotUser.getLogin());
		for(Auction a: auctions) {
			 if(a.getOwner_login().equals(gotUser.getLogin())){
				auctionsToRemove.add(a.getId());
			} 
		}
		System.out.println("NUMBER OF AUCTIONS TO DELETE:" + auctionsToRemove.size());
		for(int i = 0; i<auctionsToRemove.size(); i++) {
			auctionRepo.deleteById(auctionsToRemove.get(i));
		}
		userRepo.deleteById(userIdToRemove);
		return "Removed Succefully!";
	}
	
	@RequestMapping(value = "addAuction", method = RequestMethod.POST)
	@ResponseBody
	public String AddAuction(@RequestBody AuctionAdder Ad) {
		double round_price = Math.round(Ad.getPrice() * 100.0) / 100.0;
		List<User> userList = userRepo.findAll();
		int isLogged = 0;
		for(User us: userList) {
			if(us.getLogin().equals(Ad.getOwner_login()) && us.getPass().equals(Ad.getPass())) {
				isLogged = 1;
			}
		}
		if(isLogged == 0 || round_price <0) {
			return "ERROR, bad login, password or price";
		}
		else {
			Auction auc = new Auction(Ad.getName(),Ad.getOwner_login(), (float)round_price);
			auctionRepo.save(auc);
		}
		
		return "Saved succesfully!";
	}
	
	

}

