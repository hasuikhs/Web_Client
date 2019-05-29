<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>로그인 처리 페이지</title>
</head>
<body>
	<h5>id와 pw를 넘겨 받아 DB와 연동하여 로그인 성공여부를 판단</h5>
	<h5>만약 로그인 실패라면 다시 로그인 페이지로 보내고</h5>
	<h5>만약 로그인 성공이라면 서비스 이용 페이지로 보낸다</h5>
	입력 정보
	<h4> id : <%= request.getParameter("id") %></h4>
	<h4> pw : <%= request.getParameter("pw") %></h4>
	
</body>
</html>