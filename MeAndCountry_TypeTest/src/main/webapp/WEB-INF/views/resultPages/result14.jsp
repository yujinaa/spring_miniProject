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
				<img alt="14" src="../resources/img/image-14.jpg" class="img-fluid">
			</div>
			<div class="resultCountry">
				<p>아르헨티나</p>
			</div>
			<div class="resultDes">
				<p>
					아르헨티나는 권력간 불평등이 최소화 되야한다고 생각하는 것으로 최하위권에 있습니다. 원인은 1900년경에 약 650만
					명의 유럽 이민자들이 아르헨티나에 들어왔고 당시 주민의 30% 이상이 해외에서 태어났기 때문에 불평등을 용인하지 않는
					사회라고 할 수 있습니다.<br>그리고 모든 라틴 국가 중에서 가장 개인주의적인 국가이지만 많은 집단주의적
					특성이 우세합니다. 예를 들어 현대적이고 개인주의적인 특성은 특히 대도시 대기업에서 찾을 수 있습니다. 고용주-고용인
					연결은 다소 계산적이며 개인 생활과 직장 생활 사이에 엄격한 구분이 있습니다.<br>불확실성 회피성은 매우
					높은데 대부분의 라틴 아메리카 국가도 마찬가지입니다. 이러한 사회는 삶을 구조화하기 위해 규칙과 정교한 법률 시스템에
					대한 강한 필요성을 보여줍니다. 또 다른 특징은 매우 규범적인 문화를 가지고 있는 것으로 나타났습니다. 전통을 크게
					존중하고 미래를 위해 저축하는 경향이 상대적으로 적으며 빠른 결과를 얻는 데 집중합니다. 마지막으로 관대한 사회로 분류된
					사람들은 일반적으로 인생을 즐기고 즐기는 것과 관련하여 자신의 충동과 욕구를 실현하려는 의지를 나타내고 긍정적인 태도를
					가지고 있으며 낙관적인 경향이 있습니다.
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