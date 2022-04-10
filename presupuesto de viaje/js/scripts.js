let vacationCalc=document.getElementById("vacationCalc")  //creo una variable en donde la llamo el ID

vacationCalc.addEventListener("submit", calcExpenses)  //agrego un evento de envio ala variable q cree

function getValues()  //funcion de almacenar el llamado de todas las variables con sus correspondientes ID
{   
let destiny=document.getElementById("destiny").value;
let budget=document.getElementById("budget").value;
let acomodation=document.getElementById("acomodation").value;
let transport=document.getElementById("transport").value;
let food=document.getElementById("food").value;
return{destiny,budget,acomodation,transport,food}
}
function calcExpenses(e){    //esta funcion calcula los gastos del viaje a donde quiero ir
    e.preventDefault();  //para que no se recargue automaticamente la pagina
    
    const {destiny, budget, acomodation, transport, food} = getValues();  //llamo alas variables creadas mediante la funcion 


    // calcular los gastos totales 
    //se coloca parceInt() para decirle q todo lo que entre ahi sea un numero
    let expenses=parseInt(acomodation) + parseInt(transport) + parseInt(food);
    // vamos a crea una variable con los balances  
    // vamos a restar el presupuesto con las expenses
    let balance= budget-expenses;
    
    UI(destiny, budget, balance)   //ejecuto la siguiente funcion que se va a encargar de agregar los resultados obtenidos en los calculos de gastos
} 

function UI(destiny, budget, balance){     //
let result=document.getElementById("result")    //creo una variable result y lo llamo con un ID del contenedor en donde mostrare los resultados en html
let dataPrint=document.createElement("div")   //crere un nuevo elemento html  que en este caso seria un div 


//insertare en el nuevo div que cree los siguientes variables que quiero mostrar que seria en este caso los resultados
dataPrint.innerHTML= `    
    <div class="container-data row">
        <div class="col s4">
            <h6>${destiny}</h6>
        </div>
        <div class="col s4">
            <h6>${budget}</h6>
        </div>
        <div class="col s4">
            <h6>${balance}</h6>
        </div>
    </div>    
    `

    result.appendChild(dataPrint)   //agregar al elemento padre result los elemento hijos creados que son dataPrint

    reset();   //resetear eliminar los datos escritos en los inputs
}

function reset(){
    document.getElementById("vacationCalc").reset();
}