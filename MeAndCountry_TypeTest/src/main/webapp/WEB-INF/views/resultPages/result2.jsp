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
				<img alt="2" src="../resources/img/image-2.jpg" class="img-fluid">
			</div>
			<div class="resultCountry">
				<p>일본</p>
			</div>
			<div class="resultDes">
				<p>
					일본은 경계선에 있는 위계 사회입니다. 어떤 사회적 환경에서도 자신의 위계적 위치를 의식하고 그에 따라 행동하지만
					대부분의 다른 아시아 문화만큼 계층적이지는 않습니다. 그 예시로 일본 교육 시스템에는 모든 사람이 평등하게 태어나고
					충분히 열심히 노력하면 누구나 출세하여 무엇이든 될 수 있다는 강한 개념이 있습니다. <br>확실히 일본 사회는
					개인의 의견보다 집단의 화합을 중시하는 집단주의 사회의 특징을 많이 보여주고 있으며, 체면을 잃는 것에 대한 수치심이
					강하지만 대부분의 아시아처럼 집단주의적이지는 않습니다. 그래서 일본인은 서구 기준으로 볼 때 집단주의로 보이지민 아시아
					기준으로 볼 때는 개인주의자로 보여집니다. <br> 또한 세계에서 가장 남성적인 사회 중 하나입니다. 그러나
					그들의 온화한 집단주의와 결합하여 우리가 종종 남성적 문화와 연관시키는 독단적이고 경쟁적인 개인 행동은 볼 수 없으며
					악명 높은 일본의 일중독은 남성성의 또 다른 표현입니다. 고된 노동과 장시간 노동이라는 남성적 규범이 있는 일본에서
					여성이 기업의 사다리를 오르는 것은 여전히 ​​어려운 특징이 있습니다. <br>다른 특징으로는 가장 불확실성을
					회피하는 국가 중 하나입니다. 자주 발생하는 지진 등의 자연재해의 영향을 받았는데 이러한 불확실한 상황에 대비하는 법을
					배워 최대한의 예측 가능성을 위해 규정되어 있다고 말할 수 있습니다. 예를 들어 학교 행사에서 사람들이 무엇을 입고
					어떻게 행동해야 하는지는 에티켓 책에 아주 자세하게 규정되어 있으며 학교 교사와 공무원들은 선례가 없는 일을 하기를
					꺼립니다. 그리고 일본 기업에서는 타당성 조사에 많은 시간과 노력을 투자하고 프로젝트를 시작하기 전에 모든 위험 요소를
					해결해야 하는 경향이 있습니다. 이러한 불확실성 회피에 대한 높은 필요성이 일본에서 변화를 실현하기 어려운 이유 중
					하나입니다. <br> 그리고 장기 지향적인 사회로 사람들은 미덕과 실제적인 모범에 따라 삶을 살아가고 기업에서는
					경제적으로 어려운 시기에도 지속적으로 분기 이익보다는 장기적인 방향성을 봅니다. <br>마지막으로 일본은 절제
					문화가 있는 것으로 이런 사회는 다소 냉소주의와 비관주의 경향이 있어 여가를 중시하지 않고 욕구충족을 통제합니다.
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