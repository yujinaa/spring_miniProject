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
				<img alt="6" src="../resources/img/image-6.jpg" class="img-fluid">
			</div>
			<div class="resultCountry">
				<p>프랑스</p>
			</div>
			<div class="resultDes">
				<p>
					프랑스는 어느 정도의 불평등이 용인되는 사회로 아이들이 어느 정도 부모에게 정서적으로 의존하도록 양육됩니다. 이 종속성은
					교사에게 이전되고 나중에는 상사에게 이전되고 권력은 기업과 정부뿐만 아니라 지리적으로도 중앙 집중화됩니다. <br>그리고
					개인주의 사회로 나타나는데 부모는 자녀가 속한 그룹과 관련하여 자녀를 정서적으로 독립적으로 만드는데 이것은 자신과 가족만
					돌봐야 한다는 것을 의미합니다. <br> 프랑스는 다소 여성스러운 문화를 가지고 있습니다. 주당 35시간 근무,
					연간 5주의 휴일 및 삶의 질에 중점을 둔 것으로 알 수 있지만 또 다른 독특한 특징이 있습니다. 상류층은 여성성을,
					노동계급은 남성적 성향이 나타나는데 다른 나라에서는 볼 수 없는 특징입니다. <br> 그리고 불확실성 회피가
					높은데 프랑스인은 놀라움을 좋아하지 않습니다. 구조와 계획이 필요하고 회의 및 협상 전에 그들은 필요한 모든 정보를
					받기를 좋아하기 때문에 결과적으로 프랑스인들은 원자력발전소, 쾌속열차, 항공산업의 경우와 같이 안정된 환경에서 복잡한
					기술과 시스템을 개발하는 데 능합니다. <br> 또한 불확실성 회피에 대한 높은 점수와 함께 일반적으로 생각하는
					것보다 덜 편안한 삶을 즐긴다는 것을 의미합니다. 실제로 프랑스는 행복 지수에서 그다지 높은 점수를 받지 못했습니다.
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