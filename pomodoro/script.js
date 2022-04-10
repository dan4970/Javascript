const tasks=[];
let time=0;
let timer=null;
let timerBreak=null;
let current=null;


const bAdd=document.querySelector("#bAdd");
const itTask=document.querySelector("#itTask");
const form=document.querySelector("#form");
const taskName=document.querySelector("#time #taskName");


renderTime();  //para que se se muestre el contador al inicio de la pagina


form.addEventListener("submit", (e)=>{     //agregar un evento al formulario al enviar o cargar tarea
    e.preventDefault();
    if(itTask.value!==""){              //si el valor de  input tarea es igual a vacio
        createTask(itTask.value);       //crear tarea
        itTask.value="";     //dejamos vacio los input despues de crear y cargar la tarea
        renderTasks();           //hacer  tarea
    }

});
function createTask(value){
    const newTask={
        id:(Math.random()*100).toString(36).slice(2),    //nos da in id aleatorio
        title: value,                               //titulo de la tarea que se agrega al input
        completed: false,                   //condicion inicial false
    }
    tasks.unshift(newTask);   //agregamos la nueva tarea en la posicion del primer arrray en donde alamacenaremos la tarea
}

function renderTasks(){
    const html=tasks.map((task)=>{    //aqui agregamos 
        return`
        <div class="task">
        <div class="completed">${task.completed      
        ? "<span class=`done`>Done</span>"
        : `<button class="start-button" data-id="${task.id}">Start</button></div>`
        } 

        <div class="title">${task.title}</div>     
        </div>`;
    });

    const tasksContainer= document.querySelector("#tasks");   //creamos una variable donde almacenaremos todas las tareas creadas y cargadas
    tasksContainer.innerHTML= html.join("");   //agregamos en el contenedos de tareas el htmlcreado !!
    
    const startButtons= document.querySelectorAll(".task .start-button");
    startButtons.forEach((startButton)=>{
        startButton.addEventListener("click", () => {
            if(!timer)    //si timer es null se ejecuta lo de adentro
            {
                startButtonHandler(startButton.getAttribute("data-id"));
                startButton.textContent= "In progress...";
                
            }

        });
    });

}





function startButtonHandler(id){
    time=5;
    current=id ;     //almacena el valos de la id actual
    const taskId=tasks.findIndex((task)=> task.id===id);  //buscamos si el task.id ===id de current, y de esa forma  pasamos ala siguiente condicion de cargar el contenido al arrat tasks
   taskName.textContent=tasks[taskId].title;      //agregamos el titulos ala tarea con el id correspondiente
    timer = setInterval(()=>{    // quiero hacer ejecutar la funcion timerHandler cada segundo
        timerHandler(id);  //mientras se ejecuta la funcion timerHandler cada segundo se va decrementando el time
    },1000)   ;         
} 


function timerHandler(id){
      //aqui se va decrementando cada vez por el setInterval
    renderTime();  //va mostrando cada vez un tiempo diferente por el setInterval
    if(time===0){   //cuando el tiempo llega a cero segundos ejecuto las siguientes funciones
        markComplete(id);   
        clearInterval(timer);    //con este vamos a detener o dejar que itere el setInterval
        current=null;       //una vez q se completa el tiempo de tarea se inicializa el id
        timer=null;    //una vez que completa el tiempo de la tarea se incializa el tiempo en cero para que inicie el tiempo de break
        renderTasks();
        startBreak();
        
    }
    time--;  
}

//mostramos el reloj digital temporizador
function renderTime(){
    const timeDiv=document.querySelector("#time #value");  //llamo en el contenedor donde pondre el cronometro
    const minutes=parseInt(time/60);
    const seconds =parseInt(time%60);
    timeDiv.textContent=`${minutes<10? "0" : ""}${minutes}:${seconds<10 ? "0" : ""}${seconds}`;  //cargo el cronometro en esa variable q se encientra en ese contenedor que elegi
}


function markComplete(id){
    const taskId= tasks.findIndex((task)=>task.id===id);
    tasks[taskId].completed=true;
}

function startBreak(){
    time=3;
    taskName.textContent="Break";
    renderTime();   //para que inicio a contar en el break desde el comienzo
    timerBreak=setInterval(timerBreakHandler,1000);
}
function timerBreakHandler()
{
    
    renderTime();
    if(time===0){
        clearInterval(timerBreak);
        current=null;  //una vez q termina se inicializa de nuevo
        timerBreak=null;    //una vez que termina el tiempo de break se inicializa la variable para que empiece a contar
        taskName.textContent="";  //una vez q termina se inicializa de nuevo vacio
        renderTime();
    }
    time--;
}

