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
				<img alt="4" src="../resources/img/image-4.jpg" class="img-fluid">
			</div>
			<div class="resultCountry">
				<p>태국</p>
			</div>
			<div class="resultDes">
				<p>
					태국은 불평등이 용인되는 사회로 아시아 국가 평균보다 약간 낮습니다. 각 직급에는 특권이 있으며 직원은 보호와 지도에
					대한 보답으로 상사에 대한 충성, 존경 및 존경을 나타내는데 이것은 가부장적 관리로 이어질 수 있습니다. <br>매우
					집단주의적인 국가로 내집단에 대한 충성이 가장 중요하며 사회는 모든 사람이 그룹의 동료 구성원에 대해 책임을 지는 강력한
					관계를 조성합니다. 그리고 여성 사회로 간주되어 평균 아시아 국가 53개, 세계 평균 50개 중 남성성 순위가 가장
					낮습니다. 그렇기 때문에 자기 ​​주장과 경쟁력이 덜한 사회를 의미하기도 합니다.<br> 또 다른 특징은
					불확실성을 피하기 위한 선호도를 약간 나타내는데 이러한 수준의 불확실성을 최소화하거나 줄이기 위해 엄격한 규칙, 법률,
					정책 및 규정을 채택하고 시행합니다. 이런 사회의 궁극적인 목표는 예상치 못한 상황을 제거하거나 피하기 위해 모든 것을
					통제하는 것입니다. <br> 태국 문화는 실용적이기보다 규범적이라는 것을 나타냅니다. 그러한 사회의 사람들은
					전통을 크게 존중하고 미래를 위해 저축하는 경향이 상대적으로 적으며 빠른 결과를 얻는 데 집중합니다.
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