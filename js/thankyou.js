document.addEventListener("DOMContentLoaded", () => {
    // se captura el contenedor donde se mostrarán los datos
    const resumenContainer = document.querySelector(".page-content .col-xxl-4");

    // se obtiene los datos del localStorage
    const datosEntrega = JSON.parse(localStorage.getItem("datosEntrega"));
    let proResumen = JSON.parse(localStorage.getItem("pro-resumen"));

    if (datosEntrega) {
        // se construye el contenido del resumen
        const contenido = `
            <h5 class="mb-32">Resumen de Orden</h5>
            <p><strong>Subtotal:</strong> ${datosEntrega.proResumen}</p>
            <p><strong>Valor Domicilio:</strong> ${datosEntrega.resumen.domicilio}</p>
            <p><strong>Descuento:</strong> ${datosEntrega.resumen.descuento}</p>
            <p><strong>Total:</strong> ${datosEntrega.resumen.total}</p>
            <p><strong>Sobrecosto:</strong> ${datosEntrega.resumen.sobrecosto}</p>
            
            <h5 class="mt-32 mb-32">Datos de Entrega</h5>
            <p><strong>Nombres:</strong> ${datosEntrega.nombres}</p>
            <p><strong>Apellidos:</strong> ${datosEntrega.apellidos}</p>
            <p><strong>Email:</strong> ${datosEntrega.email}</p>
            <p><strong>Teléfono:</strong> ${datosEntrega.telefono}</p>
            <p><strong>Dirección:</strong> ${datosEntrega.direccion}</p>
            <p><strong>Dirección 2:</strong> ${datosEntrega.direccion2}</p>
            <p><strong>Notas:</strong> ${datosEntrega.notas}</p>
        `;

        // se muestra los datos en la página
        resumenContainer.innerHTML = contenido;

        // se limpia el localStorage después de mostrar los datos
        localStorage.removeItem("datosEntrega");
        localStorage.removeItem("list-cart");
    } else {
        // si no hay datos se muestra un mensaje de error
        resumenContainer.innerHTML = "<p>Error: No se encontraron datos de la orden.</p>";
    }
});
