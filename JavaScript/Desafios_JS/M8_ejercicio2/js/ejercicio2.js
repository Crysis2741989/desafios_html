


const planes = [
    {
        nombre: "plan001",
        capital: 150000,
        plazo: 30,
        tasa: 0.15
    },
    {
        nombre: "plan002",
        capital: 300000,
        plazo: 180,
        tasa: 0.1
    },
    {
        nombre: "plan003",
        capital: 485000,
        plazo: 60,
        tasa: 0.23
    },
]

var tablaInteres = [];

for(var i=0;i<planes.length;i++){   
    var interes = (planes[i].capital * planes[i].plazo * planes[i].tasa)/100;
    alert(`El interes generado por ${planes[i].nombre} es ${interes} `)
    tablaInteres.push({
        nombre: planes.nombre,
        capital: planes.capital,
        plazo: planes.plazo,
	    tasa: planes.tasa,
	    interes: interes
    });
}

console.log(tablaInteres)

