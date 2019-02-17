package com.example.springsocial.controller;

import com.example.springsocial.model.Ad;
import com.example.springsocial.model.Image;
import com.example.springsocial.service.AdService;
import com.example.springsocial.util.JsonUtil;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

/**
 * @author Thusitha Nuwan
 */
@RestController
public class AdController {

    @Autowired
    private AdService adService;

    @PostMapping("/ad/upload") // //new annotation since 4.3
    public String createAd(@RequestParam("image") MultipartFile file,
                           @RequestParam("description") String description,
                           @RequestParam("price") String price,
                            @RequestParam("location") String location,
                           @RequestParam("contactNo") String contactNo,
                           @RequestParam("isAgent") String isAgent) throws JsonProcessingException {


        TestController.Response res = new TestController.Response();
        res.setStatus("error");
        try {

            // Get the file and save it somewhere
            byte[] bytes = file.getBytes();
            Ad ad = new Ad();
            ad.setDescription(description);
            ad.setPrice(price);
            ad.setLocation(location);
            ad.setContactNo(contactNo);
            ad.setIsAgent(isAgent);
            if(ad != null){
                Image img = new Image();
                img.setImg(bytes);
                ad.setImages(Arrays.asList(img));
                adService.save(ad);
                res.setStatus("ok");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return JsonUtil.toJsonString(res);
    }

    @GetMapping("/ad/img/{id}") // //new annotation since 4.3
    public ResponseEntity<byte[]> getImage(@PathVariable("id") String id){
        Ad ad = adService.findByUuid(id);
        //only return first image
        byte[] data = new byte[0];
        if(ad.getImages() != null && ad.getImages().get(0) != null){
            data = ad.getImages().get(0).getImg();
        }

        return ResponseEntity
                .ok()
                .contentType(MediaType.IMAGE_JPEG)
                .body(data);
    }


    @GetMapping("/ad/all")
    public String getAll() throws JsonProcessingException {

        List<Ad> ads = adService.getAll();
        List<AdResponse> response = new ArrayList<AdResponse>();

        for(Ad ad : ads){

            AdResponse res = new AdResponse();
            res.setDescription(ad.getDescription());
            res.setId(ad.getId().toString());
            res.setLocation(ad.getLocation());
            res.setPrice(ad.getPrice());
            res.setContactNo(ad.getContactNo());
            res.setIsAgent(ad.getIsAgent());
            response.add(res);
        }

        AdsResponse ads_ = new AdsResponse();
        ads_.setResults(response);
        return JsonUtil.toJsonString(ads_);
    }

    public static class AdsResponse{

        public List<AdResponse> getResults() {
            return results;
        }

        public void setResults(List<AdResponse> results) {
            this.results = results;
        }

        private List<AdResponse> results;
    }

    public static class AdResponse{

        private String description;
        private String location;
        private String id;
        private String price;
        private String contactNo;
        private String isAgent;

        public String getContactNo() {
            return contactNo;
        }

        public void setContactNo(String contactNo) {
            this.contactNo = contactNo;
        }

        public String getIsAgent() {
            return isAgent;
        }

        public void setIsAgent(String isAgent) {
            this.isAgent = isAgent;
        }



        public String getDescription() {
            return description;
        }

        public void setDescription(String description) {
            this.description = description;
        }

        public String getLocation() {
            return location;
        }

        public void setLocation(String location) {
            this.location = location;
        }

        public String getId() {
            return id;
        }

        public void setId(String id) {
            this.id = id;
        }

        public String getPrice() {
            return price;
        }

        public void setPrice(String price) {
            this.price = price;
        }
    }

}
