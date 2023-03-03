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
				<img alt="12" src="../resources/img/image-12.jpg" class="img-fluid">
			</div>
			<div class="resultCountry">
				<p>멕시코</p>
			</div>
			<div class="resultDes">
				<p>
					멕시코는 위계 사회로 계층적 질서를 수용한다는 것을 의미합니다. 조직의 계층 구조는 내재된 불평등을 반영하는 것으로
					간주되고 부하 직원은 지시를 받기를 기대하는 성향이 있습니다. <br> 그리고 집단주의 사회로 간주되는데 이것은
					가족, 그룹에 대한 긴밀하고 장기적으로 헌신하는 모습에서 볼 수 있습니다. 이런 사회는 모든 사람이 구성원에 대해 책임을
					지는 강력한 관계를 조성합니다.<br> 멕시코는 남성적 성형을 가진 사회입니다. 관리자는 결단력 있고
					독단적이어야 하며, 형평성, 경쟁 및 성과를 강조하며 갈등은 그들과 싸워 해결해야 한다는 생각을 갖고 있습니다. 그리고
					불확실성을 피하는 것에 대한 선호도가 매우 높습니다. 높은 불확실성 회피를 나타내는 국가는 신념과 행동에 대한 엄격함을
					유지하고 새로운 아이디어를 용납하지 않습니다.<br> 또 다른 특징으로 장기적인 방향 선호도가 낮기 때문에
					미래를 위해 저축하는 경향이 상대적으로 적으며 빠른 결과 달성에 중점을 둡니다. <br> 이러한 영향으로 멕시코
					사람들은 일반적으로 인생을 즐기고 즐기는 것과 관련하여 자신의 충동과 욕구를 실현하려는 의지를 나타냅니다. 그들은
					긍정적인 태도를 가지고 있으며 낙관적인 경향이 있고 여가를 중시하고 마음대로 행동하는 특징이 있습니다.
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