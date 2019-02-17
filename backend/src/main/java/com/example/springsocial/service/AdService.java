package com.example.springsocial.service;

import com.example.springsocial.model.Ad;
import com.example.springsocial.repository.AdRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

/**
 * @author Thusitha Nuwan
 */
@Service
public class AdService {

    @Autowired
    private AdRepo adRepo;


    public Ad findByUuid(String id){
        UUID uuid = UUID.fromString(id);
        return adRepo.findOneById(uuid);
    }

    public void save(Ad ad){
        adRepo.save(ad);
    }

    public List<Ad> getAll(){
        return adRepo.findAll();
    }
}
