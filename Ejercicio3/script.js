document.getElementById("conversionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const cantidad = parseFloat(document.getElementById("cantidad").value);
    const conversionTipo = document.getElementById("conversionTipo").value;

    // errores
    let hasError = false;
    document.getElementById("cantidadError").textContent = '';

    // Validación
    if (isNaN(cantidad) || cantidad < 0) {
        document.getElementById("cantidadError").textContent = 'Por favor, ingresa una cantidad válida.';
        hasError = true;
    }

    if (hasError) {
        return;
    }

    // Variables para el resultado
    let resultado;
    let unidadDestino;

    // Conversiones
    switch (conversionTipo) {
        case "kmToM":
            resultado = cantidad * 1000;
            unidadDestino = "metros";
            break;
        case "mToCm":
            resultado = cantidad * 100;
            unidadDestino = "centímetros";
            break;
        case "ftToInch":
            resultado = cantidad * 12;
            unidadDestino = "pulgadas";
            break;
        case "yardToInch":
            resultado = cantidad * 36;
            unidadDestino = "pulgadas";
            break;
        default:
            resultado = "Conversión no válida";
            unidadDestino = "";
    }

    // Resultado
    document.getElementById("resultadoTexto").textContent = `${cantidad} se convierte en ${resultado} ${unidadDestino}.`;
    document.getElementById("alertaResultado").style.display = 'block';
});
