// Liste des boissons demandées avec leurs détails
const produits = [
    { id: 1, nom: "Bière", pu: 2500, quantite: 20, date: "2024-05-01", alerte: "" },
    { id: 2, nom: "Caprice", pu: 3000, quantite: 20, date: "2024-05-01", alerte: "" },
    { id: 3, nom: "Coca cola", pu: 2800, quantite: 20, date: "2024-05-01", alerte: "" },
    { id: 4, nom: "Fanta", pu: 2800, quantite: 5, date: "2024-05-01", alerte: "rupture" },
    { id: 5, nom: "Wisky", pu: 45000, quantite: 20, date: "2024-05-01", alerte: "" },
    { id: 6, nom: "Rhum arrangé", pu: 15000, quantite: 20, date: "2024-05-01", alerte: "" },
    { id: 7, nom: "Booster", pu: 4000, quantite: 20, date: "2024-05-01", alerte: "expiration" },
    { id: 8, nom: "THB", pu: 3500, quantite: 20, date: "2024-05-01", alerte: "" },
    { id: 9, nom: "Gold blanche", pu: 4000, quantite: 20, date: "2024-05-01", alerte: "" }
];

function chargerTableau() {
    const tableBody = document.getElementById('product-table-body');
    let alerteCount = 0;

    tableBody.innerHTML = "";

    produits.forEach(prod => {
        // Compter les alertes pour la cloche
        if (prod.alerte !== "") {
            alerteCount++;
        }

        const row = `
            <tr>
                <td>${prod.id}</td>
                <td>${prod.nom}</td>
                <td>${prod.pu.toLocaleString()}</td>
                <td>${prod.quantite}</td>
                <td>${prod.date}</td>
                <td class="${prod.alerte ? 'alert-' + prod.alerte : ''}">
                    ${prod.alerte ? prod.alerte : '-'}
                </td>
                <td>
                    <button class="btn-plus">+</button>
                    <button class="btn-vendre">vendre</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });

    // Mettre à jour le badge de notification
    const notifBadge = document.getElementById('notif-count');
    notifBadge.innerText = alerteCount;
    
    // Cacher le badge s'il n'y a pas d'alerte
    notifBadge.style.display = alerteCount > 0 ? "block" : "none";
}

// Initialisation au chargement de la page
window.onload = chargerTableau;