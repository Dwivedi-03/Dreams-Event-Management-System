/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.fin.dreamsbackend.service.impl;

import com.fin.dreamsbackend.formbean.FormBean;
import com.fin.dreamsbackend.repository.impl.HomeRepositoryimpl;
import com.fin.dreamsbackend.service.HomeService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Admin
 */
@Service
public class HomeServiceImpl implements HomeService {

    @Autowired
    HomeRepositoryimpl HomeRepositoryimpl;

    @Override
    public List registerUser(FormBean formBean) {
        return HomeRepositoryimpl.registerUser(formBean);
    }
}
