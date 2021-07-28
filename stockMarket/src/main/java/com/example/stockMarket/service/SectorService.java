package com.example.stockMarket.service;

import java.util.List;

//import com.example.stockMarket.model.CompanyEntity;
import com.example.stockMarket.model.SectorEntity;

public interface SectorService {
	void addsector(SectorEntity sectorentity);
	List<SectorEntity>getAllSector();
	SectorEntity getSectorById(Integer sectorid);
}
