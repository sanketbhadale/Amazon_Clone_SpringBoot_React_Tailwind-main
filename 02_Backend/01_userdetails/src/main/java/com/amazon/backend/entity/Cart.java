package com.amazon.backend.entity;

import jakarta.persistence.*;
import org.springframework.cglib.core.GeneratorStrategy;

import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "Cart_Items")
public class Cart
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(name = "user_id")
    private long userId;
    @Column(name = "product_id")
    private String productId;

    @Column(name = "item_quantity")
    private long itemQuantity;

    public Cart() {
    }

    public Cart(long userId, String productId) {

        this.userId = userId;
        this.productId = productId;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public long getItemQuantity() {
        return itemQuantity;
    }

    public void setItemQuantity(long itemQuantity) {
        this.itemQuantity = itemQuantity;
    }

    @Override
    public String toString() {
        return "Cart{" +
                "id=" + id +
                ", userId=" + userId +
                ", productId='" + productId + '\'' +
                ", itemQuantity=" + itemQuantity +
                '}';
    }
}
