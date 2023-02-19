<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:set var="contextPath" value="${pageContext.request.contextPath }" />
<!DOCTYPE html>
<html>
<head>
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<link rel="stylesheet" href="../resources/css/result.css">
<link rel="stylesheet" href="../resources/css/animation.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap" rel="stylesheet">
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<section id = "result">
<div class="result-h1">
	<p class="p-h1">나와 맞는 나라는?</p>
</div>
<div class="resultCountry">

</div>
<div id="resultImg">

</div>
<div class="resultDes">

</div>
<button type="button" class="share-btn">공유하기</button>
<a href="${contextPath }/index"><button type="button" class="replay-btn">다시 테스트하기</button></a>
</section>
<script src="../resources/js/test.js"></script>
</body>
</html>