package com.example.stockMarket.service;

import java.util.List;

import com.example.stockMarket.model.IPOEntity;

public interface IpoService {
    List<IPOEntity> getAllIpo();
    void addIpo(IPOEntity ipoentity);
}
