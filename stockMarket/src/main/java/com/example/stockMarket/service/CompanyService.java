package com.example.stockMarket.service;

import java.util.List;

import com.example.stockMarket.model.CompanyEntity;
//import com.example.stockMarket.model.SectorEntity;



public interface CompanyService  {
	
	CompanyEntity findCompanyById(Integer companyId);
	List<CompanyEntity> findAllCompany();
	void deleteById(Integer companyId);
	void addCompany(CompanyEntity companyentity);
	void updateCompany(CompanyEntity companyentity,Integer companyid);
	
}
