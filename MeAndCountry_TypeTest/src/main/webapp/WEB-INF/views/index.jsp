<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<c:set var="contextPath" value="${pageContext.request.contextPath }" />
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
<script src="test.js"></script>
내 성향과 맞는 나라는 어디일까?
<br>
간단한 심리 테스트를 통해 알아보는 내 성향과 맞는 나라!
<br>

<a href="${contextPath }/test/q1"><input type="button" value="시작하기"></a> 
</body>
</html>