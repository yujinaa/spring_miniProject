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
				<img alt="5" src="../resources/img/image-5.jpg" class="img-fluid">
			</div>
			<div class="resultCountry">
				<p>영국</p>
			</div>
			<div class="resultDes">
				<p>
					영국은 사람들 사이의 불평등이 최소화되어야 한다고 믿는 사회에 속합니다. 흥미롭게도 노동 계급보다 영국의 상류층에서
					권력간 불평등 지수가 더 낮습니다. <br> 영국인은 매우 개인주의적이고 사적이며 아이들은 어릴 때부터 스스로
					생각하고 삶의 고유한 목적이 무엇이며 사회에 고유하게 기여할 수 있는 방법을 발견하도록 배우고 행복은 개인적인 성취를
					통해서 이룰수 있다고 생각합니다. 그리고 성공 지향적이고 주도적인 남성 사회이기 때문에 일하기 위해 살고 분명한 성과
					야망을 가지고 있습니다.<br>영국은 불확실성 회피에 대해 낮은 점수를 받았습니다. 즉, 그들은 새로운 정보가
					오면 계획을 변경하는 것을 기쁘게 생각하고 모호한 상황에서 편안함을 느낍니다. 또 다른 특징은 관대함으로 분류되는
					문화임을 나타냅니다. 이런 사회의 사람들은 일반적으로 인생을 즐기는 것과 관련하여 자신의 충동과 욕구를 실현하려는 의지를
					나타내고 긍정적인 태도를 가지고 있으며 낙관적인 경향이 있습니다. 또한 여가를 중시하고 마음대로 행동하며 마음대로 돈을
					쓰기도 합니다.
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