/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.fin.dreamsbackend.repository.impl;

import com.fin.dreamsbackend.database.SQLUtility;
import com.fin.dreamsbackend.model.User;
import org.springframework.stereotype.Repository;
import com.fin.dreamsbackend.repository.UserRepository;
import java.sql.SQLException;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author Admin
 */
@Repository
public class UserRepositoryImpl implements UserRepository {

    @Autowired
    SQLUtility sqlutility;

    @Override
    public int registerUser(User user) {
        StringBuilder insertQuery = new StringBuilder("INSERT INTO users(username, email, password, first_name, last_name, "
                + "date_of_birth) VALUES('");
        insertQuery.append(user.getUsername()).append("', '");
        insertQuery.append(user.getEmail()).append("', '");
        insertQuery.append(user.getPassword()).append("', '");
        insertQuery.append(user.getFirstname()).append("', '");
        insertQuery.append(user.getLastname()).append("', '");
        insertQuery.append(user.getDateOfBirth()).append("');");

        return sqlutility.persist(insertQuery.toString());
    }

    @Override
    public boolean existsByUsername(String Username) {
        try {
            String sql = "SELECT COUNT(*) FROM users WHERE username = ?";
            int count = sqlutility.getInt(sql, Username);
            return count > 0;
        } catch (SQLException ex) {
            return false;
        }
    }

}
