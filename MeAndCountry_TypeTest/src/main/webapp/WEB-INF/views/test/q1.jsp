<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:set var="contextPath" value="${pageContext.request.contextPath }" />
<!DOCTYPE html>
<html>
<head>
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<form action="${contextPath }/test/firstPage" name="page1" method="get">
			<div id="page">
				<h1>문제</h1>
				<h2>문제 설명</h2>
				<div>
					<button type="button" value="0">전혀 아니다</button>
					<br>
				</div>
				<div>
					<button type="button" value="1">약간 아니다</button>
					<br>
				</div>
				<div>
					<button type="button" value="2">보통이다</button>
					<br>
				</div>
				<div>
					<button type="button" value="3">약간 그렇다</button>
					<br>
				</div>
				<div>
					<button type="button" value="4">매우 그렇다</button>
					<br>
				</div>
			</div>
	</form>
	<script src="../resources/js/test.js"></script>
</body>
</html>