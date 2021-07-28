package com.example.stockMarket.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.stockMarket.model.SectorEntity;

public interface SectorDao extends JpaRepository<SectorEntity,Integer> {
}
