const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Produit 1', 'Produit 2', 'Produit 3', 'Produit 4', 'Produit 5', 'Produit 6'],
        datasets: [
            {
                // Dataset pour la ligne (Vente)
                label: 'Vente',
                data: [15, 35, 68, 35, 52, 18],
                type: 'line',
                borderColor: '#ffffff',
                borderWidth: 2,
                pointRadius: 0,
                fill: false,
                tension: 0.4,
                order: 1
            },
            {
                // Dataset pour les barres (Quantité)
                label: 'Quantité en stock',
                data: [95, 60, 110, 75, 50, 70],
                backgroundColor: '#8b3dfc',
                borderRadius: 0,
                barThickness: 60,
                order: 2
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false // On utilise notre propre légende en HTML
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 140,
                ticks: {
                    color: '#a0a0a0',
                    stepSize: 20
                },
                grid: {
                    color: '#333333'
                }
            },
            x: {
                ticks: {
                    color: '#a0a0a0'
                },
                grid: {
                    display: false
                }
            }
        }
    }
});