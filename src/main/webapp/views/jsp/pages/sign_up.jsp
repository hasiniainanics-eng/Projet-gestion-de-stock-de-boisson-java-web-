<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<jsp:include page="/views/jsp/components/layout.jsp" />
<!-- SIGN UP PAGE -->
<div id="login-page" class="container">
	<form class="glass-card" action="signup" method="post">
		<h1>Sign Up</h1>
		<input type="text" id="username" name="nom" placeholder="Nom d'utilisateur" required>
	    <input type="password" name="mdp" placeholder="Mot de passe" required>
	    <input type="email" name="email" placeholder="Email" required>
	    <input type="submit" value="Enregister" class="btn-primary">
	</form>
</div>

