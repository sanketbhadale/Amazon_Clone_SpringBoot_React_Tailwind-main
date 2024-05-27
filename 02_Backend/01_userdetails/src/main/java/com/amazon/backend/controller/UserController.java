package com.amazon.backend.controller;

import com.amazon.backend.dao.UserDao;
import com.amazon.backend.entity.UserMetadata;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/user")
public class UserController
{
    private UserDao userDao;

    @Autowired
    public UserController(UserDao userDao)
    {
        this.userDao = userDao;
    }

    @GetMapping("/get-user-id/{id}")
    public Optional<UserMetadata> getUserById(@PathVariable long id){

        return userDao.getUserById(id);
    }

    @GetMapping("/get-user-email/{email}")
    public UserMetadata getUserByEmail(@PathVariable String email){

        return userDao.getUserByEmail(email);
    }

    @GetMapping("/all-users")
    public List<UserMetadata> getAllUser(){
        return userDao.getAllUsers();
    }

    @PostMapping("/save-user")
    public UserMetadata saveUser(@RequestBody UserMetadata userMetadata)
    {
        return userDao.saveUser(userMetadata);
    }
}

