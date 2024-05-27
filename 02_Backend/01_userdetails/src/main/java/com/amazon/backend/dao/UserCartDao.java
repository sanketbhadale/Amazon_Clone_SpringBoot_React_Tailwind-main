package com.amazon.backend.dao;

import com.amazon.backend.entity.Cart;
import com.amazon.backend.data.Product;

import java.util.List;

public interface UserCartDao
{
    List<Cart> getAllCartItemsByUserId(long userid);
    List<Cart> getAllCartItems();
    Cart addToCart(Cart cart);
    void removeFromCart(Cart cart);

    Cart getCartByUserIdAndProductId(long userId, String productId);
    Cart getCartByCartId(long cartId);
    
    void deleteAllCartItems();
}
