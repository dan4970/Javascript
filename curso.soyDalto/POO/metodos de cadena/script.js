//                                            METODOSSS DE CADENAS!!!!!


// BUSCAR CADENAS EN LAS CADENAS Y DEVOLVERNOS UN VALOR:
// 1  concat()      //junta dos o mas cadenas y retorna una nueva
// 2  startsWith()  //verifica si una cadena comienza con los caracteres de otra cadena, devuelve true, sino devuelve false (string1="cadena de pruebva";  string2="cadena")  aqui observamos que string2 comienza en tring1 en tonces es true
// 3  endsWith()    //si una cadena termina con los caracteres de otra cadena, devuelve true, sino devuelve false  (string1="cadena de prueba";  string2="prueba")  aqui observamos que string2 termina  en el tring1 en tonces es true)
// 4  includes()    //si una cadena puede encontrarse dentro de otra cadena, devuelve true, sino devuelve false
// 5  indexOf()     //devuelve el indice del primer caracter de la cadena, sino existe, devuelve -1
// 6  lastIndexOf()  //devuelve el ultimo indice del primer caracter de la cadena, si no existe, devuelve -1


// RELLENAR LA CADENA
// 7  padStart()   //[propuesta de estandar]- rellena cadena al principio con los caracteres
// 8  padEnd()     //[propuesta de ECMA ]- Rellenar cadena al final con los caracteres 
// 9  repeat()     //Devuelve la misma cadena pero repetida la cantidad que le indiquemos


//MODIFICAMOS LA CADENA
// 10  split()   //Divide la cadena como le pidamos 
// 11  substring()  //Nos retorna un pedazo de la cadena que seleccionamos
// 12  toLowerCase()  //Convierte una cadena a minuscula
// 13  toUpperCase()  //Convierte una cadena a mayuscula
// 14  toString()     //el metodo convierte el array en una cadena.
// 15  trim()        //elimina los espacios en blanco al principio y al final de la cadena.
// 16  trimEnd()       //Elimina los espacios en blanco al final de una cadena.
// 17  trimStart()      //elimina los espacios en blanco al comienzo de una cadena.
// 18  valueOf()       //retorna el valor primitivo de un objeto string



1 
    let cadena="hola";
    let cadena2="que se yo";
   let resultado=cadena.concat(cadena2); //devuelve: hola que se yo
    document.write(resultado)


2

let resultado2=cadena.startsWith(cadena2);  //devuelve false por que


3

4

let cadena3="tito es un tarado e inmaduro y tarado";

let resultado3=cadena.includes("tarado");  //devuelve true por que la palabra tarado si se encuentra en el string cadena3

5  
resultado4=cadena3.indexOf("es")     //me devuelte la poscicion en donde comienza esa palabra que en este caso es 6

6
 resultado5=cadena3.lastIndexOf("tarado")   //me devuelve la ultma coincidencia  de la cadena que estoy buscando en el string, que en este caso es 32;
 
7  

9
let cadena5="123 ";  
resultado6=cadena5.repeat(3);  // me repetira el string 3 veces : "123 123 123"

10
let cadena6="hola,como,estas";
resultado=cadena6.split(",");    //separa la cadena6 en la coma y lo convierte en array.   
 
11  
let cadena7="abcdef";
resultado=cadena7.substring(0,3);    //nos arranca un pedazo del estring que comienza en la posicion 0 y terminar antes de 3, devolviendonos: "abc";   


14  
let array=["pedri","dan"]
resultado=array.toString() ;   //nos devolvera una cadena de texto : "pedri,dan"






//                      METODO DE ARRAYS:

//TRANSFORMADORES(modifican al array original )

// pop()   elimina el ultimo elemento de un array y lo devuelve el valor de ese elemento eliminado del array, modificando tambien el array original
// shift()   elimina el primer elemento de un array y lo devuelve el valor de ese elemento eliminado del array , modificando tambien el array original
// push()   agrega un elemento al array al final de la lista
// reverse()    invierte el orden de los elementos de un array
// unshift()    agrega uno o mas elementos al inicio del array, y devuelve la nueva longitud del array
let numero=[3,4,5];
numero.unshift(0,1,2);  //me devuelve el array modificado : [0,1,2,3,4,5]

// sort()    ordena los elementos de un arreglo(array) localmente y devuelve el arreglo ordenadamente(lo odena de forma creiciente en numero, y en palabras te de ordena segun el orden del abecedario)


// splice()     cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
let nombres=["manzana","tito","toni","casa","perro","gato"];  //la posicion que se refiere al final de una array el la -1
//tambien puede no eliminar algun elemento del array sino solo agregar elementos en la pocicion indicada en el nombres.splce(1,0,"roberto","gustavo","jose"), en este casi agregaria en la pocicion 1 del arrat los nombres de roberto,gustavo y jose al array
nombres.splice(1,3,"holaMundo!")   // esto elimina del array original los elementos de la posisiocn 1 en adelante hasta eliminar 3 elementos, y en lugar de los eliminados se agrega el elemento "holaMundo!"
// flat()       aplana los arrray de array que pueden haber adentro dejando solo un array completo.





//      METODOS ACCESORES!!:
// join()  une todos los elementos de una matriz(u objeto similar) en una cadena y la devuelve
// slice()   devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin(fin no incluido)
 //METODOS YA VISTOS : toString(), indexOf(), lastIndexOf(),  includes();


//      DE REPETICION
// filter()     crea un nuevo array con todos los elementos que va filtrando
// forEach()     ejecuta la funcion indicada una vez por cada elemento 




//      OBJETOS Math- BASICOSS!!!
//METODOS:

//   sqrt()    raiz cuadrada de un numero
//   cbrt()   raiz cubica de un nume 
//   max()      devuelve el el numero  mas grande de todod los numeros que cargo entre el parentesis, no trabaja con arrays ni objetos
//   min()      devuelve el el numero  mas pequeño de todos los numeros que cargo entre el parentesis, no trabaja con arrays ni objetos
//   random()   devuelve un numero pseudo-aleatorio entre 0 y 1 (no llegan a cero nunca ni llegan a 1 tampoco)
//              ejemplo: quiero numero aleatorios de 0 al 100:
// //                numero=random()*99   pero estos numero son con decimales uwu
//                   numeroAleatorio=Math.floor(numero+1)   con esto elimino los decimales redondeando con el entero, de esa forma aumento en 1 para que cuando salga un numero 0,9432 decimales quedando 1,9432 y redondeandolos con floor a 1
//                                                          en donde al random lo multiplico por 99 para que cuando salga 98,88 le sume 1 y quede 99,88 y con el Math.flooor redondea a 99
//                                                          de esa forma obtengo numeros del 1 hasta el 99 (osea numeros aleatorios entre 0 y 100, sin tomar esos numeros extremos )





//   round()     devuelve el valor de un numero redondeado al numero entero mas cercano
                        // let numero=Math.round(9.9)    //redondea a 10
                        // let numero=Math.round(9.2)    //redondea a 9

//   fround()   devuelve la representacion flotante de precision simple mas cercana de un numero
//   floor()    devuelve el mayor entero menor que o igual a un numero
//   trunc()    devuelve la parte entera del numero x, la eliminacion de los digitos fraccionarios

                        //      let numero=Math.trunc(9.9)    //redondea a 9
                        //       let numero=Math.trunc(9.2)    //redondea a 9



    // //                  propiedades de Math:
//          PI   3.14...   ejemplo  Math.PI=3.14.....
//      
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 



