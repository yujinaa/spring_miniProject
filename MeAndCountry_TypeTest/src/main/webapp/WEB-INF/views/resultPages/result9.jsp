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
				<img alt="9" src="../resources/img/image-9.jpg" class="img-fluid">
			</div>
			<div class="resultCountry">
				<p>스위스</p>
			</div>
			<div class="resultDes">
				<p>
					사람들 사이의 불평등이 최소화되어야 한다고 믿는 사회인 스위스는 독립적이고, 편의를 위한 계층 구조, 동등한 권리,권한을
					부여합니다. <br> 그리고 느슨하게 짜여진 사회적 틀에 대한 선호도가 높기 때문에 개인주의 사회로 간주됩니다.
					독일어권 스위스와 프랑스어권 국가의 순위는 모두 남성적 사회를 나타냅니다. 즉, 독일어권 부분에서 그 영향이 훨씬 더
					두드러지긴 하지만 매우 성공 지향적이고 주도적인데 남성적인 국가에서 사람들은 "일하기 위해 산다"는 생각과 관리자는
					결단력이 있어야 하며 경쟁 및 성과에 중점을 둡니다. <br>스위스 사람들 중 프랑스어를 사용하는 사람들은
					불확실성을 피하는 것을 선호하는 반면 독일어를 사용하는 사람들은 점수가 낮습니다. 높은 불확실성 회피를 나타내는 국가는
					신념과 행동에 대한 엄격함을 유지하고 새로운 아이디어를 용납하지 않습니다. <br>스위스 문화는 확실히
					실용적입니다. 실용적 지향을 가진 사회에서 사람들은 변화된 조건에 쉽게 적응시키는 능력, 저축과 투자에 대한 강한 성향을
					보여줍니다. 또 다른 특징은 관대함이 높은 사회로 사람들은 일반적으로 인생을 즐기고 즐기는 것과 관련하여 자신의 충동과
					욕구를 실현하려는 의지를 나타내는 경향이 있습니다. 그들은 긍정적인 태도를 가지고 있으며 낙관적인 경향이 있고 또한
					여가를 중시합니다.
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