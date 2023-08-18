function mejoraInteres(inversiones)
{
	var resultados = [];

	for (var i=0;i<inversiones.length;i++) {
		var interes = (inversiones[i].capital * inversiones[i].plazo * inversiones[i].tasa) / 100;
		resultados.push({
		    nombre: inversiones.nombre,
		    capital: inversiones.capital,
		    plazo: inversiones.plazo,
		    tasa: inversiones.tasa,
		    interes: interes
		});    
	}

	return resultados;
}