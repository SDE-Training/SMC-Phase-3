package com.example.stockMarket.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import com.example.stockMarket.Dao.CompanyDao;
import com.example.stockMarket.Dao.StockExchangeDao;
import com.example.stockMarket.model.CompanyEntity;
import com.example.stockMarket.model.StockExchangeEntity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Service
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class StockExchangeServiceImpl implements StockExchangeService {
	@Autowired
	private StockExchangeDao stockexchangedao;
	//@Autowired
	//private CompanyDao companydao;
	
	@Override
	public List<StockExchangeEntity> getall() {	
		return stockexchangedao.findAll();
	}

   	@Override
	public void addStockExchange(StockExchangeEntity stockexchangeentity) {
		//StockExchangeEntity ent= 
		stockexchangedao.save(stockexchangeentity);
		//return ent;
	}

	@Override
	public List<CompanyEntity> getallcompany() {
		return null;
	}

}
