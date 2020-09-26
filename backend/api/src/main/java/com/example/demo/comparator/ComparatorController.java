package com.example.demo.comparator;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping(path = "/v1/api")
public class ComparatorController {


	@Autowired
	private ComparatorService service;


	@PostMapping(path="/calculate" , produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<ComparatorReturnDto> postEntity(@RequestBody ComparatorDto dto) {
		ComparatorReturnDto result = service.calculate(dto);

		return new ResponseEntity<>(result, HttpStatus.CREATED);
	}

}