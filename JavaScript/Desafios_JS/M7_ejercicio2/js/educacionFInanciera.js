

montoTotal = prompt("Ingrese el monto total");

gastosNecesarios = montoTotal*.5;
gastosOpcionales = montoTotal*.3;
ahorro = montoTotal*.2;

alert(`Debe dividir los gastos de la siguiente manera: \n
1-Gastos Necesarios: ${gastosNecesarios}\n
2-Gastos Opcionales: ${gastosOpcionales}\n
3-Ahorro e Inversión: ${ahorro}`);