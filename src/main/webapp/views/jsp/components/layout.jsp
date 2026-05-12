<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="fr">
	<head>
	    <meta charset="UTF-8">
	    <title>Gestionnaire de Boisson Pro</title>
	    <link rel="stylesheet" href="${pageContext.request.contextPath}/views/assets/css/style.css">
	    <link rel="stylesheet" href="${pageContext.request.contextPath}/views/assets/css/<%= request.getAttribute("style") %>">
	</head>
	<body onload="<%= request.getAttribute("jsFunction") %>">
	
	    <div class="background-container"></div>
	
	    <script src="${pageContext.request.contextPath}/views/assets/js/<%= request.getAttribute("js") %>" type="application/javascript"></script>
	</body>
</html>
