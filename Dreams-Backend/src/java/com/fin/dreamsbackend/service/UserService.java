/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.fin.dreamsbackend.service;

import com.fin.dreamsbackend.model.User;
import java.util.Map;

/**
 *
 * @author Admin
 */
public interface UserService {

    public Map<String, Object> registerUser(User user);

    public Map<String, Object> loginUser(User user);
}
