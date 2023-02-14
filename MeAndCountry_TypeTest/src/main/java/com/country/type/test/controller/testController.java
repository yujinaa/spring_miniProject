package com.country.type.test.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.country.type.test.dto.testDTO;
import com.country.type.test.service.testService;

@Controller
public class testController {
//	@Autowired testService ts;
	
	@GetMapping("index")
	public String index() {
		return "index";
	}
//	
//	@GetMapping("firstPage")
//	public String first() {
//		return "test/result";
//	}
	@GetMapping("test/result")
	public String result() {
		return "test/result";
	}
	
	

}
