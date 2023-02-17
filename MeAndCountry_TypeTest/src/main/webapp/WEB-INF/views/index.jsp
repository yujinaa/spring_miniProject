<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:set var="contextPath" value="${pageContext.request.contextPath }" />
<!DOCTYPE html>
<html>
<head>
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<link rel="stylesheet" href="resources/css/index.css">
<link rel="stylesheet" href="resources/css/main.css">
<link rel="stylesheet" href="resources/css/animation.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link
	href="https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap"
	rel="stylesheet">

<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
	<div class="container">
		<!-- 시작 페이지 -->
		<section id="start-page">
			<div class="h1-part">
				<p class="h1">내 성향과 맞는 나라는 어디일까?</p>
			</div>
			<div class="h3-part">
				<h4 class="h3">간단한 테스트를 통해 알아보는 나와 맞는 나라 찾기</h4>
			</div>
			<div class="start-img">
				<img src="resources/img/world-map.jpg">
			</div>
			<div class="count">
				지금까지 총 ~~명이 참여했어요!<br>
			</div>
			<div class="start-btn">
				<button type="button" id="startBtn" onclick="js:begin()">시작하기</button>
			</div>
		</section>

		<!-- 문제 페이지 -->
		<form action="${contextPath }/test/firstPage" method="post">
			<section id="main-page">
				<div class="pageBox">
					<div>
						<!--몇번째 문항인지 숫자로 표현 1번-->
						<h1 class="q-num">Q1</h1>
						<p class="progress-txt">1/6</p>
					</div>
					<div class="question-box"></div>

					<div class="answer-box"></div>
				</div>
			</section>

			<div class="result">
				<input type="submit" value="결과보기" onclick="result()">
			</div>
		</form>

		<!-- 결과 페이지 -->
		<section id="result-page">
			<h1>결과</h1>
			<h2>결과 설명</h2>
		</section>
	</div>
	<script src="resources/js/test.js"></script>
</body>
</html>