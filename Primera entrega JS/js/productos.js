//FUNCION CONSTRUCTORA
function Producto(nombre, stock, precio, iva) {
    this.nombre = nombre
    this.stock = stock
    this.precio = precio
    this.iva = iva

    this.precioFinal = function () {
        return this.precio * this.iva
    }

    this.descuentoStock = function(unidades) {
        this.stock = this.stock - unidades
    }
}


//CLASE JS
class Producto {
    constructor(nombre, stock, precio, iva) {
        this.nombre = nombre
        this.stock = stock
        this.precio = precio
        this.iva = iva
    }
    precioFinal() {
        return this.precio * this.iva
    }

    descuentoStock(unidades) {
        this.stock = this.stock - unidades
    }
}

debugger

let productoIngresado = prompt("Ingrese el nombre del producto que desea adquirir:")
let cantidadIngresada = parseInt (prompt("Ingrese la cantidad que desea comprar:"))


function comprarProducto() {
    if (productoIngresado === "CHORIZOS"){
        alert("El total de su compra por el kg de + productoIngresado + es de + cantidadIngresada * producto1.precio")

    }
    else if (productoIngresado === "VACIO"){
        alert("El total de su compra por el kg de + productoIngresado + es de + cantidadIngresada * producto2.precio")
        
    }
    else if (productoIngresado === "LOMO"){
        alert("El total de su compra por el kg de + productoIngresado + es de + cantidadIngresada * producto3.precio")
        
    }
}