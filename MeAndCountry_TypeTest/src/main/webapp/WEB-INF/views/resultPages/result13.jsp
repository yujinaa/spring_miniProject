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
				<img alt="13" src="../resources/img/image-13.jpg" class="img-fluid">
			</div>
			<div class="resultCountry">
				<p>브라질</p>
			</div>
			<div class="resultDes">
				<p>
					브라질은 위계가 존중되어야 하고 사람들 사이의 불평등이 용인된다고 믿는 사회적 특징이 있습니다. 예를 들어 권력자가 더
					많은 혜택을 받는다는 사실을 정당화하고 회사에는 전적인 책임을 지는 상사가 한 명 있습니다. 그리고 브라질은 개인주의
					성향이 매우 낮기 때문에 비즈니스에서는 신뢰할 수 있고 오래 지속되는 관계를 구축하는 것이 중요합니다. <br>
					브라질은 남성적/여성적 성향이 중간적인 사회로 여성적인 면은 사회에서 지배적인 가치가 타인에 대한 배려와 삶의 질이라는
					것을 의미하는데 반해 남성적인 면은 여성적 성향의 사람들에게 동기를 부여하는 것으로 알 수 있습니다. 또 다른 특징은
					불확실성 회피가 높은 사회이지만 관대한 사회임을 나타냅니다. 관대함에서 높은 점수로 분류된 사회의 사람들은 일반적으로
					인생을 즐기고 즐기는 것과 관련하여 자신의 충동과 욕구를 실현하려는 의지를 나타내고 긍정적인 태도를 가지고 있으며
					낙관적인 경향이 있습니다.
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