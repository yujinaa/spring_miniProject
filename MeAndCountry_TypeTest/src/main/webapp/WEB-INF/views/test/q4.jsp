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
네 번째 문제 페이지
<div>
	질문 
</div>
<div>
	<input type="button" value="전혀 아니다"><br>
	<input type="button" value="약간 아니다"><br>
	<input type="button" value="보통이다"><br>
	<input type="button" value="약간 그렇다"><br>
	<input type="button" value="매우 그렇다"><br>
</div>
</body>
</html>