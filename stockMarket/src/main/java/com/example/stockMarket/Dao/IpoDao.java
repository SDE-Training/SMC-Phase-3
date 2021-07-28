package com.example.stockMarket.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.stockMarket.model.IPOEntity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Repository
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public interface IpoDao extends JpaRepository<IPOEntity,Integer> {

}
