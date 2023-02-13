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
			<div>
				<h1 class="h1">내 성향과 맞는 나라는 어디일까?</h1>
				<h3 class="h3">간단한 테스트를 통해 알아보는 나와 맞는 나라 찾기</h3>
			</div>
			<div class="start-img">
				<img src="resources/img/world-map.jpg">
			</div>
			<div class="start-btn">
				지금까지 총 ~~명이 참여했어요!<br>
				<button type="button" id="startBtn" onclick="js:begin()">시작하기</button>
			</div>
		</section>

		<!-- 문제 페이지 -->
		<section id="main-page">
			<div class="pageBox">
				<form action="${contextPath }/test/firstPage" name="page1"
					method="get">
					<div>
						<!--몇번째 문항인지 숫자로 표현-->
						<h1 class="q-num">Q1</h1>
						<p class="progress-txt">1/6</p>
					</div>
					<div>
					 <p class="q1">조직이나 단체에서 불평등한 상황이 생길 경우<br> 권리를 요구하기보다는 수용한다.</p>
					</div>
	
					<div>
						<button type="button" value="0" class="q1-btn">전혀 아니다</button>
						<br>
						<button type="button" value="1" class="q1-btn">약간 아니다</button>
						<br>
						<button type="button" value="2" class="q1-btn">보통이다</button>
						<br>
						<button type="button" value="3" class="q1-btn">약간 그렇다</button>
						<br>
						<button type="button" value="4" class="q1-btn">매우 그렇다</button>
						<br>
					</div>
				</form>
			</div>
		</section>

		<!-- 결과 페이지 -->
		<section id="result-page">
			<h1>결과</h1>
			<h2>결과 설명</h2>
		</section>
	</div>
	<script src="resources/js/test.js"></script>
</body>
</html>