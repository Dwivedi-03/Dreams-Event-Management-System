/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.fin.dreamsbackend.repository.impl;

import com.fin.dreamsbackend.formbean.FormBean;
import com.fin.dreamsbackend.repository.HomeRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Admin
 */
@Repository
public class HomeRepositoryimpl implements HomeRepository {

    @Override
    public List registerUser(FormBean formBean) {

        List list = new ArrayList();
        list.add("Jyoti");
        list.add("Smita");
        list.add("Rupa");
        return list;
    }
}
