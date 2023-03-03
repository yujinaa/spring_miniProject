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
<meta property="og:image" content="../resources/img/map.png" />
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
				<img alt="3" src="../resources/img/image-3.jpg" class="img-fluid">
			</div>
			<div class="resultCountry">
				<p>인도</p>
			</div>
			<div class="resultDes">
				<p>
					인도는 상사 또는 권력 보유자의 지시에 따르며, 권력을 가진 사람과 서열에서 더 낮은 사람 사이의 불평등한 권리를
					수용합니다. 그래서 자신의 기능과 기대하는 바에 대해 명확하게 지시받기를 기대합니다. 통제는 익숙한 단어이며 심지어
					심리적인 안정감이 있고 이들의 의사소통은 하향식이며 스타일이 지시적이며 종종 부정적인 피드백은 윗선에 제공되지 않습니다.
					<br> 집단주의적 특성과 개인주의적 특성을 모두 지닌 사회입니다. 그리고 인도는 남성 사회로 간주되는데 실제로
					성공과 권력을 시각적으로 보여주는 면에서 매우 남성적입니다. 자신의 성공을 광고하는 데 사용되는 영상과 과시 목적인
					디자이너 브랜드도 널리 사용됩니다. <br>그러나 인도는 또한 수백만의 신과 다양한 종교 철학을 가진 영적
					국가입니다. 또한 겸손과 금욕의 가치에 대한 충분한 교훈을 제공하는 가장 오래 살아남은 문화 중 하나를 가진 고대
					국가입니다. <br> 또 다른 특징은 불확실성을 피하기 위한 선호도는 중간 정도로 낮습니다. 인도에서는
					불완전함을 받아들이며 어떤 것도 완벽할 필요도 없고 정확히 계획한 대로 진행될 필요도 없다고 생각하고 규칙은 우회하기
					위한 경우가 많으며 극복할 수 없어 보이는 문제에 대한 독특하고 독창적인 해결책을 찾습니다. <br>하지만
					절제의 문화를 갖고 있는데 이런 사회는 냉소주의와 비관주의 경향이 있습니다.
				</p>
			</div>
			<script type="text/javascript">
				function goTest() {
					location.href = "${contextPath }/index";
				}
			</script>
			<div class="button-part">
				<button type="button" onclick="js:goTest()" class="goTest-btn">테스트
					하러가기</button>
			</div>
		</div>
	</section>
</body>
</html>