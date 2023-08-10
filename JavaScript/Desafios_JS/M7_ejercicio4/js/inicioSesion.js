
usuario = prompt("Ingrese usuario");
clave = prompt("Ingrese clave");


if(usuario === "admin" && clave === "1234"){
    alert("Bienvenido admin!");
}
else if(usuario != "admin"){
    alert("Usuario incorrecto");
}
else{
    alert("Clave incorrecta");
}
