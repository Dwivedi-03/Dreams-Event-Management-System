/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.fin.dreamsbackend.service.impl;

import com.fin.dreamsbackend.formbean.FormBean;
import com.fin.dreamsbackend.repository.impl.HomeRepositoryImpl;
import com.fin.dreamsbackend.service.HomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Admin
 */
@Service
public class HomeServiceImpl implements HomeService {

    @Autowired
    HomeRepositoryImpl HomeRepositoryimpl;

    @Override
    public int registerUser(FormBean formBean) {
        return HomeRepositoryimpl.registerUser(formBean);
    }
}
