package com.example.stockMarket.service;

import java.util.Date;
import java.util.List;

//import org.springframework.data.jpa.repository.Query;
import org.springframework.web.multipart.MultipartFile;

import com.example.stockMarket.model.*;

public interface StockPriceService {
	void save(MultipartFile file);
	List<StockPriceEntity> allStockPrice(int Companycode, String exchangename, Date in, Date out);
}
