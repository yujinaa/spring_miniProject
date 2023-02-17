package com.country.type.test.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.country.type.test.dto.testDTO;
import com.country.type.test.service.testService;

@Controller
public class testController {
	@Autowired testService ts;
	
	//메인페이지
	@GetMapping("index")
	public String index() {
		return "index";
	}
	//선택
	@GetMapping("test/firstPage")
	public String first(testDTO dto) {
		ts.selectAnswer(dto);
		return "redirect:result";
	}
	//결과페이지
	@GetMapping("test/result")
	public String result() {
		return "test/result";
	}
	
	

}
