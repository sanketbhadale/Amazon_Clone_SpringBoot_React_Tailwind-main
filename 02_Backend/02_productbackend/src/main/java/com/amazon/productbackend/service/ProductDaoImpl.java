package com.amazon.productbackend.service;

import com.amazon.productbackend.dao.ProductDao;
import com.amazon.productbackend.entity.Product;
import com.amazon.productbackend.repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ProductDaoImpl implements ProductDao {

    private ProductRepo productRepo;

    @Autowired
    public ProductDaoImpl(ProductRepo productRepo){
        this.productRepo=productRepo;
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepo.findAll();
    }

    @Override
    public Product getProductByProductId(String productId) {
        return productRepo.findByProductId(UUID.fromString(productId));
    }

    @Override
    public List<Product> saveAllProduct(List<Product> list) {
       return productRepo.saveAll(list);
    }

    @Override
    public Product saveProduct(Product product) {
        product.setProductId(UUID.randomUUID());
        return productRepo.save(product);
    }

    @Override
    public void deleteAllProducts() {
        productRepo.deleteAll();
    }


}
