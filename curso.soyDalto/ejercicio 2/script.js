// *  crear un mini-sistema que nos permita registrar los alumnos que estan presentes (P)
// y ausentes (A) en clase,
// *  pasados los 30 dias mostrar la situacion final de todos los alumnos(Nro total de presentes y ausentes)
// *  Se puede tener un maximo de 10% de ausencias por semestre, si se tienen mas, aclarar que esta reprobado xDD.
// *   En el curso son un total de 19 alumnos.

let cantidad=prompt("cuantos alumnos son?");
let alumnosTotales=[];

for (let i = 0; i <cantidad ; i++) {
        alumnosTotales[i]=[prompt("nombre del alumno" + (i+1)),0];
}
   
    function tomarAsistencia(nombre,posicion,i){
         let presencia=prompt(`esta presente ${nombre} en el dia ${i}? si es asi escribi "P" `);
         if(presencia=="p" || presencia=="P"){
            alumnosTotales[posicion][1]++;
         }
    }

    for (let i = 1; i <= 30;i++) {
        for(alumno in alumnosTotales){
           tomarAsistencia(alumnosTotales[alumno][0],alumno,i);
        }
    }
    for(alumno in alumnosTotales){
        let resultado= `el alumno ${alumnosTotales[alumno][0]} presenta la siguiente situacion:<br>
        __________Presentes: ${alumnosTotales[alumno][1]}<br><br>
        __________Ausencias: ${30 - parseInt(alumnosTotales[alumno][1])}<br>`  //parseInt nos sirve para  convertir cualquier numero de srtrig en un numero entero
        

        if((30-alumnosTotales[alumno][1])>18){
            resultado=resultado + `Reprobado(libreta xDD)<br><br>`
        }else{
            resultado=resultado + "<br><br>"
        }
        document.write(resultado)
    }
 