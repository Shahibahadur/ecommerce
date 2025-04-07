package com.dailyWork.dreams_shops.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dailyWork.dreams_shops.model.Product;

public interface ProductRepository extends JpaRepository<Product,Long> {
	
	
}
