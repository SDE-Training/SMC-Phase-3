package com.example.stockMarket.model;

import java.util.List;

//import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
//import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

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
@Transactional
public class SectorEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO )
	private int Sectorid;

	@Column(name="Sector_Name")
	private String SectorName;
	
	@Column
	private String Brief;
	

	@OneToMany(mappedBy="sector",targetEntity=CompanyEntity.class )
	@JsonManagedReference
	@JsonIgnore  
	private List<CompanyEntity> company;

	public SectorEntity(String sectorName, String brief, List<CompanyEntity> company) {
		super();
		SectorName = sectorName;
		Brief = brief;
		this.company = company;
	}

	public SectorEntity() {
	}

	public int getSectorid() {
		return Sectorid;
	}

	public void setSectorid(int sectorid) {
		Sectorid = sectorid;
	}

	public String getSectorName() {
		return SectorName;
	}

	public void setSectorName(String sectorName) {
		SectorName = sectorName;
	}

	public String getBrief() {
		return Brief;
	}

	public void setBrief(String brief) {
		Brief = brief;
	}

	public List<CompanyEntity> getCompany() {
		return company;
	}

	public void setCompany(List<CompanyEntity> company) {
		this.company = company;
	}
	
}
