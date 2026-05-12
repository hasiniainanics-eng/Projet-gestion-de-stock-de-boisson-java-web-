// Données de test (Simulant une base de données)
let beverages = [
    { id: 1, name: "Coca-Cola 33cl", price: 1.50, qty: 5, expiry: "2024-05-20" },
    { id: 2, name: "Jus d'Orange Pro", price: 3.20, qty: 50, expiry: "2024-12-10" },
    { id: 3, name: "Eau Minérale 1L", price: 0.80, qty: 2, expiry: "2025-01-01" },
    { id: 4, name: "Energy Drink", price: 2.50, qty: 15, expiry: "2024-05-15" },
	{ id: 5, name: "Ambodivoara", price: 2.00, qty: 14, expiry: "2024-05-10" },
	{ id: 6, name: "Vin", price: 2.25, qty: 5, expiry: "2024-05-11" }
];

function showDashboard() {
    //document.getElementById('login-page').style.display = 'none';
    //document.getElementById('dashboard-page').style.display = 'block';
    updateUI();
    initChart();
}

function updateUI() {
    const list = document.getElementById('product-list');
    const notifArea = document.getElementById('notification-area');
    list.innerHTML = "";
    notifArea.innerHTML = ""; // Reset notifications

    let ruptureCount = 0;
    let expiryCount = 0;
    let totalValue = 0;

    const today = new Date();

    beverages.forEach(item => {
        const expiryDate = new Date(item.expiry);
        const diffTime = expiryDate - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        let statusHtml = '<span class="status-badge bg-success">OK</span>';
        
        // 1. Logique Rupture de Stock (si < 10 unités)
        if (item.qty <= 5) {
            statusHtml = '<span class="status-badge bg-danger">Rupture imminente</span>';
            ruptureCount++;
            createNotification("⚠️ Stock critique : ${item.name} (${item.qty} restants), 'danger'");
        }

        // 2. Logique Expiration (si < 10 jours)
        if (diffDays <= 10 && diffDays > 0) {
            statusHtml = '<span class="status-badge bg-warning">Expire bientôt</span>';
            expiryCount++;
            createNotification("⏳ Expire bientôt : ${item.name} (${item.expiry}), 'warn'");
        } else if (diffDays <= 0) {
            statusHtml = '<span class="status-badge bg-danger">EXPIRÉ</span>';
            expiryCount++;
        }

        totalValue += (item.price * item.qty);

        // Ajout au tableau
        list.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.price.toFixed(2)} €</td>
                <td><b>${item.qty}</b></td>
                <td>${item.expiry}</td>
                <td>${statusHtml}</td>
                <td>
                    <button onclick="changeQty(${item.id}, 10)">+10</button>
                    <button onclick="deleteItem(${item.id})">❌</button>
                </td>
            </tr>
        `;
    });

    // Mise à jour des compteurs
    document.getElementById('count-rupture').innerText = ruptureCount;
    document.getElementById('count-expiry').innerText = expiryCount;
    document.getElementById('total-value').innerText = totalValue.toFixed(2) + "€";
}

function createNotification(msg, type) {
    const area = document.getElementById('notification-area');
    const div = document.createElement('div');
    div.className = `notif ${type === 'warn' ? 'warn' : ''}`;
    div.innerText = msg;
    area.appendChild(div);

    // Supprimer la notification après 5 secondes
    setTimeout(() => div.remove(), 6000);
}

function switchTab(tabId) {
    document.getElementById('tab-analytics').style.display = tabId === 'analytics' ? 'block' : 'none';
    document.getElementById('tab-management').style.display = tabId === 'management' ? 'block' : 'none';
    
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

function changeQty(id, amount) {
    const item = beverages.find(b => b.id === id);
    if(item) item.qty += amount;
    updateUI();
}

function initChart() {
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: beverages.map(b => b.name),
            datasets: [{
                label: 'Quantité en Stock',
                data: beverages.map(b => b.qty),
                backgroundColor: '#8a2be2',
                borderRadius: 5
            }]
        },
        options: {
            scales: { y: { beginAtZero: true, grid: {color: '#333'}, ticks: {color: 'white'} } }
        }
    });
}

