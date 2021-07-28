package com.example.stockMarket.Controllers;
import com.example.stockMarket.Dao.SectorDao;
//import com.example.stockMarket.exceptions.NotFoundException;
import com.example.stockMarket.model.*;
import java.util.List;
//import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.jpa.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import com.example.stockMarket.service.*;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@RestController
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@RequestMapping("/company")
@CrossOrigin(origins = "http://localhost:3000")
public class CompanyController {

	@Autowired
	private CompanyService companyservice;
	@Autowired
	private SectorService sectorservice;
	
	@Autowired
  	private EntityManager entitymanager;
	
	@GetMapping("/all")
	public ResponseEntity<List<CompanyEntity>> companylist()
	{ 
		return new ResponseEntity<List<CompanyEntity>>(companyservice.findAllCompany(),HttpStatus.OK);

	}
	
	@GetMapping("/find/{companyId}")
	public ResponseEntity<CompanyEntity> companybyId(@PathVariable("companyId") Integer companyId)
	{
		return new ResponseEntity<CompanyEntity>(companyservice.findCompanyById(companyId),HttpStatus.OK);
	}

	@GetMapping("/delete/{comapnyId}")
	public ResponseEntity<String> deleteCompanyById(@PathVariable("comapnyId")Integer companyId)
	{
		try{companyservice.deleteById(companyId);
		return new ResponseEntity<String>("Company with id = "+companyId +" deleted", HttpStatus.OK);
		
		}catch(IllegalArgumentException e){
			return new ResponseEntity<String>("Company with id = "+companyId +" not found", HttpStatus.OK);
		}
		
	}
   
    @PostMapping("/addCompany/{sectorid}")
	public ResponseEntity<String> addCompany(@PathVariable("sectorid") Integer sectorid,
			@RequestBody CompanyEntity companyentity)
	{      
	    SectorEntity c =  sectorservice.getSectorById(sectorid);
	    companyentity.setSector(c);   
	 	companyservice.addCompany(companyentity);
		return  new ResponseEntity<String>("Comapny is added"+companyentity.getCompany_Name(), HttpStatus.OK); 
	}
		
    @PutMapping("/companies/{companyId}")
	public ResponseEntity<String> updateCompany(@RequestBody CompanyEntity companyentity,
			@PathVariable("companyId") Integer companyId)
	{
	    companyservice.updateCompany(companyentity, companyId);
    	return  new ResponseEntity<String>("Comapny is updated" ,HttpStatus.OK); 
	}	
	
}

