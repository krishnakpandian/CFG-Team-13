package com.example.demo;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping(path = "/v1/api")
public class Controller {


	@Autowired
	private Endpoints service;

	@GetMapping(path="/getAll" , produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<TestEntity>> getAll() {
		
		List<TestEntity> entities = service.getEntities();

		return new ResponseEntity<>(entities, HttpStatus.OK);
	}
	//--------------------------------------------------------------------------------------------------------	

	@PostMapping(path="/create" , produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<TestEntity> postEntity(@RequestBody TestEntity entity) {
		TestEntity saved = service.addEntity(entity);

		return new ResponseEntity<>(saved, HttpStatus.CREATED);
	}
	//--------------------------------------------------------------------------------------------------------	

		@PostMapping(path="/delete/{id}" , produces=MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<TestEntity> deleteEntity(@PathVariable Integer id) {
			service.deleteEntity(id);

			return new ResponseEntity<>(HttpStatus.OK);
		}
}