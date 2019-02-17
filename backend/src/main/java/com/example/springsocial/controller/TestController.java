package com.example.springsocial.controller;

import com.example.springsocial.security.CurrentUser;
import com.example.springsocial.security.UserPrincipal;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Thusitha Nuwan
 */
@RestController
public class TestController {


    @GetMapping("/test")
    public String getCurrentUser(@CurrentUser UserPrincipal userPrincipal) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        Response res = new Response();
        res.setStatus("ok");
        return mapper.writeValueAsString(res);
    }



    public static class Response {
        private String status;

        public String getStatus() {
            return status;
        }

        public void setStatus(String status) {
            this.status = status;
        }
    }
}
