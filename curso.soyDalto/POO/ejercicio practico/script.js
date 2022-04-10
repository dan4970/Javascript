// crear un sistema para mostrar las particularidades de los 3 celulares
// cada celular debe tener color, peso, resolucion de pantalla, resolucion de camara y memoria ram.
// cada cellular debe poder prender, reiniciar, apagar,tomar fotos y grabar



class Celulares{
    constructor(color,peso,rdp,rdc,ram){
        this.color=color;
        this.peso=peso;
        this.resolucionDePantalla=rdp;
        this.resolucionDeCamara=rdc;
        this.memoriaRam=ram;
        this.encendido=false;
        
        
    }
    presionarBotonEncendido(){
        if(this.encendido==false){
        alert("el celular se prendio")
            this.encendido=true;
             }
        else{
            alert("el celular se apago")
            this.encendido=false;
        }
    }
        reiniciarCelular(){
            if(this.encendido==true){
                alert("reiniciando celular")
            }
            else{
                alert("el celular esta apagado")
                this.encendido=false;
            }
        }

            tomarFoto(){
            alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`)
            }

            grabarVideo(){
                alert(`grabando video con una resolucion de: ${this.resolucionDeCamara}`)
}

            mobileInfo(){
                return`
                Color:<b>   ${this.color}</b></br>
                Pero:<b>   ${this.peso}</b></br>
                Resolucion de pantalla:<b>   ${ this.resolucionDePantalla}</b></br>
                Resolucion de Video:<b>     ${this.resolucionDeCamara}</b></br>
                Memoria Ram:<b>    ${this.memoriaRam}</b></br>`
            }
}


//creamos los 3 celulares con sus caracteristicas:

const celular1=new Celulares("black","150g","5'","full hd","2GB")
const celular2=new Celulares("white","250g","5.6'","hd","1.5GB")
const celular3=new Celulares("gray","350g","6'","full hd","3GB")
//MOSTRAMOS LOS RESULTADOS DE LOS CELULARES:
document.write(`
${celular1.mobileInfo()}<br>
${celular2.mobileInfo()}<br>
${celular3.mobileInfo()}<br>`)

//PRUEBA DE QUE FUNCIONA LAS FUNCIONES DE LOS CELUS:
// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciarCelular();
// celular1.presionarBotonEncendido();





//IMPLEMENTEA AHORA TODAS LAS CUALIDADES EN LOS CELULARES DE ALTA GAMA, EN DONDE ESTOS DOS CELULARES DE ALTA GAMMA
//PUEDE HACER TODO LO Q LOS OTROS CELULARES PODIAN HACER PERO TIENE MEJORES CARACTERISTICAS Y ADEMAS PUEDEN GRABAR EN CAMA SUPER LENTA
//TIENE RECONOCIMIENTO FACIAL Y UNA CAMARA EXTRA.

class celularAltaGamma extends Celulares{
    constructor(color,peso,rdp,rdc,ram,rdce){
        super(color,peso,rdp,rdc,ram);
        this.resolucionDeCamaraExtra=rdce;
    }

    grabarVideoLento(){
        alert("iniciamos la grabacion con camara lenta")
    }
    reconocimientoFacial(){
        alert("vamos a iniciar el reconocimiento facial")
    }
    infoAltaGama(){
        return this.mobileInfo() + `Resolucion de Camara Extra: <b>${this.resolucionDeCamaraExtra}</b><br>`;
    }

}

const cel1=new celularAltaGamma("rojo","130g","5.2","4K","3GB","hd");
const cel2=new celularAltaGamma("black","230g","4.2","4K","3GB","hd");

document.write("==========================================================================");
document.write(`<br>
${cel1.infoAltaGama()}<br>
${cel2.infoAltaGama()}<br>
`)






//crear un sistema que ayude a cofla a decidir cual app descargar.
//la informacion de los intaladores debe contener la cantidad de descargas y la puntuacion y el peso(tamaño de la app)
//Las apps se deben poder intalar, abrir, cerrar y desintalar.

 class App{
     constructor(descargas,puntuacion,peso){
         this.descargas=descargas;
         this.puntuacion=puntuacion;
         this.peso=peso;
         this.instalada=false;
         this.iniciada=false;
     }
     abrir(){
         if(this.iniciada==false){
            this.iniciada=true;
             alert("la aplicacion esta iniciada")    
         }
        }
        cerrar(){
         if(this.iniciada==true){
            this.iniciada=false;
             alert("la aplicacion esta cerrada")

            }
        }
     instalar(){
         if(this.instalada==false){
         this.instalada=true;
         alert("app instalada correctamente")
        
     }
    }
     desinstalar(){
         if(this.instalada==true){
        this.instalada=false;
        alert("app desinstalada correctamente")
         }
    }
    AppInfo(){
        return`
        Descargas: <b>${this.descargas}</b><br>
        Puntuacion: <b>${this.puntuacion}</b><br></br>
        Peso: <b>${this.peso}</b><br></br>`
    }
 }



const app=new App("15000","4.5 estrellas","150mb");
const app1=new App("1200","3 estrellas","250mb");
const app2=new App("15000","1.5 estrellas","660mb");
const app3=new App("16000","2.5 estrellas","220mb");
const app4=new App("45000","5 estrellas","900mb");
const app5=new App("158000","4.5 estrellas","850mb")
const app6=new App("25000","2.5 estrellas","650mb")

document.write(`${app.AppInfo()}<br>
${app1.AppInfo()}<br>
${app2.AppInfo()}<br>
${app3.AppInfo()}<br>
${app4.AppInfo()}<br>
${app5.AppInfo()}<br>
${app6.AppInfo()}<br>
`)



app.instalar();
app.abrir();
app.cerrar();
app.desinstalar();