package com.country.type.test.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestParam;

import com.country.type.mybatis.test.testMapper;
import com.country.type.test.dto.testDTO;

@Service
public class testServiceImpl implements testService{
	@Autowired testMapper tMapper;
	public void selectAnswer(testDTO dto, int num) {
		try {
			tMapper.selectAnswer(dto);
			count(num);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	private void count(int num) {
		tMapper.count(num);
	}
	@Override
	public void selectAnswer(testDTO dto) {
		
	}
}