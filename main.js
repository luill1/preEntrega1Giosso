let carrito = [];
let total = 0;

function agregarAlCarrito() {
    const itemInput = document.getElementById('item');
    const priceInput = document.getElementById('price');

    const item = itemInput.value;
    const price = parseFloat(priceInput.value);

    if (item && !isNaN(price) && price > 0) {
        carrito.push({ item, price });
        actualizarCarrito();
        limpiarInputs();
    } else {
        alert('Por favor, ingresa un artículo válido y un precio mayor a 0.');
    }
}
function actualizarCarrito() {
    const carritoLista = document.getElementById('carrito-lista');
    const totalElement = document.getElementById('total');

    carritoLista.innerHTML = '';
    total = 0;

    carrito.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.item}: $${item.price.toFixed(2)}`;
        carritoLista.appendChild(listItem);

        total += item.price;
    });

      totalElement.textContent = total.toFixed(2);
    }
function limpiarInputs() {
    document.getElementById('item').value = '';
    document.getElementById('price').value = '';
}




