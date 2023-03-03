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
				<img alt="7" src="../resources/img/image-7.jpg" class="img-fluid">
			</div>
			<div class="resultCountry">
				<p>이탈리아</p>
			</div>
			<div class="resultDes">
				<p>
					이탈리아는 북부와 남부 특징이 다른데 북부 이탈리아의 경우 통제와 감독은 일반적으로 팀워크와 개방적인 관리 스타일을
					선호하는 젊은 세대 사이에서 싫어하는 반면 남부 이탈리아에서는 북부 이탈리아와는 정반대의 성향이 나타납니다.<br>
					개인주의 문화로 본인이 중심이고, 자신만의 개인적인 생각과 삶의 목표를 갖는 이탈리아인에게는 동기 부여가 되며 행복은
					개인적인 성취를 통해 이룰수 있다고 생각합니다. 그리고 성공 지향적이고 주도적인 남성 사회입니다. 아이들은 어릴 때부터
					경쟁이 좋은 것이고 승자가 되는 것이 인생에서 중요하다는 것을 배우며 아름다운 자동차, 큰 집, 요트와 같은 지위 상징을
					획득하고 이국적인 나라를 여행함으로써 그들의 성공을 보여주려고 합니다. 또한 근무 환경은 모든 이탈리아인이 성공할 수
					있는 곳이기 때문에 경력을 쌓기 위한 동료 간의 경쟁이 매우 치열할 수 있습니다. <br> 그 다음 특징은
					불확실성 회피가 높기 때문에 상세한 계획을 초래합니다. 변화하는 환경에서의 유연함을 발휘하는 것은 매우 스트레스가 될 수
					있습니다. 또한 실용적 지향을 가진 사회로 그들은 전통을 변화된 조건에 쉽게 적응시키는 능력, 저축과 투자에 대한 강한
					성향, 검소함, 결과 달성에 대한 인내를 보여줍니다. <br>하지만 하지만 절제의 문화를 갖고 있는데 이런
					사회는 냉소주의와 비관주의 경향이 있습니다.
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