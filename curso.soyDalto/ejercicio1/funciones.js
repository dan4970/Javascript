//armar un sistema de enmtrada para que el primero en entrar despues de las 2am y sea mayor de edad pasa gratis, despues los mayores de edad pagaran
//y si es menor de edad no pasa
let free=false;
function entrada(time){
let edad=prompt("cuantos años tenes?")

if(edad>18){
 
                    if(time>2 && time<7 && free==false){
                        alert("Mira pibe sos el primero en pasar asi q pasas gratis xDD!");
                           free=true; 
                    } 
                    else{
                        alert(`mira pibe son las ${time}:00 Hs por ende para pasar tenes que pagar, MAQUINOLA!!! `)
                    }
   }
   else{
       alert("mira pibe sos menor de edad asi que no podes pasar MAQUINOLA!!!")
   }
}

entrada(6);
entrada(12);
entrada(8);
entrada(11);
entrada(4);