package com.amazon.productbackend.repository;

import com.amazon.productbackend.entity.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface ProductRepo extends MongoRepository<Product,String> {
    Product findByProductId(UUID productId);
}
