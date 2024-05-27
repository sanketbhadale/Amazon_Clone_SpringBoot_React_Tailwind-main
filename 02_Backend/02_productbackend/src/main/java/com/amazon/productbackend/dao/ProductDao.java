package com.amazon.productbackend.dao;

import com.amazon.productbackend.entity.Product;

import java.util.List;
import java.util.Optional;

public interface ProductDao
{
    List<Product> getAllProducts();

    Product getProductByProductId(String productId);

    List<Product> saveAllProduct(List<Product> list);

    Product saveProduct(Product product);

    void deleteAllProducts();
}
