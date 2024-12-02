// scripts_index.js

// Datos de los productos por categoría
const productsData = {
    destacados: [
        { src: "Assets/leche.jpg", text: "Producto Destacado 1" },
        { src: "Assets/cafe02.jpg", text: "Producto Destacado 2" },
        { src: "Assets/cafe_negro.jpg", text: "Producto Destacado 3" },
        { src: "Assets/producto001.jpg", text: "Producto Destacado 4" },
    ],
    recientes: [
        { src: "Assets/postres/cake-1971552_1920.jpg", text: "Producto Reciente 1" },
        { src: "Assets/postres/cake-8342822_1920.jpg", text: "Producto Reciente 2" },
        { src: "Assets/postres/cherry-cake-8152717_1920.jpg", text: "Producto Reciente 3" },
        { src: "Assets/postres/churros-2188869_1920.jpg", text: "Producto Reciente 4" },
    ],
    vendidos: [
        { src: "Assets/bocadillos/cookies-5711139_1920.jpg", text: "Producto Más Vendido 1" },
        { src: "Assets/bocadillos/donut-3665638_1920.jpg", text: "Producto Más Vendido 2" },
        { src: "Assets/bocadillos/muffins-1329679_1920.jpg", text: "Producto Más Vendido 3" },
        { src: "Assets/bocadillos/ragout-3666573_1920.jpg", text: "Producto Más Vendido 4" },
    ],
};

// Función para actualizar la galería con una categoría específica
function updateGallery(category) {
    const gallery = document.querySelector(".product-gallery");
    gallery.innerHTML = ""; // Limpiar la galería actual

    productsData[category].forEach(product => {
        const productItem = document.createElement("a");
        productItem.href = "cafeteria.html";
        productItem.classList.add("product-item");

        const img = document.createElement("img");
        img.src = product.src;
        img.alt = product.text;

        const textDiv = document.createElement("div");
        textDiv.classList.add("product-text");
        textDiv.innerHTML = `<p>${product.text}</p>`;

        productItem.appendChild(img);
        productItem.appendChild(textDiv);
        gallery.appendChild(productItem);
    });
}

// Función para inicializar la galería con productos destacados
function initializeGallery() {
    updateGallery("destacados"); // Cargar la categoría "Destacados" al inicio
}

// Asignar eventos a los botones para cambiar la categoría
document.querySelectorAll(".product-buttons button").forEach((button, index) => {
    const categories = ["destacados", "recientes", "vendidos"];
    button.addEventListener("click", () => updateGallery(categories[index]));
});

// Inicializar la galería al cargar la página
initializeGallery();