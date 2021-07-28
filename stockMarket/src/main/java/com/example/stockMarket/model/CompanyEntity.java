package com.example.stockMarket.model;


import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.annotation.JsonBackReference;
//import com.fasterxml.jackson.annotation.JsonIgnore;
//import com.fasterxml.jackson.annotation.JsonManagedReference;
//import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;






@Entity
@Table(name="company")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Transactional
public class CompanyEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int Companyid;
	
	@Column(name ="CompanyName")
	private String Company_Name; 
	
	@Column
	private int Turnover;
	
	@Column(name="CEO")
	private String CEO;
	
	@Column(name =" BoardofDirector")
	private String Board_of_Directors;

	//	@Column(name="Listed in Stock Exchange")
	//private int Listed_in_Stock_Exchange;
	
	@Column(name=" WriteUp")
	private String Write_Up;

	//	@Column(name ="Stock Code")
	//private String Stock_Code;
	
	//Relationships company and ipos
	@OneToMany(mappedBy="company", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<IPOEntity> ipos;
	
	//relationship between sectors and company
	@ManyToOne(fetch = FetchType.LAZY)
	@JsonBackReference
	//@JoinColumn
	//@JsonIgnore
	private SectorEntity sector;

    @ManyToMany
	@JoinTable(
			  name = "company_stockexchange", 
			  joinColumns = @JoinColumn(name = "companyid"), 
			  inverseJoinColumns = @JoinColumn(name = "stockexchangeid"))
	List<StockExchangeEntity> StockExchangeList;

	public int getCompanyid() {
		return Companyid;
	}

	public void setCompanyid(int companyid) {
		Companyid = companyid;
	}

	public String getCompany_Name() {
		return Company_Name;
	}

	public void setCompany_Name(String company_Name) {
		Company_Name = company_Name;
	}

	public int getTurnover() {
		return Turnover;
	}

	public void setTurnover(int turnover) {
		Turnover = turnover;
	}

	public String getCEO() {
		return CEO;
	}

	public void setCEO(String cEO) {
		CEO = cEO;
	}

	public String getBoard_of_Directors() {
		return Board_of_Directors;
	}

	public void setBoard_of_Directors(String board_of_Directors) {
		Board_of_Directors = board_of_Directors;
	}

	public String getWrite_Up() {
		return Write_Up;
	}

	public void setWrite_Up(String write_Up) {
		Write_Up = write_Up;
	}

	public List<IPOEntity> getIpos() {
		return ipos;
	}

	public void setIpos(List<IPOEntity> ipos) {
		this.ipos = ipos;
	}

	public SectorEntity getSector() {
		return sector;
	}

	public void setSector(SectorEntity sector) {
		this.sector = sector;
	}

	public List<StockExchangeEntity> getStockExchangeList() {
		return StockExchangeList;
	}

	public void setStockExchangeList(List<StockExchangeEntity> stockExchangeList) {
		StockExchangeList = stockExchangeList;
	}

	public CompanyEntity(int companyid, String company_Name, int turnover, String cEO, String board_of_Directors,
			String write_Up, List<IPOEntity> ipos, SectorEntity sector, List<StockExchangeEntity> stockExchangeList) {
		Companyid = companyid;
		Company_Name = company_Name;
		Turnover = turnover;
		CEO = cEO;
		Board_of_Directors = board_of_Directors;
		Write_Up = write_Up;
		this.ipos = ipos;
		this.sector = sector;
		StockExchangeList = stockExchangeList;
	}

	public CompanyEntity() {
	}

	@Override
	public String toString() {
		return "CompanyEntity [Board_of_Directors=" + Board_of_Directors + ", CEO=" + CEO + ", Company_Name="
				+ Company_Name + ", Companyid=" + Companyid + ", StockExchangeList=" + StockExchangeList + ", Turnover="
				+ Turnover + ", Write_Up=" + Write_Up + ", ipos=" + ipos + ", sector=" + sector + "]";
	}

}





