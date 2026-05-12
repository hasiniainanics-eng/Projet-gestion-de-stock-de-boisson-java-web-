<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>Beverage Manager Pro</title>
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/views/assets/css/login_style.css">
</head>
<body onload="initChart(); updateUI()">

	<div class="background-container">
		<div class="planet"></div>
	</div>
	
	<!-- DASHBOARD PAGE -->
	<div id="dashboard-page" class="dashboard-container">

		<!-- Zone de Notifications Flash -->
		<div id="notification-area" class="notification-area"></div>

		<nav class="tabs">
			<button class="tab-btn active" onclick="switchTab('analytics')">📊
				Statistiques</button>
			<button class="tab-btn" onclick="switchTab('management')">📦
				Stock & Prix</button>
			<button class="logout-btn" onclick="location.reload()">Quitter</button>
		</nav>

		<!-- PAGE 1: STATS & ALERTES -->
		<div id="tab-analytics" class="tab-content">
			<div class="stats-grid">
				<div class="stat-card danger" id="card-rupture">
					<h3>Alertes Rupture</h3>
					<p class="value" id="count-rupture">0</p>
				</div>
				<div class="stat-card warning" id="card-expiry">
					<h3>Proches Expiration</h3>
					<p class="value" id="count-expiry">0</p>
				</div>
				<div class="stat-card total">
					<h3>Valeur du Stock</h3>
					<p class="value" id="total-value">0€</p>
				</div>
			</div>
			<div class="chart-container">
				<canvas id="myChart"></canvas>
			</div>
		</div>

		<!-- PAGE 2: GESTION PRODUITS -->
		<div id="tab-management" class="tab-content" style="display: none;">
			<div class="management-header">
				<h2>Inventaire des Boissons</h2>
				<button class="btn-add" onclick="addProduct()">+ Ajouter</button>
			</div>
			<table class="inventory-table">
				<thead>
					<tr>
						<th>Produit</th>
						<th>Prix Unitaire</th>
						<th>Quantité</th>
						<th>Date Expiration</th>
						<th>État</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody id="product-list">
					<!-- Rempli par JavaScript -->
				</tbody>
			</table>
		</div>
	</div>

	<script
		src="${pageContext.request.contextPath}/views/assets/js/chart.js"
		type="application/javascript"></script>
	<script
		src="${pageContext.request.contextPath}/views/assets/js/login_js.js"></script>
</body>
</html>
