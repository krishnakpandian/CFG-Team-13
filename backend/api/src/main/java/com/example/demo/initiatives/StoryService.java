package com.example.demo.initiatives;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class StoryService {
	
	@Autowired StoryRepository repo;
	
	public List<Story> getStories() {

		List<Story> list = repo.findAll();
		return list;

	}
	
	public Story postEntity(Story entity) {
		return repo.save(entity);
	}
	
	public void deleteEntity(Integer id) {
		repo.deleteById(id);
	}
}
