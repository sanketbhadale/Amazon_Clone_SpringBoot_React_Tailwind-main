package com.amazon.backend.repository;

import com.amazon.backend.entity.UserMetadata;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<UserMetadata, Long> {
    UserMetadata findByEmail(String email);
}
