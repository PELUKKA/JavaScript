/*  Cursos de Idioma

calcular costo total de productos (aleman ;165000 peso),(ingles ;125000 peso),(italiano;145000 pesos).
calcular pagos en cuotas sobre un monto determinado (6 cuotas),(12 cuotas).
calcular valor  final de un producto seleccionado en funcion de (impuestos 21%), (descuentos 10%).
calcula tiempo de espera promedio en relacion con la cantidad de turnos registrados (20 min).
calcula edad promedio de personas registadas (edad ente 8 a 65 años).
calcula nota final de alumnos ingresados .
*/

// Consultar al usuario qué cursos desea adquirir






const edad_superior = 60;
const edad_inferior = 7;
let nombre = prompt("introduzca su nombre:")

let edad;
edad = parseInt(prompt("Ingrese su edad"))

if(edad >= edad_inferior){
    if(edad <= edad_superior){
        alert(" siga con el proceso");
    }else {
        alert(" Usted no posee la edad requerida")
    }
}
else{
    alert("$ Usted no posee la edad requerida")
}
let total= 0;
let precio;
let alumnos=+1;
let curso;
let continuar = "si;"
let impuesto=0.21;
let tiempoespera = alumnos* 20;
let cuotas

while(continuar !== "no"){
    curso = prompt("Elija su curso: Aleman (Al) Ingles (In) Italiano (It")
    importeFactura = +prompt("Introduca el monto del curso: (Al) 165000 (In) 125000 (It) 145000 \n estas son las siglas de los Idiomas(Al) (In)(It) ")
    cuotas = +prompt("Elija su plan de cuotas: 6 12")
    impuestototal= total+importeFactura*impuesto;
    subtotal = impuestototal+importeFactura;
    total =subtotal/cuotas;
    continuar=prompt("Desea ingresar otro curso? si/no");

}

alert("gracias por venir:");
document.write("<h1> nombre:"+ nombre+" </h1>")
document.write("<h1> Edad:"+ edad +" </h1>")
document.write("<h1> curso:"+ curso+" </h1>")
document.write("<h1> cuotas:"+ cuotas+"</h1>")
document.write("<h1> precio en cuotas:"+ total+"</h1>")
document.write("<h1> tiempoespera:"+tiempoespera+" </h1>")
document.write("<h1> Total del curso:"+ subtotal+" </h1>")








