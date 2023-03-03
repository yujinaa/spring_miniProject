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
				<img alt="1" src="../resources/img/image-1.jpg" class="img-fluid">
			</div>
			<div class="resultCountry">
				<p>중국</p>
			</div>
			<div class="resultDes">
				<p>
					중국은 사람들 사이의 불평등이 용인될 수 있다고 믿는 사회로 상하 관계는 양극화되는 경향이 있습니다. 개인은 공식적인
					권위와 제재의 영향을 받으며 일반적으로 리더십과 주도권에 대한 사람들의 능력에 대해 낙관적입니다.<br> 자신을
					위하기보다 집단의 이익을 위해 행동하는 높은 집단주의적인 문화를 갖고 있기 때문에 조직에 대한 개인의 몰입도가 낮고
					동료와의 관계에서 내집단에 대해서는 협력적인 반면 외집단에 대해서는 차갑거나 심지어 적대적인 경우가 있습니다. <br>성공
					지향적이고 주도적인 남성 사회로 성공을 위해 가족과 여가 우선순위를 희생하는 경향이 있습니다. 그리고 불확실성 회피성이
					낮은 것에 비해 법률과 규칙을 준수하는 것은 상황에 맞게 유연하게 행동하며 모호함을 편안하게 받아들이기 때문에 적응력이
					뛰어납니다. <br>실용적 지향을 가진 사회로 전통을 변화된 조건에 쉽게 적응시키는 능력과 저축과 투자에 대한
					강한 성향, 검소함, 결과 달성 등에 대한 인내를 보여줍니다.<br> 하지만 여가를 중시하지 않고 욕구충족을
					통제하는 억제된 사회의 특징을 가지고 있어 냉소주의와 비관주의 경향이 있습니다.
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