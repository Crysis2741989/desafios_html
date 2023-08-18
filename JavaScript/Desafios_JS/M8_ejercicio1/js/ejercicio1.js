
//Necesito generar un Array para poder cargar todos los meses del año

var año = [
    {
        mes:"Enero",
        ingresa: 1500,
        egresa: 1500
    },
    {
        mes:"Febrero",
        ingresa: 2500,
        egresa: 2500
    },
    {
        mes:"Marzo",
        ingresa: 84683,
        egresa: 1155
    },
    {
        mes:"Abril",
        ingresa: 135353,
        egresa: 1533
    },
    {
        mes:"Mayo",
        ingresa: 1535,
        egresa: 5434
    },
    {
        mes:"Junio",
        ingresa: 4343354,
        egresa: 5434543
    },
    {
        mes:"julio",
        ingresa: 435453,
        egresa:4543
    },
    {
        mes:"Agosto",
        ingresa: 78351,
        egresa: 7816
    },
    {
        mes:"Septiembre",
        ingresa: 1878,
        egresa: 95634
    },
    {
        mes:"Octubre",
        ingresa: 48483,
        egresa: 9433
    },
    {
        mes:"Noviembre",
        ingresa: 35483,
        egresa: 53133
    },
    {
        mes:"Diciembre",
        ingresa: 3843,
        egresa: 348133
    }
]

/*for( var i=0; i<año.length;i++)
        {alert(`En el mes de ${año[i].mes}, ingresa ${año[i].ingresa} y egresa ${año[i].egresa}`) } ;
*/

ingresa = 0;
egresa = 0;


for( var i=0; i<año.length;i++){
        ingresa +=año[i].ingresa;
        egresa +=año[i].egresa; 
}

alert(`ingreso total ${ingresa} egreso total ${egresa}`);

if(ingresa<egresa){
    alert("El flujo genera pérdidas");
}
else{
    alert("El flujo genera ganancias");
}


var flujoTotal = ingresa - egresa ;
