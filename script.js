document.addEventListener('DOMContentLoaded', () => {
    const botonesComprar = document.querySelectorAll('.btn-comprar');
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCompra = document.getElementById('total-compra');
    const enlacePago = document.getElementById('enlace-pago');
    let total = 0;

    botonesComprar.forEach(boton => {
        boton.addEventListener('click', () => {
            const producto = boton.getAttribute('data-producto');
            const precio = parseInt(boton.getAttribute('data-precio'));

            const itemCarrito = document.createElement('p');
            itemCarrito.textContent = `${producto} - $${precio}`;
            listaCarrito.appendChild(itemCarrito);

            total += precio;
            totalCompra.textContent = `Total: $${total}`;

            enlacePago.style.display = 'block';
        });
    });

    enlacePago.addEventListener('click', () => {
        alert('Redirigiendo a la página de pago');
    });
});
