package com.country.type.test.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class testController {
	
	//메인페이지
	@GetMapping("index")
	public String index() {
		return "index";
	}
	@GetMapping("resultPages/result0")
	public String result0() {
		return "resultPages/result0";
	}

}
