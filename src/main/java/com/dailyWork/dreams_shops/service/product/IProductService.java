package com.dailyWork.dreams_shops.service.product;

import java.util.List;

import com.dailyWork.dreams_shops.model.Product;

public interface IProductService {
	Product AddProduct(Product product);
	Product getProduceById(Long Id);
	void DeleteProduceById(Long id);
	void updateProduct(Product update, Long productId);
	
	List<Product> getAllProduct();
	List<Product> getProductByCategory(String category);
	List<Product> getProductByBrand(String brand);
	List<Product> getProductByCategoryAndBrand(String category,String brand);
	List<Product> getProductByName(String Name);
	Long countProductByBrandAndName(String brand, String name);
	


}
