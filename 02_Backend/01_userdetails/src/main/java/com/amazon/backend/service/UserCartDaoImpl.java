package com.amazon.backend.service;

import com.amazon.backend.dao.UserCartDao;
import com.amazon.backend.entity.Cart;
import com.amazon.backend.data.Product;
import com.amazon.backend.repository.UserCartRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserCartDaoImpl implements UserCartDao {

    private UserCartRepo userCartRepo;
    private List<Product> productList;

    @Autowired
    public UserCartDaoImpl(UserCartRepo userCartRepo){
        this.userCartRepo = userCartRepo;
        productList = new ArrayList<>();
    }

    @Override
    public List<Cart> getAllCartItemsByUserId(long userid) {

        return userCartRepo.findAllCartsByUserId(userid);
    }

    @Override
    public List<Cart> getAllCartItems() {
        return userCartRepo.findAll();
    }

    @Override
    public Cart addToCart(Cart cart) {
        return userCartRepo.save(cart);
    }

    @Override
    public void removeFromCart(Cart cart) {
        userCartRepo.delete(cart);
    }

    @Override
    public Cart getCartByUserIdAndProductId(long userId, String productId) {
        return  userCartRepo.findCartByUserIdAndProductId(userId, productId);
    }

    @Override
    public Cart getCartByCartId(long cartId) {
        return userCartRepo.findCartById(cartId);
    }

    @Override
    public void deleteAllCartItems() {
        userCartRepo.deleteAll();
    }

}
