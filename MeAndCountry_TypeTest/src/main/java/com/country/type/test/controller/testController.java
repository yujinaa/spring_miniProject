package com.country.type.test.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class testController {
	@GetMapping("index")
	public String index() {
		return "index";
	}
	@GetMapping("test/q1")
	public String firstPage() {
		return "test/q1";
	}
	@GetMapping("test/q2")
	public String secondPage() {
		return "test/q2";
	}
	@GetMapping("test/q3")
	public String thirdPage() {
		return "test/q3";
	}
	@GetMapping("test/q4")
	public String fourthPage() {
		return "test/q4";
	}
	@GetMapping("test/q5")
	public String fifthPage() {
		return "test/q5";
	}
	@GetMapping("test/q6")
	public String sixthPage() {
		return "test/q6";
	}
	
	

}
