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
				<img alt="16" src="../resources/img/image-16.jpg" class="img-fluid">
			</div>
			<div class="resultCountry">
				<p>호주</p>
			</div>
			<div class="resultDes">
				<p>
					호주는 권력간 불평등이 낮은 사회로 관리자는 전문 지식을 위해 개별 직원과 팀에 의존합니다. 관리자와 직원 모두 정보를
					자주 공유하고 동시에 커뮤니케이션은 직접적이며 참여적입니다. 그리고 매우 개인주의적인 문화이기 때문에 사람들은 자립적이고
					주도권을 발휘할 것으로 기대됩니다.<br> 호주는 남성적 사회로 간주되는데 인생에서 자신의 성공과 업적을
					자랑스럽게 여기며 직장에서의 고용 및 승진 결정의 기초를 제공합니다. <br> 또한 규범적인 문화를 가지고
					있는데 그러한 사회의 사람들은 전통을 크게 존중하고 미래를 위해 저축하는 경향이 상대적으로 적으며 빠른 결과를 얻는 데
					집중합니다. 또 다른 특징은 관대함에서 높은 점수로 분류된 사회인데 일반적으로 인생을 즐기고 즐기는 것과 관련하여 자신의
					충동과 욕구를 실현하려는 의지를 나타냅니다. 그들은 긍정적인 태도를 가지고 있으며 낙관적인 경향이 있고 여가를 중시하는
					경향이 있습니다.
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