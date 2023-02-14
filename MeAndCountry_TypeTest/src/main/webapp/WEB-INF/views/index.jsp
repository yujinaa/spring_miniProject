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
		<form action="${contextPath }/test/firstPage" name="page1"	method="get">
			<section id="main-page">
				<div class="pageBox">

					<div>
						<!--몇번째 문항인지 숫자로 표현 1번-->
						<h1 class="q-num">Q1</h1>
						<p class="progress-txt">1/6</p>
					</div>
					<div>
						<p class="q1">
							조직이나 단체에서 불평등한 상황이 생길 경우<br> 권리를 요구하기보다는 수용한다.
						</p>
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
				</div>
			</section>
		<section id="main-page2">
				<div class="pageBox">

					<div>
						<!--몇번째 문항인지 숫자로 표현 2번-->
						<h1 class="q-num">Q2</h1>
						<p class="progress-txt">2/6</p>
					</div>
					<div>
						<p class="q1">
							전체의 성과보다 개인의 성과가 더 중요하다. 
						</p>
					</div>

					<div>
						<button type="button" value="0" class="q2-btn">전혀 아니다</button>
						<br>
						<button type="button" value="1" class="q2-btn">약간 아니다</button>
						<br>
						<button type="button" value="2" class="q2-btn">보통이다</button>
						<br>
						<button type="button" value="3" class="q2-btn">약간 그렇다</button>
						<br>
						<button type="button" value="4" class="q2-btn">매우 그렇다</button>
						<br>
					</div>
				</div>
			</section>
			<section id="main-page3">
				<div class="pageBox">

					<div>
						<!--몇번째 문항인지 숫자로 표현 3번-->
						<h1 class="q-num">Q3</h1>
						<p class="progress-txt">3/6</p>
					</div>
					<div>
						<p class="q1">
							소통, 화합보다는 경쟁, 성취, 승리가 중요하다고 생각한다.
						</p>
					</div>

					<div>
						<button type="button" value="0" class="q3-btn">전혀 아니다</button>
						<br>
						<button type="button" value="1" class="q3-btn">약간 아니다</button>
						<br>
						<button type="button" value="2" class="q3-btn">보통이다</button>
						<br>
						<button type="button" value="3" class="q3-btn">약간 그렇다</button>
						<br>
						<button type="button" value="4" class="q3-btn">매우 그렇다</button>
						<br>
					</div>
				</div>
			</section>
			<section id="main-page4">
				<div class="pageBox">

					<div>
						<!--몇번째 문항인지 숫자로 표현 3번-->
						<h1 class="q-num">Q4</h1>
						<p class="progress-txt">4/6</p>
					</div>
					<div>
						<p class="q1">
							미래에 대한 불확실하고 모호한 상황보다 예측 가능성과 안정성을 추구한다.
						</p>
					</div>

					<div>
						<button type="button" value="0" class="q4-btn">전혀 아니다</button>
						<br>
						<button type="button" value="1" class="q4-btn">약간 아니다</button>
						<br>
						<button type="button" value="2" class="q4-btn">보통이다</button>
						<br>
						<button type="button" value="3" class="q4-btn">약간 그렇다</button>
						<br>
						<button type="button" value="4" class="q4-btn">매우 그렇다</button>
						<br>
					</div>
				</div>
			</section>
			<section id="main-page5">
				<div class="pageBox">

					<div>
						<!--몇번째 문항인지 숫자로 표현 3번-->
						<h1 class="q-num">Q5</h1>
						<p class="progress-txt">5/6</p>
					</div>
					<div>
						<p class="q1">
							단기적인 이익보다는 장기적인 관점에서의 이익을 추구한다.
						</p>
					</div>

					<div>
						<button type="button" value="0" class="q5-btn">전혀 아니다</button>
						<br>
						<button type="button" value="1" class="q5-btn">약간 아니다</button>
						<br>
						<button type="button" value="2" class="q5-btn">보통이다</button>
						<br>
						<button type="button" value="3" class="q5-btn">약간 그렇다</button>
						<br>
						<button type="button" value="4" class="q5-btn">매우 그렇다</button>
						<br>
					</div>
				</div>
			</section>
			<section id="main-page6">
				<div class="pageBox">
					<div>
						<!--몇번째 문항인지 숫자로 표현 3번-->
						<h1 class="q-num">Q6</h1>
						<p class="progress-txt">6/6</p>
					</div>
					<div>
						<p class="q1">
							여가 생활이나 취미 활동에 대한  욕구가 높다.
						</p>
					</div>
					<div>
						<button type="button" value="0" class="q6-btn">전혀 아니다</button>
						<br>
						<button type="button" value="1" class="q6-btn">약간 아니다</button>
						<br>
						<button type="button" value="2" class="q6-btn">보통이다</button>
						<br>
						<button type="button" value="3" class="q6-btn">약간 그렇다</button>
						<br>
						<button type="button" value="4" class="q6-btn">매우 그렇다</button>
						<br>
					</div>
				</div>
			</section>
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