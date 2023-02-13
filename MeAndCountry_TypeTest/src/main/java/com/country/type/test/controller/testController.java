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
	@GetMapping("test/q1")
	public String firstPage(testDTO dto) {
		return "test/q1";
	}
	@GetMapping("test/q2")
	public String secondPage(testDTO dto) {
		return "test/q2";
	}
	@GetMapping("test/q3")
	public String thirdPage(testDTO dto) {
		return "test/q3";
	}
	@GetMapping("test/q4")
	public String fourthPage(testDTO dto) {
		return "test/q4";
	}
	@GetMapping("test/q5")
	public String fifthPage(testDTO dto) {
		return "test/q5";
	}
	@GetMapping("test/q6")
	public String sixthPage(testDTO dto) {
		return "test/q6";
	}
	
	@GetMapping("test/result")
	public String result() {
		return "test/result";
	}
	
	

}
