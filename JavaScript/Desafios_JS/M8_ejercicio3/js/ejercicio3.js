function Mejora()
{
	var ingresa = 0;
	var egresa = 0;

	for (var i = 0; i < flujo.length; i++) {
		Ingresos += flujo[i].ingresa;
		Egresos += flujo[i].egresa;    
	}

	if(ingresa > egresa)
		return 1;
	else if(ingresa < egresa)
		return -1;
	else
		return 0;
}

