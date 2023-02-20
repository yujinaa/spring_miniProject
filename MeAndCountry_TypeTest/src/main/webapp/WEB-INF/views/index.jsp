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
<!-- 
 <link rel="stylesheet" href="resources/css/result.css">
 -->
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
				<div class="count-num">지금까지 총 ${count }명이 참여했어요!</div><br>
			</div>
			<div class="start-btn">
				<button type="button" id="startBtn" onclick="js:begin()">시작하기</button>
			</div>
		</section>

		<!-- 문제 페이지 -->
		<!-- 
		 <form action="${contextPath }/test/firstPage" method="get">
		 -->
		<section id="main-page">
			<div class="pageBox">
				<div>
					<!--몇번째 문항인지 숫자로 표현-->
					<h1 class="q-num"></h1>
					<div class="progress">
						<p class="progress-bar"></p>
					</div>
				</div>
				<div class="question-box"></div>

				<div class="answer-box"></div>
			</div>
		</section>
		<section id="result-page">
		<div class = "border-line"> 
			<div class="result-h1">
				<p class="p-h1">나와 맞는 나라는?</p>
			</div>
			<div id="resultImg"></div>
			<div class="resultCountry"></div>
			<div class="resultDes"></div>
			<div class="button-part">
			<button type="button" class="share-btn">공유하기</button>
			<a href="${contextPath }/index"><button type="button"
					class="replay-btn">다시 테스트하기</button></a>
			</div>
		</div>
		</section>
		<!-- 
				<div class="viewResult">
					<input type="button" value="결과보기" onclick="totalResult()" class="view-btn">
				</div>
					 -->
		<!-- 
		</form>
		 -->
	</div>
	<script src="resources/js/test.js"></script>
</body>
</html>