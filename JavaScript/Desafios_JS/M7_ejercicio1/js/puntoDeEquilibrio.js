

//Calculo de punto de equilibrio

costosFijos = prompt("ingrese Costos fijos");
precioDeVenta = prompt("Ingrese precio de venta");
costosVariables = prompt("Ingrese costos variables");

cV = costosFijos/(precioDeVenta-costosVariables);

alert(`el CV  es: ${cV}`);