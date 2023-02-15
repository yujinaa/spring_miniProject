package com.country.type.test.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.country.type.mybatis.test.testMapper;
import com.country.type.test.dto.testDTO;

@Service
public class testServiceImpl implements testService{
	@Autowired testMapper tMapper;

	public void selectAnswer(testDTO dto) {
		try {
			tMapper.selectAnswer(dto);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
