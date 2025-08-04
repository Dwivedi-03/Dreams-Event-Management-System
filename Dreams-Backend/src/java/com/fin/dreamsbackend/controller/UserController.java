/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.fin.dreamsbackend.controller;

import com.fin.dreamsbackend.model.User;
import com.fin.dreamsbackend.service.UserService;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Admin
 */
@RestController
@CrossOrigin
@RequestMapping(value = "/api/v1/users")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/test")
    public ResponseEntity test() {
        return new ResponseEntity("Hello User", HttpStatus.OK);
    }

    @RequestMapping(value = "/registerUser", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity registeruser(@RequestBody User user) {
        try {
            Map<String, Object> response = userService.registerUser(user);
            return (boolean) response.get("success") ? ResponseEntity.ok(response) : ResponseEntity.badRequest().body(response);
        } catch (NullPointerException ex) {
            return ResponseEntity.status(400).body(Map.of("message", "Missing required fields"));
        } catch (Exception ex) {
            return ResponseEntity.status(500).body(Map.of("message", "Something went wrong", "error", ex.getMessage()));
        }
    }

}
