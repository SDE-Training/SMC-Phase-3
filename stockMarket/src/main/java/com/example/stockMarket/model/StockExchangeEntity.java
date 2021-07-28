package com.example.stockMarket.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class StockExchangeEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int StockExchangenid;
	
	@Column
	private String StockExchange;

	@Column
	private String Brief;
	
	@Column
	private String ContactAddress;
	
	@Column
	private String Remarks;
	
	@OneToMany(mappedBy="stockExchange", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<IPOEntity> ipos;
	
	@OneToMany(mappedBy="StockExchange", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<StockPriceEntity> StockPrices;
	
	@ManyToMany(mappedBy="StockExchangeList")
	List<CompanyEntity>CompanyList;

	public StockExchangeEntity() {
	}

	public StockExchangeEntity(int stockExchangenid, String stockExchange, String brief, String contactAddress,
			String remarks, List<IPOEntity> ipos, List<StockPriceEntity> stockPrices, List<CompanyEntity> companyList) {
		StockExchangenid = stockExchangenid;
		StockExchange = stockExchange;
		Brief = brief;
		ContactAddress = contactAddress;
		Remarks = remarks;
		this.ipos = ipos;
		StockPrices = stockPrices;
		CompanyList = companyList;
	}

	public int getStockExchangenid() {
		return StockExchangenid;
	}

	public void setStockExchangenid(int stockExchangenid) {
		StockExchangenid = stockExchangenid;
	}

	public String getStockExchange() {
		return StockExchange;
	}

	public void setStockExchange(String stockExchange) {
		StockExchange = stockExchange;
	}

	public String getBrief() {
		return Brief;
	}

	public void setBrief(String brief) {
		Brief = brief;
	}

	public String getContactAddress() {
		return ContactAddress;
	}

	public void setContactAddress(String contactAddress) {
		ContactAddress = contactAddress;
	}

	public String getRemarks() {
		return Remarks;
	}

	public void setRemarks(String remarks) {
		Remarks = remarks;
	}

	public List<IPOEntity> getIpos() {
		return ipos;
	}

	public void setIpos(List<IPOEntity> ipos) {
		this.ipos = ipos;
	}

	public List<StockPriceEntity> getStockPrices() {
		return StockPrices;
	}

	public void setStockPrices(List<StockPriceEntity> stockPrices) {
		StockPrices = stockPrices;
	}

	public List<CompanyEntity> getCompanyList() {
		return CompanyList;
	}

	public void setCompanyList(List<CompanyEntity> companyList) {
		CompanyList = companyList;
	}
	
}
