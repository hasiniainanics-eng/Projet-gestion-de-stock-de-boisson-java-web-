document.addEventListener('DOMContentLoaded', () => {
    // Sélectionner tous les boutons "vendre"
    const buttonsVendre = document.querySelectorAll('.btn-vendre');

    buttonsVendre.forEach(button => {
        button.addEventListener('click', (e) => {
            // Récupérer le nom du produit (situé dans la 2ème cellule de la ligne)
            const row = e.target.closest('tr');
            const nomProduit = row.cells[1].innerText;
            
            alert(`Vente enregistrée pour : ${nomProduit}`);
        });
    });

    // Animation au clic des menus de la sidebar
    const menuItems = document.querySelectorAll('.sidebar nav ul li');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
});