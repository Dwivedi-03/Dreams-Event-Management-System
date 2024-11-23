/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.fin.dreamsbackend.controller;

import com.fin.dreamsbackend.formbean.FormBean;
import com.fin.dreamsbackend.service.impl.HomeServiceImpl;
import java.util.HashMap;
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
@RequestMapping(value = "/api/v1")
public class HomeController {

    @Autowired
    HomeServiceImpl homeServiceImpl;

    @RequestMapping(value = "/test", method = RequestMethod.GET)
    public ResponseEntity test() {
        return new ResponseEntity("Hello World!", HttpStatus.OK);
    }

    @RequestMapping(value = "/registerUser", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity registerUser(@RequestBody FormBean formBean) {
        Map map = new HashMap();
        map.put("data", homeServiceImpl.registerUser(formBean));
        return new ResponseEntity(map, HttpStatus.OK);
    }

}
