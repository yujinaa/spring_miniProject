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
				<img alt="10" src="../resources/img/image-10.jpg" class="img-fluid">
			</div>
			<div class="resultCountry">
				<p>미국</p>
			</div>
			<div class="resultDes">
				<p>
					세계에서 가장 개인주의적인 문화로 미국 사회와 정부의 모든 측면에서 동등한 권리를 강조함으로써 입증됩니다. 미국 조직
					내에서 계층 구조는 편의를 위해 설정되고 동시에 의사소통은 직접적입니다. 그리고 미국인들은 잘 알지 못하는 사람들과
					교류하는 데 익숙하기 때문에 결과적으로 정보를 얻거나 찾기 위해 상대에게 질문하는 것을 부끄러워하지 않습니다. <br>남성성이
					높습니다. 이는 전형적인 미국의 행동 패턴에서 볼 수 있는데 높은 남성성 욕구와 세계에서 가장 개인주의적인 욕구의
					조합으로 설명할 수 있습니다. 즉, 미국인들은 모두 남성적 충동을 개별적으로 보여줍니다. <br>불확실성 회피
					차원에서 미국은 낮은 편에 속합니다.기술, 비즈니스 관행 또는 음식과 관련하여 새로운 아이디어, 새롭거나 다른 것을
					시도하려는 의지에 대한 상당한 정도의 수용을 하고 누구든 생각이나 의견에 더 관대하고 표현의 자유를 허용하는 경향이
					있습니다. 또 다른 특징은 미국인들은 새로운 정보가 사실인지 확인하기 위해 분석하는 경향이 있고 미국 기업은 단기적으로
					실적을 측정하며 이것은 개인이 작업장 내에서 빠른 결과를 위해 노력하도록 유도합니다.<br> 또한 열심히 일하고
					열심히 놀아라라는 마인드를 갖고 있는데 이것의 단점은 마약으로까지 이어질 수 있기 때문에 미국의 마약 중독은 다른 많은
					부유한 국가보다 높습니다.
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