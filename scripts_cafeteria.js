// Actualiza el mensaje del carrito y el total
function updateCart() {
    const carritoItems = document.getElementById("carrito-items");
    const emptyCartMessage = document.getElementById("empty-cart-message");
    const totalElement = document.getElementById("carrito-total");
    const items = carritoItems.querySelectorAll(".carrito-item");

    if (items.length === 0) {
        emptyCartMessage.style.display = "block";
        totalElement.textContent = "0.00";
    } else {
        emptyCartMessage.style.display = "none";

        // Calcular el total
        let total = 0;
        items.forEach((item) => {
            const itemText = item.querySelector("span:nth-child(2)").textContent;
            const match = itemText.match(/=\s?\$(\d+\.\d+)/); // Extraer el precio total del producto
            if (match) {
                total += parseFloat(match[1]);
            }
        });

        totalElement.textContent = total.toFixed(2);
    }
}

// Lógica principal de interacción
document.addEventListener("DOMContentLoaded", () => {
    const carritoItems = document.getElementById("carrito-items");

    // Manejador para el botón "Agregar al carrito"
    document.querySelectorAll(".add-to-cart").forEach((button) => {
        button.addEventListener("click", () => {
            const productName = button.dataset.name; // Nombre del producto
            const productPrice = parseFloat(button.dataset.price); // Precio del producto
            const quantity = parseInt(button.previousElementSibling.value); // Cantidad ingresada

            // Validar cantidad
            if (quantity <= 0) {
                alert("Por favor, ingresa una cantidad válida.");
                return;
            }

            // Crear un elemento para el producto en el carrito
            const carritoItem = document.createElement("div");
            carritoItem.classList.add("carrito-item");
            carritoItem.innerHTML = `
                <span>${productName}</span>
                <span>${quantity} x $${productPrice.toFixed(2)} = $${(quantity * productPrice).toFixed(2)}</span>
                <button class="remove-item">Eliminar</button>
            `;

            carritoItems.appendChild(carritoItem);

            // Agregar evento para eliminar item del carrito
            carritoItem.querySelector(".remove-item").addEventListener("click", () => {
                carritoItem.remove();
                updateCart(); // Actualizar el carrito después de eliminar
            });

            alert(`${productName} agregado al carrito.`);
            updateCart(); // Actualizar el carrito después de agregar
        });
    });

    // Actualizar el carrito inicial
    updateCart();
});

// Confirmación al hacer clic en el botón "Comprar"
document.addEventListener("DOMContentLoaded", () => {
    const buyButton = document.querySelector(".buy-button");

    buyButton.addEventListener("click", () => {
        const total = document.getElementById("carrito-total").textContent; // Obtener el total del carrito

        if (parseFloat(total) === 0) {
            alert("Tu carrito está vacío. ¡Agrega productos para continuar con la compra!");
        } else {
            const paymentType = document.getElementById("payment-type").value; // Obtener el tipo de pago seleccionado

            // Mostrar confirmación
            const confirmationMessage = `Tu compra ha sido realizada exitosamente.\nTotal: $${total}\nMétodo de pago: ${paymentType}.`;
            alert(confirmationMessage);

            // Opcional: Vaciar el carrito después de la compra
            const carritoItems = document.getElementById("carrito-items");
            carritoItems.innerHTML = '<p id="empty-cart-message">Tu carrito está vacío. ¡Agrega algo delicioso!</p>';
            document.getElementById("carrito-total").textContent = "0.00";
        }
    });
});