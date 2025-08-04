/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.fin.dreamsbackend.repository.impl;

import com.fin.dreamsbackend.database.SQLUtility;
import com.fin.dreamsbackend.formbean.FormBean;
import com.fin.dreamsbackend.repository.HomeRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Admin
 */
@Repository
public class HomeRepositoryImpl implements HomeRepository {

    @Autowired
    SQLUtility SQLUtility;

    @Override
    public int registerUser(FormBean formBean) {

//        List list = new ArrayList();
        StringBuilder query = new StringBuilder("INSERT INTO users(username, email, password, first_name, last_name, date_of_birth) VALUES('");
        query.append(formBean.getUsername()).append("', '");
        query.append(formBean.getEmail()).append("', '");
        query.append(formBean.getPassword()).append("', '");
        query.append(formBean.getFirstName()).append("', '");
        query.append(formBean.getLastName()).append("', '");
        query.append(formBean.getDateOfBirth()).append("');");

        return SQLUtility.persist(query.toString());

    }
}
