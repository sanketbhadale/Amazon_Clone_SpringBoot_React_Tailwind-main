package com.amazon.backend.dao;

import com.amazon.backend.entity.UserMetadata;

import java.util.List;
import java.util.Optional;

public interface UserDao
{
    List<UserMetadata> getAllUsers();

    Optional<UserMetadata> getUserById(long id);

    UserMetadata getUserByEmail(String email);

    UserMetadata saveUser(UserMetadata userMetadata);
}
