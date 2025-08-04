/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.fin.dreamsbackend.database;

import java.sql.SQLException;
import java.util.List;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

/**
 *
 * @author Admin
 */
@Component
public class SQLUtility {

    DatabaseConfig config = new DatabaseConfig();
    JdbcTemplate jdbcTemplate = new JdbcTemplate(config.dataSource());

    public int persist(String query) throws DataAccessException {
        return jdbcTemplate.update(query);
    }

    public List getList(String query) throws SQLException {
        return jdbcTemplate.queryForList(query);
    }

    public int getInt(String query, Object... args) throws SQLException {
        Integer result = jdbcTemplate.queryForObject(query, Integer.class, args);
        return result != null ? result : 0;
    }
}
