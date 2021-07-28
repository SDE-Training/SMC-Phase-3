package com.example.stockMarket.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.stockMarket.Dao.IpoDao;
import com.example.stockMarket.model.IPOEntity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Service
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class IPOServiceImpl implements IpoService {
	@Autowired
	IpoDao ipodao;
	
	@Override
	public List<IPOEntity> getAllIpo() {
		return ipodao.findAll();
	}

	@Override
	public void addIpo(IPOEntity ipoentity) {
		//IPOEntity ipoent=
		ipodao.save(ipoentity);
		return;
	}
}
