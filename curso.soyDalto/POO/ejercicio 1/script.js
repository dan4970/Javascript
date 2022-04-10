
//LAS CLASES SE DEFINENE CON CONST!!!!!!

class Animal{
    constructor(especie,edad,color){
    //    //CREAMOS LAS PROPIEDADES DE LA CLASE JUNTO CON this., Y LOS VALORES DE ARGUMENTO DEL CONSTRUCTOR SERAN LA IGUALDAD AL this.
    //    por ejemplo :  this.Especie= al valor del argumento del contructor al cual asignamos el valor en este caso es "especie"
        this.Especie=especie;
        this.Edad=edad;
        this.Color=color;
        this.info=`soy ${this.Especie}, tengo ${this.Edad} años y soy de color ${this.Color}`;
    }
//  CREAMOS UN METODO DENTRO DE LA CLASE
    verInfo () {
      document.write(this.info + "<br>")  
    }
    ladrar(){
        if(this.Especie==perro){
            document.write("waw waw ")
        }
        else{
            document.write("no puede ladrar por que es un "+this.Especie+"<br>")
        }
    }
}

//FUERA DE LA CLASE QUEREMOS HACER UNA HERENCIA COMO POR EJEMPLO PERRO, YA QUE EL PERRO LADRA Y LOS OTROS ANIMALE NO:
class Perro extends Animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);  //hereda de la clase animal las siquientes propiedades 
        this.raza=raza; //agrego la nueva prrpiedad ala clase Perro heredando algunas propiedades de la clase anterior Animal
    }
    ladrar(){
        alert("!WAWWW¡")
    }

}

//CREAMOS LOS NUEVOS OBJETOS 
const perro= new Animal("perro",5,"marron");
const gato= new Animal("gato",3,"negro");
const pajaro= new Animal("pajaro",1,"verde");


//mostramos la propiedad info de los animales mediante el uso del metodo verInfo:
perro.verInfo();
gato.verInfo();
pajaro.verInfo();



document.write("=============================================================================<br>")


//otra forma de mostrar es 
document.write(perro.Especie+"</br>")
document.write(gato.info+"</br>")
document.write(pajaro.info+"</br>")

document.write("=============================================================================<br>")



//ahora quiero mostrar alguna propiedad del objeto creado como el color:

document.write(perro.Color+"</br><br>")

document.write("=============================================================================<br>")


perro.ladrar()
gato.ladrar()
pajaro.ladrar()

document.write("=============================================================================<br>")


//creee en una nueva variable un objeto nuevo llamado perro que heredo algunas propiedades de la clase Animal, el cual ahora estoy por usarlos:
const tobi = new Perro("perro",5,"marron","doberman");

//muestro la nueva variable xD
document.write(tobi.Especie+"</br>")


document.write("=============================================================================<br>")



//metodos ESTATICOS !!! :

class Gato extends Animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);  //hereda de la clase animal las siquientes propiedades 
        this.raza=raza; //agrego la nueva prrpiedad ala clase Perro heredando algunas propiedades de la clase anterior Animal
    }
    static ladrar(){
        document.write("!MIAWWW¡<br><br>")
    }

}

//el metodo static nos sirve para crear metodo en donde lo podremos llamar directamente con la clase sin la necesidad de 
// de crear un nuevo objeto 

Gato.ladrar();


document.write("=============================================================================<br><br><br>")

// los setters , son para modificar propiedades mediante los metodos, en el cual es como que se convierte directamente en propiedad para ser modificado mas adelante y no como un metodo para modificar su argumento 
//los getters son para obtener informacion 

class Persona extends Animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);  //hereda de la clase animal las siquientes propiedades 
        this.raza=null; // cuando no defini aun la propiedad pero ya la creee
    }
    set setRaza(newName){   //aqui creamos un metodo set en el cual mas adelante le asignaremos el valor de raza
        this.raza=newName;
    }
    get getRaza(){
        return this.raza;
    }
}

const humano= new Persona("humano",56,"lampiño","indio");  //creamos una nueva variable para crear el objeto de la clase persona

humano.setRaza= "reptiliano";   //modificamos el valor de la raza de la clase persona con el metodo set


document.write(humano.getRaza);  //mostramos el valor de la informacion raza con el metodo get