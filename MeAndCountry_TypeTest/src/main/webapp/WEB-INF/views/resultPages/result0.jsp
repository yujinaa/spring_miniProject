<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:set var="contextPath" value="${pageContext.request.contextPath }" />
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="author" content="Ujina">
<meta name="keywords" content="내 성향과 맞는 나라 찾기">
<meta name="description" content="간단한 테스트로 알아보는 성향과 맞는 나라 찾기">
<!-- sns 공유하기 부분 -->
<meta property="og:url" content="https://findcountrytest.netlify.app" />
<meta property="og:title" content="내 성향과 맞는 나라 찾기" />
<meta property="og:type" content="website" />
<meta property="og:image" content="resources/img/map.png" />
<meta property="og:description" content="간단한 테스트로 알아보는 성향과 맞는 나라 찾기" />

<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<link rel="stylesheet" href="../resources/css/index.css">
<link rel="stylesheet" href="../resources/css/main.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link
	href="https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap"
	rel="stylesheet">
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<section id="shareResult-page">
		<div class="border-line">
			<div class="result-h1">
				<p class="p-h1">나와 맞는 나라는?</p>
			</div>
			<div id="resultImg">
				<img alt="0" src="../resources/img/image-0.jpg" class="img-fluid">
			</div>
			<div class="resultCountry">
				<p>한국</p>
			</div>
			<div class="resultDes">
				<p>
					약간 위계적인 사회로 어느 정도 계층적 질서를 수용하는 문화입니다.집단주의 사회로 분류되기 때문에 구성원에 대한 긴밀하고
					장기적인 헌신으로 나타나고 보통 사회적 규칙과 규정을 우선시 하는 경향이 있습니다. <br>한국은 여성성이 더
					높은 사회로 간주되는데 합의를 위해 노력하고,평등과 연대를 중시하며 갈등은 타협과 협상으로 해결합니다.그리고 세계에서
					가장 불확실성을 회피하는 국가 중 하나로 신념과 엄격한 행동을 유지하는데 이런 문화의 사람들은 바쁘고 열심히 일하고 싶은
					내적 충동을 가지고 있으며, 정확성과 시간 엄수를 중요시합니다.<br>가장 실용적이고 장기적인 사회를 지향하는
					사회 중 하나로 단기 이익보다는 꾸준한 성장을 우선시하는 등 장기적인 방향을 봅니다. <br>또 다른 특징은
					절제사회로 여가를 중시하지 않고 욕구충족을 통제하는데 이 성향을 가진 사람들은 자신의 행동이 사회적 규범에 의해
					제한된다는 인식을 가지고 있으며 다소 냉소적이며 비관주의 경향이 있습니다.
				</p>
			</div>
			<script type="text/javascript">
				function goTest() {
					location.href = "${contextPath }/index";
				}
			</script>
			<div class="button-part">
				<button type="button" onclick="js:goTest()"
					class="goTest-btn">테스트 하러가기</button>
			</div>
		</div>
	</section>
</body>
</html>