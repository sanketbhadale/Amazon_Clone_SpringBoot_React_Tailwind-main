package com.amazon.backend.repository;

import com.amazon.backend.entity.Cart;
import feign.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.UUID;

public interface UserCartRepo extends JpaRepository<Cart,Long> {
    Cart findCartByUserIdAndProductId(long userId, String productId);
    Cart findCartById(long id);

    List<Cart> findAllCartsByUserId(long userId);
}
