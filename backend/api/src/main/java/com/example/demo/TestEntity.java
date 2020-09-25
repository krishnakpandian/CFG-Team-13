package com.example.demo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Entity")
public class TestEntity {
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "username")
    private String username;
    
    public String getUsername() {
    	return username;
    }
    public void setUsername(String username) {
    	this.username = username;
    }
    public Integer getId() {
    	return id;
    }
    public void setUsername(Integer id) {
    	this.id = id;
    }
     
}
