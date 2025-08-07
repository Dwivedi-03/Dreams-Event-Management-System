/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.fin.dreamsbackend.service.impl;

import com.fin.dreamsbackend.model.User;
import com.fin.dreamsbackend.repository.UserRepository;
import com.fin.dreamsbackend.service.UserService;
import java.time.LocalDate;
import java.time.Period;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Admin
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Override
    public Map<String, Object> registerUser(User user) {
        Map<String, Object> response = new HashMap<>();

        response.put("success", false);
        response.put("message", "");
        response.put("data", new ArrayList<>());

        LocalDate dob = LocalDate.parse(user.getDateOfBirth());
        LocalDate today = LocalDate.now();

        if (user.getUsername() == null || user.getUsername().trim().isEmpty()) {
            response.put("message", "Username is required");
        } else if (!user.getUsername().matches("^[a-zA-Z0-9_]{3,15}$")) {
            response.put("message", "Username must be 3–15 characters and contain only letters, numbers, and underscores");
        } else if (user.getPassword() == null || user.getPassword().trim().isEmpty()) {
            response.put("message", "Password is required");
        } else if (!user.getPassword().matches("^(?=.*[A-Z])(?=.*\\\\d)(?=.*[@#$%^&+=!]).{8,}$")) {
            response.put("message", "Password must be at least 8 characters long, contain a capital letter, a number, and a special character.");
        } else if (user.getEmail() == null || user.getEmail().trim().isEmpty()) {
            response.put("message", "Email is required");
        } else if (!user.getEmail().matches("^[A-Za-z0-9+_.-]+@(.+)$")) {
            response.put("message", "Invalid email format");
        } else if (user.getFirstname() == null || user.getFirstname().trim().isEmpty()) {
            response.put("message", "First Name is required");
        } else if (user.getLastname() == null || user.getLastname().trim().isEmpty()) {
            response.put("message", "Last Name is required");
        } else if (user.getDateOfBirth() == null) {
            response.put("message", "Date of birth is required");
        } else if (dob.isAfter(today)) {
            response.put("message", "Date of birth cannot be in the future");
        } else if (Period.between(dob, today).getYears() < 15) {
            response.put("message", "You must be at least 15 years old to register");
        } else if (Period.between(dob, today).getYears() > 120) {
            response.put("message", "Please enter a valid date of birth");
        } else {

            if (userRepository.existsByUsername(user.getUsername())) {
                response.put("message", "Username is already taken");
            } else {
                int result = userRepository.registerUser(user);
                if (result > 0) {
                    response.put("success", true);
                    response.put("message", "User registered successfully");
                    response.put("data", user.getUsername());
                } else {
                    response.put("message", "User registration failed");
                }

            }
        }
        return response;
    }

    @Override
    public Map<String, Object> loginUser(User user) {
        Map<String, Object> response = new HashMap<>();

        response.put("success", false);
        response.put("message", "");
        response.put("data", new ArrayList<>());

        if (user.getUsername() == null || user.getUsername().trim().isEmpty()) {
            response.put("message", "Username is requiured");
        } else if (user.getPassword() == null || user.getPassword().trim().isEmpty()) {
            response.put("message", "Password is required");
        } else {
            if (!userRepository.existsByUsername(user.getUsername())) {
                response.put("message", "User does not exists");
            }
            List result = userRepository.findByUsernameAndPassword(user);
            if (!result.isEmpty()) {
                response.put("message", "Login successful");
                response.put("data", result);
            } else {
                response.put("message", "Invalid credentials");
            }
        }
        return response;
    }
    
}
