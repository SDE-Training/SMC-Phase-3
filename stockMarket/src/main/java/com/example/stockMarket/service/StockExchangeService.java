package com.example.stockMarket.service;

import java.util.List;

import com.example.stockMarket.model.*;

public interface StockExchangeService {
	List<StockExchangeEntity>getall();
    void addStockExchange(StockExchangeEntity stockexchangeentity);
    List<CompanyEntity>getallcompany();
}
