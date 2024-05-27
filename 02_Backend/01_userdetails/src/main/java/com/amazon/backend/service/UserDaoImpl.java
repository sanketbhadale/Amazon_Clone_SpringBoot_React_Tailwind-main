package com.amazon.backend.service;

import com.amazon.backend.dao.UserDao;
import com.amazon.backend.entity.UserMetadata;
import com.amazon.backend.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserDaoImpl implements UserDao {

    private UserRepo userRepo;

    @Autowired
    public UserDaoImpl(UserRepo userRepo)
    {
        this.userRepo = userRepo;
    }

    @Override
    public List<UserMetadata> getAllUsers() {
        return userRepo.findAll();
    }

    @Override
    public Optional<UserMetadata> getUserById(long id) {
        return userRepo.findById(id);
    }

    @Override
    public UserMetadata getUserByEmail(String email) {
        return userRepo.findByEmail(email);
    }

    @Override
    public UserMetadata saveUser(UserMetadata userMetadata) {
        return userRepo.save(userMetadata);
    }
}
