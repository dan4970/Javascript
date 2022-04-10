// crea una calculadora


const sumar = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);  //coloque parseInt para convertir en numero de estring a numero de entero!!!
}

const restar = (num1, num2) => {
    return parseInt(num1) - parseInt(num2);
}
const dividir = (num1, num2) => {
    return parseInt(num1) / parseInt(num2);
}
const multiplicar = (num1, num2) => {
    return parseInt(num1)*parseInt(num2);
}
let resultado;
let X="SI";
// while(X=="SI" || X=="si" || X=="Si"){
alert("¿que operacíon deseas realizar?");
let operacion = prompt("1_suma, 2_resta, 3_division, 4_multiplicacion");
if (operacion == 1) {
    let num1 = prompt("ingrese el primer numero para sumar")
    let num2 = prompt("ingrese el segundo numero para sumar")
    resultado=sumar(num1,num2)
}
else if (operacion == 2) {
    let num1 = prompt("ingrese el primer numero para restar")
    let num2 = prompt("ingrese el segundo numero para restar")
     resultado=restar(num1,num2)

}
else if (operacion == 3) {
    let num1 = prompt("ingrese el primer numero para division")
    let num2 = prompt("ingrese el segundo numero para division")
     resultado=dividir(num1,num2);

}
else if (operacion == 4){
    let num1 = prompt("ingrese el primer numero para multiplicacion")
    let num2 = prompt("ingrese el segundo numero para multiplicacion")
     resultado=multiplicar(num1,num2);

}
else{
    alert("no se ha encontrado la operacion seleccionada")
}
document.write(resultado)


// X =prompt("deseas continuar con otra operacion??  SI/NO");
// }