var nombre;
var cantidad;
var dia;
var formaDePago;
var respuesta;
var huespedMasPersonas;
var masPersonas = 0;
var masDias = 0;
var huespedMasDias;
var contadorQR = 0;
var contadorEfectivo = 0;
var contadorTarjeta = 0;
var formaDePagoPrincipal

function mostrar() {

    do {
        reservar();

        respuesta = prompt("¿Desea hacer otra reserva? (Y/N)");

        if (masPersonas < cantidad) {
            masPersonas = cantidad;
            huespedMasPersonas = nombre;
        }

        if (masDias < dia) {
            masDias = dia;
            huespedMasDias = nombre;
        }

        switch (formaDePago) {
            case 1:
                contadorEfectivo++;
                break;
            case 2:
                contadorTarjeta++;
                break;
            case 3:
                contadorQR++;
                break;
        }
    } while (respuesta == "y")

    if(contadorQR > contadorEfectivo && contadorQR > contadorTarjeta){
        formaDePagoPrincipal = "QR"
    }
    else if(contadorEfectivo > contadorTarjeta){
        formaDePagoPrincipal = "Efectivo"
    }
    else{
        formaDePagoPrincipal = "Tarjeta"
    }

    document.write("El huesped " + huespedMasPersonas + " trajo a " + masPersonas + " en una sola reserva<br>La cantidad de personas que se quedaron mas dias fueron aquellos que reservaron bajo el nombre de " + huespedMasDias + " y se quedaron " + masDias + " dias.<br>La forma de pago mas usada fue " + formaDePagoPrincipal)

}


function reservar() {
    pedirNombreReserva();
    pedirCantidadReserva();
    pedirDiaReserva();
    pedirFormaDePago();
}


function pedirNombreReserva() {
    nombre = prompt("Ingrese el nombre del propietario de la reserva:");
}


function pedirCantidadReserva() {
    cantidad = prompt("Ingrese la cantidad de personas para la reserva:");

    while (isNaN(cantidad) || cantidad < 1) {
        cantidad = prompt("Por favor, solamente ingrese numeros para la cantidad de personas para la reserva:");
    }
}


function pedirDiaReserva() {
    dia = prompt("Ingrese la cantidad de dias para la reserva:");

    while (isNaN(dia) || dia < 1) {
        dia = prompt("Por favor, solamente ingrese numeros para la cantidad de dias para la reserva:");
    }
}


function pedirFormaDePago() {
    formaDePago = prompt("Ingrese la forma de pago: \n1.Efectivo\n2.Tarjeta\n3.QR");

    while (isNaN(formaDePago) || formaDePago < 1 || formaDePago > 3) {
        formaDePago = prompt("Por favor, ingrese una forma de pago valida: \n1.Efectivo\n2.Tarjeta\n3.QR")
    }
}

function masPersonas() {

}

