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
				<img alt="11" src="../resources/img/image-11.jpg" class="img-fluid">
			</div>
			<div class="resultCountry">
				<p>캐나다</p>
			</div>
			<div class="resultDes">
				<p>
					캐나다 문화는 상호의존성을 특징으로 하며 평등에 가치를 두고 있습니다. 서로 협의하고 자유롭게 정보를 공유하는 것이
					당연하며 의사소통과 관련하여 캐나다인들은 직접적인 정보 교환을 중시합니다. 그리고 개인주의 문화로 특징지을 수 있는데
					자신과 직계 가족을 부양하는 느슨하게 짜여진 사회로 해석됩니다. 마찬가지로, 직업적인 면에서 자립적이고 주도권을 발휘하는
					경향이 있습니다.<br> 적당히 남성적인 사회로 일반적으로 캐나다인은 일과 스포츠 모두에서 모든 노력에서 높은
					수준의 성과를 달성하기 위해 노력합니다. 또 다른 특징은 불확실성을 수용합니다. 이것은 새로운 아이디어를 쉽게 받아들이고
					제품과 관련하여 새롭거나 다른 것을 시도하려는 의지를 나타냅니다. 캐나다인은 또한 누구의 아이디어나 의견에도 관대하며
					표현의 자유를 허용합니다. 하지만 그들은 전통을 크게 존중하고 미래를 위해 저축하는 경향이 상대적으로 적으며 빠른 결과를
					얻는 데 집중합니다. <br>마지막으로 관대함이 높은 사회의 사람들은 일반적으로 인생을 즐기고 즐기는 것과
					관련하여 자신의 충동과 욕구를 실현하려는 의지를 나타냅니다. 또한 긍정적인 태도를 가지고 있으며 낙관적인 경향이 있어서
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