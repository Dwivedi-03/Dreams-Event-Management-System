/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.fin.dreamsbackend.repository;

import com.fin.dreamsbackend.model.User;
import java.util.List;

/**
 *
 * @author Admin
 */
public interface UserRepository {

    public int registerUser(User user);

    public boolean existsByUsername(String Username);

    public List findByUsernameAndPassword(User user);
}
