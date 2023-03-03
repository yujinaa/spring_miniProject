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
	@GetMapping("resultPages/result1")
	public String result1() {
		return "resultPages/result1";
	}
	@GetMapping("resultPages/result2")
	public String result2() {
		return "resultPages/result2";
	}
	@GetMapping("resultPages/result3")
	public String result3() {
		return "resultPages/result3";
	}
	@GetMapping("resultPages/result4")
	public String result4() {
		return "resultPages/result4";
	}
	@GetMapping("resultPages/result5")
	public String result5() {
		return "resultPages/result5";
	}
	@GetMapping("resultPages/result6")
	public String result6() {
		return "resultPages/result6";
	}
	@GetMapping("resultPages/result7")
	public String result7() {
		return "resultPages/result7";
	}
	@GetMapping("resultPages/result8")
	public String result8() {
		return "resultPages/result8";
	}
	@GetMapping("resultPages/result9")
	public String result9() {
		return "resultPages/result9";
	}
	@GetMapping("resultPages/result10")
	public String result10() {
		return "resultPages/result10";
	}
	@GetMapping("resultPages/result11")
	public String result11() {
		return "resultPages/result11";
	}
	@GetMapping("resultPages/result12")
	public String result12() {
		return "resultPages/result12";
	}
	@GetMapping("resultPages/result13")
	public String result13() {
		return "resultPages/result13";
	}
	@GetMapping("resultPages/result14")
	public String result14() {
		return "resultPages/result14";
	}
	@GetMapping("resultPages/result15")
	public String result15() {
		return "resultPages/result15";
	}
	@GetMapping("resultPages/result16")
	public String result16() {
		return "resultPages/result16";
	}
	@GetMapping("resultPages/result17")
	public String result17() {
		return "resultPages/result17";
	}
}
