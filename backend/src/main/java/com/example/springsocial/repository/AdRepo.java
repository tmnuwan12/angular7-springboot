package com.example.springsocial.repository;

import com.example.springsocial.model.Ad;
import com.example.springsocial.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

/**
 * @author Thusitha Nuwan
 */
@Repository
public interface AdRepo extends JpaRepository<Ad, UUID> {

    Ad findOneById(UUID id);
}