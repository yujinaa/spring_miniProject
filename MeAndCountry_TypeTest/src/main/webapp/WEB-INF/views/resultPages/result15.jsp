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
				<img alt="15" src="../resources/img/image-15.jpg" class="img-fluid">
			</div>
			<div class="resultCountry">
				<p>이집트</p>
			</div>
			<div class="resultDes">
				<p>
					이집트 사람들은 모두에게 자리가 있고 계층적 질서를 받아들입니다. 조직의 계층 구조는 내재된 불평등을 반영하는 것으로
					간주되고, 부하 직원은 지시를 받기를 기대합니다.<br> 그리고 집단주의 사회로 간주됩니다. 이러한 문화에서
					충성심은 가장 중요하며 대부분의 다른 사회적 규칙과 규정보다 우선시하며 모든 사람이 동료 구성원에 대해 책임을 지는
					강력한 관계를 조성합니다. 또한 여성적 요소보다 남성적 요소가 약간 더 존재함을 반영하여 보다 성공 지향적이고 추진력
					있게 만듭니다. <br> 또 다른 특d지은 불확실성을 피하는 것을 약간 선호하는데 이것은 신념과 행동에 대한
					엄격함을 유지하고 새로운 아이디어를 용납하지 않는 경향이 있습니다. 그리고 문화가 다소 규범적임을 나타냅니다. 그러한
					사회의 사람들의 생각은 규범적이고 전통을 존중하고, 미래를 위해 저축하는 경향이 상대적으로 적으며, 빠른 결과 달성에
					중점을 둡니다. <br>하지만 이집트는 매우 억제된 국가로 표시됩니다. 이러한 사회는 냉소주의와 비관주의 경향이
					있고 여가를 중시하지 않고 욕구충족을 통제하기 때문에 이 성향을 가진 사람들은 자신의 행동이 사회적 규범에 의해
					제한된다는 인식을 가지고 있으며 자신을 탐닉하는 것이 다소 잘못되었다고 생각합니다.
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