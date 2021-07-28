package com.example.stockMarket.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

//import com.example.stockMarket.model.SectorEntity;
import com.example.stockMarket.model.StockExchangeEntity;
import com.example.stockMarket.service.StockExchangeService;
//import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("/stockexchange")
@CrossOrigin(origins = "http://localhost:3000")
public class StockExchangeController {
   @Autowired	  
   StockExchangeService stockexchangeservice;
   
   @GetMapping("/all")
   ResponseEntity<List<StockExchangeEntity>>getAllExchange()
   {
      return new ResponseEntity<List<StockExchangeEntity>>(stockexchangeservice.getall() ,HttpStatus.OK) ;
   }
   
   @PostMapping("/addexchange/{exchangename}")
   public ResponseEntity<String> addExchange(@PathVariable("exchangename")String exchangename,
	@RequestBody StockExchangeEntity stockexchangeentity)
   { 
      stockexchangeservice.addStockExchange(stockexchangeentity);
      return  new ResponseEntity<String>("Exchange is added", HttpStatus.OK); 
   }
  
}
