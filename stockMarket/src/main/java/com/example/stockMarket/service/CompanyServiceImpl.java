package com.example.stockMarket.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.stockMarket.model.*;

import com.example.stockMarket.Dao.*;
import com.example.stockMarket.exceptions.NotFoundException;

//import com.example.stockMarket.exceptions.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
//import com.example.stockMarket.service.*;
@Service
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class CompanyServiceImpl implements CompanyService {
   
	@Autowired
	private CompanyDao companyDao;
	@Autowired
	private SectorDao sectordao;
  
	@Override
	public CompanyEntity findCompanyById(Integer Companyid) {
		Optional<CompanyEntity> companycheck = companyDao.findById(Companyid);
		if(companycheck.isPresent())return companycheck.get();
		else  
			throw new NotFoundException("Company not found" + Companyid);
	}

	@Override
	public List<CompanyEntity> findAllCompany(){
		return companyDao.findAll();
	}

	@Override
	public void deleteById(Integer companyId) {
		companyDao.deleteById(companyId);
	}

	@Override
	public void addCompany(CompanyEntity companyentity) {
		//CompanyEntity ent= 
		companyDao.save(companyentity);
		return;
	}

	@Override
	public void updateCompany(CompanyEntity companyentity, Integer companyid) {
		CompanyEntity compent=companyDao.getById(companyid);
		compent.setCompany_Name(companyentity.getCompany_Name());
		compent.setCEO(companyentity.getCEO());
		compent.setTurnover(companyentity.getTurnover());
		compent.setCompanyid(companyentity.getCompanyid());
		compent.setWrite_Up(companyentity.getWrite_Up());
		compent.setSector(sectordao.getById(1));
		companyDao.save(compent);
	}	
	
}