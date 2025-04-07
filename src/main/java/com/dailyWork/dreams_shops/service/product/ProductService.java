package com.dailyWork.dreams_shops.service.product;

import java.util.List;

import com.dailyWork.dreams_shops.exception.ProductNotFoundException;
import com.dailyWork.dreams_shops.model.Product;
import com.dailyWork.dreams_shops.repository.ProductRepository;

public class ProductService implements IProductService {

	private ProductRepository productRepository;

	@Override
	public Product AddProduct(Product product) {
		// TODO Auto-generated method stub
		return null;
	}

	/*
	 * @Override public Product getProduceById(Long id) { // TODO Auto-generated
	 * method stub return productRepository.findById(id).orElseThrow(()->new
	 * ProductNotFoundException("Product Not Found")); }
	 */
	@Override
	public void DeleteProduceById(Long id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void updateProduct(Product update, Long productId) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Product> getAllProduct() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Product> getProductByCategory(String category) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Product> getProductByBrand(String brand) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Product> getProductByCategoryAndBrand(String category,
			String brand) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Product> getProductByName(String Name) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Long countProductByBrandAndName(String brand, String name) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Product getProduceById(Long Id) {
		// TODO Auto-generated method stub
		return null;
	}

	
  
 }
