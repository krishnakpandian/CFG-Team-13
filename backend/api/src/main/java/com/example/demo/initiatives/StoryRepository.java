package com.example.demo.initiatives;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface StoryRepository extends JpaRepository<Story, Integer> {

	@Query
	public Story findByMajor(String major);
	
}
