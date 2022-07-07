prompt("Bienvenido a Nike, ingrese su nombre de usuario")
confirm("El usuario acepta los terminos y condiciones de la página")




class producto {
    constructor (nombre, precio) {
        this.nombre = nombre
        this.precio = precio
    }
    mostrarProdcuto(){}
}

const producto1 = new producto ( "zapatillas Nike", 5000);
console.log (producto1)
const producto2 = new producto ( "Remera Nike" , 2500)
console.log (producto2)
const producto3 = new producto ("Pantalon Nike", 3000);
console.log (producto3)


class Detallepedido {
    constructor (producto, cantidad){
        this.producto = producto;
        this.cantidad = cantidad;
    }
    calcularSubtotal(){
        let subtotal = this.producto.precio * this.cantidad;
        return subtotal;
    }
    mostrarDetalle(){}
   
}

const Detallepedido1 = new Detallepedido(producto1, 1);

const Detallepedido2 = new Detallepedido(producto2, 2);

const Detallepedido3 = new Detallepedido(producto3, 3);

console.log (Detallepedido1.calcularSubtotal())
console.log (Detallepedido2.calcularSubtotal())
console.log (Detallepedido3.calcularSubtotal())

class pedido {
    constructor (fecha, detalles){
        this.fecha = fecha;
        this.detalles = detalles;
    }
    calcularTotal(){
        let total = 0;
        for(const dp of this.detalles){
            console.log(dp.producto)
          total = total + dp.calcularSubtotal();
        }
        return total;
    }
    mostrarPedido(){}
}

const array = [];

array.push(Detallepedido1);

array.push(Detallepedido2);

array.push(Detallepedido3);

console.log(array);


const pedido1 = new pedido (new Date(),array);

console.log(pedido1.calcularTotal())


/* Json 

const AUHT_WEBAPP="session_webapp"

localStorage.setItem(AUHT_WEBAPP,'sadas123')


let storage = localStorage.getItem(AUHT_WEBAPP)

console.log(storage)
*/

var arreglos = [1,2,3,4,5];

var pagina = {
    nombre: "Nike",
    publicaciones: 5,
}

console.log(pagina["nombre"])

// LOCAL Storage

guardar_localStorage();

/* obtener_localStorage(); */

function obtener_localStorage(){

if (localStorage.getItem("nombre")){

    let nombre = localStorage.getItem("nombre");
    let persona =  JSON.parse(localStorage.getItem("persona"));

    console.log (nombre);
    console.log (persona);
}else{
    console.log("No hay entradas en el local storage");
}
}
function guardar_localStorage(){
    let persona = {
        nombre: "fernando",
        edad:31,
        correo: "fer123@gmail.com",
        producto: "zapatillas",
    }


let nombre = "juan";

localStorage.setItem("nombre", nombre);
localStorage.setItem("persona", JSON.stringify( persona));

};


// BOTONES - SWEET ALERT

const showAlert = () => {
    swal.fire({
        position: 'mid',
        icon: 'success',
        title: 'su compra se a añadido correctamente',
        showConfirmButton: false,
        timer: 1500
    })
}

let button = document.getElementById('alert');
button.onclick = showAlert

const dateTime = luxon.DateTime
const dt = dateTime.local (2022, 7, 7, 20, 53)

console.log(dt);