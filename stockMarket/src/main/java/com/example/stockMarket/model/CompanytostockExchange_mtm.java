package com.example.stockMarket.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.ManyToOne;
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
public class CompanytostockExchange_mtm {
   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

   @Column
   private int Companyid;

   @Column
   private int stockexchangeid;
   
   @Column
   private int companycode;

}
