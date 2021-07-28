package com.example.stockMarket.Dao;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.example.stockMarket.model.StockPriceEntity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Repository
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public interface StockPriceDao extends JpaRepository<StockPriceEntity,Integer> {

	@Query("select s from  StockPriceEntity s where s.companyCode=?1 and s.StockExchange=?2" )
	List<StockPriceEntity>allStockPrice(int Companycode,String exchangename,Date in,Date out);
}
