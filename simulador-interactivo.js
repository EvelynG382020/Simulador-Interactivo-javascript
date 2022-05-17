//DESAFIO CON CONDICONALES, FUNCIONES, ARREGLOS
/**
 * APLICAR A MI SIMULADOR HIGHER ORDER FUNCTIONS
 * Para eso ordenaré las ideas:
 * Es una tienda de venta de figuritas de yeso.
 * El usuario es el adminitrador de la app (no público final)
 * El admin necesita ingresar por la aplicación cada venta de producto.
 * Registrar los productos que tienen descuentos, los que no, el valor total con su impuesto y pagos en efectivo y crédito.
 * Luego poder buscar con find, por total de productos vendidos con dcto, sin dcto, en efectivo y con tarjeta.
 * Registrar con filter cantidad del producto mas vendido para llevar un stock de cuál sale mas por venta. 
 * **************************
 * Para estas necesidades crearé una clase constructora que me sirva de plantilla para que el admin ingrese su stock de productos. Dentro crearé métodos como el dcto, impuesto, medios de pago. También un arreglo de objetos que tenga todas las propiedades: nombre del producto, precio, con y sin dcto, pago con tarjeta o efectivo, cantidad en stock.
 * 
 */

class FigurasDeYeso {//este constructor me sirve para instanciar un objeto 
  constructor(figura){
    this.id = figura.id;
    this.modelo = figura.modelo;
    this.precio = figura.precio;
    this.precioTotal = figura.precio;
    this.cantidad = 1;
    this.stock = 5;
  }
  undAgregar(){
    this.cantidad++;
  }
  quitarStock(){
    this.stock--;
  }
  undEliminar(){
    this.cantidad--;
  }
  refreshPrecioTotal(){
    this.precioTotal = this.precio * this.cantidad;
  }
  refreshStock(){
    this.stock = this.stock - this.cantidad;
  }
  sumarImpuesto(){
    this.precioTotal = this.precioTotal * 1.19;
  }
}

const figuras = [
  {
    id: 0,
    modelo: "Buda",
    precio: 10000,
    descripcion: "Buda 30x30 en color oro",
    cantidad: 0,
  },
  {
    id: 1,
    modelo: "Ganesha",
    precio: 20000,
    descripcion: "Buda 50x50 en color plata",
    cantidad: 0,
  },
  {
    id: 2,
    modelo: "Buda Abhaya",
    precio: 40000,
    descripcion: "Buda 30x30 en color oro",
    cantidad: 0,
  },
  {
    id: 3,
    modelo: "Buda Siddharta",
    precio: 18000,
    descripcion: "Buda 30x30 en color plata",
    cantidad: 0,
  },
  {
    id: 4,
    modelo: "Buda Durmiente",
    precio: 25000,
    descripcion: "Buda 30x30 en color beige",
    cantidad: 0,
  },
]


let carritoCompras = []
let precioTotal
let idFigurasVenta
let resultadoId = true

function menuFigurasVenta() {// esta función es para que el usuario seleccione en menu los productos en stock y se agreguen en carrito
  let listaFigurasString = ""
  for(const fig of figuras){//recorro el arreglo de objetos para arrojar una lista de opciones en el menú de ventas
    listaFigurasString += `
ID: ${fig.id}. MODELO: ${fig.modelo}. PRECIO: ${fig.precio}. DESCRIP: ${fig.descripcion}. \n`
  }

  while(resultadoId){
    idFigurasVenta = prompt(`
Bienvenidos a Figuras de Yeso, digíte porfavor el ID del producto a comprar, de lo contrario BOTON CANCELAR.
${listaFigurasString} \n`)

    let figuraSeleccionada = carritoCompras.find((elem) => elem.id == idFigurasVenta)//con el find me arroja el primer elemento que en este caso es un objeto del arreglo, pero necesito el index de esta busqueda que hice con find, para solo ver el id y compararla con el prompt

    if(figuraSeleccionada){
      let indexCarrito = carritoCompras.findIndex((elem) => elem.id === figuraSeleccionada.id)
      carritoCompras[indexCarrito].undAgregar()
      carritoCompras[indexCarrito].refreshPrecioTotal()
      carritoCompras[indexCarrito].sumarImpuesto()
      carritoCompras[indexCarrito].refreshStock()
      alert(`
Se ha añadido otra unidad ${carritoCompras[indexCarrito].modelo} 🎉
Unidades: ${carritoCompras[indexCarrito].cantidad} Precio Und: ${carritoCompras[indexCarrito].precio}`);
      console.table(carritoCompras);

    }else{
        if(idFigurasVenta !== null ){
          carritoCompras.push(new FigurasDeYeso(figuras[idFigurasVenta]))//figuras[0] ejemplo recibido por prompt
          alert(`Se ha añadido al carrito ${figuras[idFigurasVenta].modelo} 🎉`);
          console.table(carritoCompras);
        }
      }
    resultadoId = confirm("Deseas seguir comprando?!")
  }
}
/*************************** HIGHER ORDER FUNCTION PARA EL ARREGLO DE OBJETO*/
console.log("PROBANDO FUNCIONES DE ORDEN SUPERIOR")

function probandoDom(){
  let div = document.getElementById("container")
  for(const fig of figuras){
    let title = document.createElement("h1")
    title.innerHTML = fig.modelo
    div.appendChild(title)
  }
}
probandoDom()

console.log("LISTAR LOS NOMBRES DE LAS FIGURAS")
const listaNombres = figuras.map(producto => producto.modelo)
console.table(listaNombres);

console.log("LISTAR LOS NOMBRES DE LOS PRODUCTOS CON DCTO CON PAGO CONTADO + IMPTO")
const precioEfectivo = figuras.map((elem) => {
  return {
      nombre: elem.modelo,
      descripcion: elem.descripcion,
      precio: elem.precio,
      precioConDcto: elem.precio * 0.9,
      precioMasImpuesto: elem.precio * 1.19
  }
})
console.table(precioEfectivo)


console.log("LISTAR LOS NOMBRES DE LOS PRODUCTOS CON PAGO CREDITO + IMPTO")
const precioCreditoMasImpuesto = figuras.map((elem) => {
  return {
    nombre: elem.modelo,
      descripcion: elem.descripcion,
      precio: elem.precio,
      PrecioConRecargo: elem.precio * 1.02,
      precioMasImpuesto: elem.precio * 1.19
  }
})
console.table(precioCreditoMasImpuesto)

menuFigurasVenta()



