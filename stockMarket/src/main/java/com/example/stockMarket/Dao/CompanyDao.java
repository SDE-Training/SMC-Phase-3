package com.example.stockMarket.Dao;

//import java.util.List;
//import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.stockMarket.model.CompanyEntity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Repository
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public interface CompanyDao extends JpaRepository<CompanyEntity,Integer>{

}
