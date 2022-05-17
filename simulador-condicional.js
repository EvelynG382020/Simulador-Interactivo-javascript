let precio
let precioFinal
let descuento
let dcto
// let user = prompt("Bienvenido a Figuras de Yeso, ingrese su nombre por favor...o ESC para salir de la app")
if (user != "ESC" || user != "esc") {
  alert("Bienvenido/a " +user);
}

function productoOfertaAmarillo(precio, porcentaje) {
  precioFinal = precio * 0.9;
  let conImpuestoDcto = precioFinal + ((precioFinal * porcentaje)/100);
  return conImpuestoDcto
}
let dctoSi = prompt("Ingresa Si, si el producto tiene descuento, de lo contrario esc");

if (dctoSi == "Si" || dctoSi == "si"){
  for (let i = 0; i < 5; i++) {
    let resultadoConDcto = productoOfertaAmarillo(parseFloat(prompt("INGRESE PRECIO")), parseFloat(prompt("INGRESAR % DEL IMPUESTO")));
    alert(" Su total con DCTO E IMPUESTO " +resultadoConDcto);
    console.log(user+ " Su total con DCTO E IMPUESTO aplicado es $"+resultadoConDcto);
  } 
}else{
  for (let i = 0; i < 5; i++) {
    let resultConImpuesto = productoSinEtiquetaNormal(parseFloat(prompt("INGRESE PRECIO")), parseFloat(prompt("INGRESAR % DEL IMPUESTO")));
    alert(" Su total sin DCTO E IMPUESTO " +resultConImpuesto);
    console.log(user+ " Su total sin DCTO E IMPUESTO aplicado es $"+resultConImpuesto);
  }
}

function productoSinEtiquetaNormal(precio, porcentaje) {
  return precio + ((precio * porcentaje)/100);
}