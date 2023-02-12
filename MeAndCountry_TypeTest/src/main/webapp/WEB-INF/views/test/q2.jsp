<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<c:set var="contextPath" value="${pageContext.request.contextPath }" />
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<form action="${contextPath }/test/secPage" method="post">
 	<div id="secont-page">
        <h1>문제</h1>
        <h2>문제 설명</h2>
		<input type="button" value="전혀 아니다"><br>
		<input type="button" value="약간 아니다"><br>
		<input type="button" value="보통이다"><br>
		<input type="button" value="약간 그렇다"><br>
		<input type="button" value="매우 그렇다"><br>
    </div>
</form>
</body>
</html>