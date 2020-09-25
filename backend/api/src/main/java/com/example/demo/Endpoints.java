package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class Endpoints {
	
	@Autowired Repository repo;
	
	public List<TestEntity> getEntities() {

		List<TestEntity> list = repo.findAll();
		return list;

	}
	
	public TestEntity addEntity(TestEntity entity) {
		return repo.save(entity);
	}
	
	public void deleteEntity(Integer id) {
		repo.deleteById(id);
	}
}
