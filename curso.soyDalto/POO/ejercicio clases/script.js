//cofla ya esta terminando el primer semestre del primer ciclo, la tarea que le debe realizar es mucho mas avanzada de la que tenia antes,
//ademas de suma,resta, multiplicacion y división , ahora tambien necesitara calcular,
//potencias, raices cuadradas y cubicas.
//  CREAR SOLUCIONES:
//-perfeccionar la calculadora para poder implementar las nuevas funciones.



// modificar calculadora
class Calculadora{
    constructor(){}
sumar(num1, num2){
    return parseInt(num1) + parseInt(num2);  //coloque parseInt para convertir en numero de estring a numero de entero!!!
}

restar(num1, num2){
    return parseInt(num1) - parseInt(num2);
}
dividir(num1, num2){
    return parseInt(num1) / parseInt(num2);
}
multiplicar(num1, num2){
    return parseInt(num1)*parseInt(num2);
}
potencia(num1,exp){
    return num1**exp;
}
raizCuadrada(num1){
    return Math.sqrt(num1);
}
raizCubica(num1){
    return Math.cbrt(num1);
}

    }
const calculadora=new Calculadora();


let resultado;
let X="SI";
// while(X=="SI" || X=="si" || X=="Si"){
alert("¿que operacíon deseas realizar?");
let operacion = prompt("1_suma, 2_resta, 3_division, 4_multiplicacion,5_potencia,6_raiz cuadrada,7_raizCubica");
if (operacion == 1) {
    let num1 = prompt("ingrese el primer numero para sumar")
    let num2 = prompt("ingrese el segundo numero para sumar")
    resultado=calculadora.sumar(num1,num2)
}
else if (operacion == 2) {
    let num1 = prompt("ingrese el primer numero para restar")
    let num2 = prompt("ingrese el segundo numero para restar")
     resultado=calculadora.restar(num1,num2)

}
else if (operacion == 3) {
    let num1 = prompt("ingrese el primer numero para division")
    let num2 = prompt("ingrese el segundo numero para division")
     resultado=calculadora.dividir(num1,num2);

}
else if (operacion == 4){
    let num1 = prompt("ingrese el primer numero para multiplicacion")
    let num2 = prompt("ingrese el segundo numero para multiplicacion")
     resultado=calculadora.multiplicar(num1,num2);

}
else if (operacion == 5){
    let num1 = prompt("ingrese el numero ")
    let exp = prompt("ingrese potencia")
     resultado=calculadora.potencia(num1,exp);
}
else if (operacion == 6){
    let num1 = prompt("ingrese el  numero ")
     resultado=calculadora.raizCuadrada(num1);
}
else if (operacion == 7){
    let num1 = prompt("ingrese el  numero ")
     resultado=calculadora.raizCubica(num1);
}
else{
    alert("no se ha encontrado la operacion seleccionada")
}
document.write(resultado)

//  2) crear una funcion que al pasarle como parametro la materia nos devuelva:
//  *el profesor asignado
//   *el nombre de todos los alumnos
// 3) Crear una funcion que nos diga en cuantas clases esta cofla.
//  *Nombrar las clases en las que esta y los profesores de cada una.



const obtenerInformacion=(materia)=>{
            materias={
                fisica:["profesor:Perez","pedro","pepito","cofla","maria"],
                logica:["profesor:alberto","pedro","pepito","juan"],
                programacion:["profesor:Hernandez","pedro","pepito","juan","cofla","maria"],
                quimica:["profesor: Rodriguez","pedro","pepito","cofla","maria","juan"]
            }

            if(materias[materia]!==undefined){
                return materias[materia];
            }else{
                return "<br>la materia no existe xDDDD";
            }
}


let informacion= obtenerInformacion("fisca");
document.write(informacion);