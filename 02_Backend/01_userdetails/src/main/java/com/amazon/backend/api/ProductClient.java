package com.amazon.backend.api;

import com.amazon.backend.data.Product;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "${productClient.name}", url = "${productClient.url}")
public interface ProductClient {
    @GetMapping("/products")
    List<Product> getAllProducts();

    @GetMapping("/product/{productId}")
    Product getProductByProductId(@PathVariable(name = "productId") String productId);
}
