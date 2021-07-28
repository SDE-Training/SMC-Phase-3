package com.example.stockMarket.Controllers;

import java.util.List;

//import javax.persistence.TypedQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//import com.example.stockMarket.model.CompanyEntity;
import com.example.stockMarket.model.IPOEntity;
//import com.example.stockMarket.model.SectorEntity;
import com.example.stockMarket.service.IpoService;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@RestController
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@RequestMapping("/ipo")
@CrossOrigin(origins = "http://localhost:3000")
public class IpoController {
	@Autowired
	IpoService iposervice;
	
	@GetMapping("/all")
	public ResponseEntity<List<IPOEntity>> ipolist()
	{ 
		return new ResponseEntity<List<IPOEntity>>(iposervice.getAllIpo(),HttpStatus.OK);
	}
	
    @PostMapping("/addipo")
	public ResponseEntity<String> addIpo(
			@RequestBody IPOEntity ipoentity)
	{
		iposervice.addIpo(ipoentity);
		return  new ResponseEntity<String>("IPO is added of "+ipoentity.getCompany_Name(), HttpStatus.OK); 
	}		
}
