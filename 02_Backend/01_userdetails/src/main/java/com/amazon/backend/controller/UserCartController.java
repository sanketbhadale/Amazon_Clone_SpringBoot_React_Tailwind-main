package com.amazon.backend.controller;

import com.amazon.backend.api.ProductClient;
import com.amazon.backend.dao.UserCartDao;
import com.amazon.backend.data.Product;
import com.amazon.backend.entity.Cart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/user-cart")
public class UserCartController
{
    private UserCartDao userCartDao;
    private ProductClient productClient;
    @Autowired
    public UserCartController(UserCartDao userCartDao, ProductClient productClient)
    {
        this.userCartDao = userCartDao;
        this.productClient=productClient;
    }

    @PutMapping("/add-to-cart")
    public Cart addToCart(@RequestBody Cart cart)
    {
         Cart existingCart = userCartDao.getCartByUserIdAndProductId(cart.getUserId(),cart.getProductId());

        if(existingCart != null){

            existingCart.setItemQuantity(existingCart.getItemQuantity()+1);

            return userCartDao.addToCart(existingCart);
        }
        cart.setItemQuantity(1);
        return userCartDao.addToCart(cart);
    }

    @GetMapping("/all-cart-items/{userId}")
    public List<Product> allCartItems(@PathVariable long userId){

        List<Cart> cartList = userCartDao.getAllCartItemsByUserId(userId);

        List<Product> productList = new ArrayList<>();

        cartList.forEach(cart->{

            Product product  = productClient.getProductByProductId(cart.getProductId());

            productList.add(product);
        });

        return productList;
    }

    @GetMapping("all-cart")
    public List<Cart> allCarts(){
        return userCartDao.getAllCartItems();
    }

    @DeleteMapping("/remove-cart-item/{cartId}")
    public void removeItemFromCart(@PathVariable long cartId)
    {
        Cart cart = userCartDao.getCartByCartId(cartId);

       userCartDao.removeFromCart(cart);
    }

    @DeleteMapping("/remove-all-cart-items")
    public void deleteAllCartItems(){
        userCartDao.deleteAllCartItems();
    }
}
