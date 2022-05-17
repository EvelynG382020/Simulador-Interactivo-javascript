
/*Aplicando Array a mi simulador
Defino mi template para crear objetos
*/
//DESAFIO COMPLEMENTARIO UTILIZANDO CLASS CONSTRUCTORA
class Producto {
  constructor(nombre, precio){
    this.nombre  = nombre;
    this.precio  = parseFloat(precio);

  }
  sumarImpuesto(){
    this.precio = this.precio * 1.19;
  }
  descuento(){
    this.descuento = this.precio * 0.9;
  }
  sinDescuento(){
    this.sinDescuento = this.sumarImpuesto
  }

}
let welcome
const figuritas = []
let inicio = prompt("Bienvenido a 'Figuras de Yeso', ingrese su nombre por favor...")
alert("Bienvenido/a " +inicio);
do{
  welcome = prompt("Ingresa NOMBRE del producto con DCTO o digite salir")
  if (welcome === "SALIR" || welcome === "salir" || welcome === "Salir")  {
    break;
  }else{
    nombreProducto = welcome
    const precio = prompt("Ingresa PRECIO del producto")
    figuritas.push(new Producto(nombreProducto, precio))
  }
}
while (welcome != "SALIR" || welcome != "salir" || welcome != "Salir")

for(const producto of figuritas){
  producto.sumarImpuesto();
  producto.descuento();
}
console.log(figuritas)