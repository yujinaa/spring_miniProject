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
				<img alt="8" src="../resources/img/image-8.jpg" class="img-fluid">
			</div>
			<div class="resultCountry">
				<p>독일</p>
			</div>
			<div class="resultDes">
				<p>
					고도로 분권화되고 강력한 중산층의 지원을 받는 독일은 직접적이고 참여적인 의사소통 및 회의 스타일이 일반적이며, 통제를
					싫어하는 사회입니다. <br>독일 사회는 진정한 개인주의 사회로 자아실현의 이상에 대한 강한 믿음이 있습니다.
					<br> 독일은 남성 사회로 간주됩니다. 10살이되면 아이들을 여러 유형의 학교로 분리해 보내기 때문에 성과를
					매우 중요하게 여기며 사람들은 오히려 "일하기 위해 산다"고 일에서 자존감을 끌어냅니다. <br> 그리고
					불확실성 회피 국가 중 하나로 점수가 높은데 계획을 진행하려면 체계적인 개요가 제공되어야 하고 이는 법제도에도 반영이
					됩니다. 그래서 독일인은 전문성에 크게 의존하여 높은 불확실성을 보상하는 것을 선호합니다. <br>또 다른
					특징은 독일은 실용주의 국가임을 나타냅니다. 실용적 지향을 가진 사회에서 사람들은 전통을 변화된 조건에 쉽게 적응시키는
					능력, 저축과 투자에 대한 강한 성향, 검소함, 결과 달성에 대한 인내를 보여줍니다. 하지만 하지만 절제의 문화를 갖고
					있는데 이런 사회는 냉소주의와 비관주의 경향이 있습니다.
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