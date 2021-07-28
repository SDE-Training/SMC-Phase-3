package com.example.stockMarket.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.stockMarket.Dao.CompanyDao;
import com.example.stockMarket.Dao.SectorDao;
//import com.example.stockMarket.model.CompanyEntity;
import com.example.stockMarket.model.SectorEntity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Service
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

public class SectorServiceImpl  implements SectorService{
	@Autowired
	SectorDao sectordao;
	@Autowired
	CompanyDao companydao;

	@Override
	public void addsector(SectorEntity sectorentity) {
		//String s=sectorentity.getSectorName();
		//SectorEntity sec= 
		sectordao.save(sectorentity);
		//s=sec.getSectorName();
		return;
	}

	@Override
	public List<SectorEntity> getAllSector() {	
		return sectordao.findAll();
	}

	@Override
	public SectorEntity getSectorById(Integer sectorid) {
		return sectordao.getById(sectorid);
	}
}
