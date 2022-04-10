//          DOM

// Nodo:  Un nodo en el DOM es cualquier etiqueta del cuerpo, como un parrafo, el mismo body o 
// incluso las etiquetas de una lista 

//   Tipos de nodos:

//             *Document: el nodo document es el nodo raiz, a partir del cual derivan el resto de nodos.
//             *Element: nodos definidos por etiquetas html(elemplo, body, form, p,h,title,script,div,etc)
//             *Text: el texto dentro de un nodo element se considera un nuevo nodo hijo de tipo text(texto)
//             *Attribute: los atributos de las etiquetas definene nodos, (en Javascript no los veremos como nodos, sino como informacion
//                  asociada al nodo de tipo element)
//             *Comentario y otros: los comentarios y otros elementos como las declaraciones doctype en cabecera de los
//                 documentos HTML generan nodos.




//          Document - Metodos de Seleccion de elementos:(estos metodos se aplican a los documentos)
//
//   -getElementById()    - Selecciona un elemento por ID
//  -getElementByTagName()  -  Selecciona todos los elementos que coincidan con el nombre de la etiqueta especificada
//  -querySelector()   -   Devuelve el primer elemento que coincida con el grupo especificado de selectores.
//  -querySelectorAll()     -   Devuelve todos los elementos que coincidan con el grupo especificado de selectores
//



//==========================================================================================================================



//   Metodos para Definir, obtener y eliminar valores de atributos:(estos metodos se aplican a los elementos!! importantee!!!)

//      -setAttribute()  -  Modifica el valor de un atributo
//      -getAttribute()  -  Obtiene el valor de un atributo
//      -removeAttribute()  -   Remueve el valor de un atributo  
//
////


//=========================================================================================================================

//   Atributos globales de HTML(repaso):

//      -class      -           lista de clases del elemento separadas por espacios
//      -contenteditable  -  indica si el elemento puede ser modificable por el ususario(booleano)
//      -dir     -    indica la direccionalidad del texto
//      -hidden     -    indica si el elemento aun no es, o ya no es, relevante
//      -tabindex  -  indica si el elemento puede obtener un focus de input
//      -title     -    contienen un texto con informaicon relacionada al elemento al que pertenece
//      -id         -           defina un identificador unico
//      -style      -       contiene declaraciones de estilo CSS para ser aplicadas al elemento.



//==========================================================================================================================


//   atributos de inputs:    

//      -className
//      -value
//      -type
//      -accept
//      -form
//      -minlength
//      -placeholder
//      -requiered


//======================================================================================================================

// atributos style:

//     -usus y propiedades: ejemplo:   llamamos al documento y lo guadamos en una variable, despues esa variablew de agregamos estilos de css
//                                      de esta forma:   valor.style.color=red
//      -propiedades Camel case
//
//

//=============================================================================================================
//
//      clases, classList y Metodos de classList

//          -add()  -  añade una clase
//          -remove()   -  remove una clase
//          -item()    -   devuelve la clase del incdice especificado     
//          -contains()  -  verifica si ese elemento posee o no, la clase especificando
//          -replace()   -  reemplaza una clase por otra  
//          -toggle()   -   si no tiene la clase especifiada, la agrega, si ya la tiene, la elimina.
//
//


//=======================================================================================================================

//      obtencion y modificacion de elementos:

//      -textContent  -  devuelve el texto de cualquier nodo(muestra todo el contenido sin el hrml)
//      -innerHTML  -   devuelve el contenido html de un elemento(nos muestra todo el contenido incluyendo las etiquetas de html que hay adentro )
//      -outterHTML -   devuelve el codigo HTML completo del elemento(nos muestra todo el contenido incluyendo las etiquetas dentro y las mismas que esta llamando)
//
//
//==========================================================================================================================
//
//
//  Creacion de elementos:
//
//    -createElements()
//    -createDocumentFragment()  
//
//====================================================================================================
//
//  Creacion de Elementos:
//      -createElements()
//      -createTextNode()
//      -appendChild()
//      -createDocumentFragment()
//
//
//
//===============================================================================================================
//
//  Obtencion y modificacion de childs(hijos)
//      -firstChild    -   llama al primer elemento hijo(incluyendo el espacio vacio)
//      -lastChild      -   llama al ultimo elemento hijo(incluyendo el espacio vacio)
//      -firstElementChild   -   llama al primer elemento hijo(No incluyendo el espacio vacio)
//      -lastElementChild        -   llama al ultimo elemento hijo(No incluyendo el espacio vacio)
//      -childNodes        -    me muestra una lista de nodos hijos dentro del contenedor padre(incluyendo los espacion vacios como nodos hijos)
//      -children       -      me muestra una lista de nodos hijos dentro del contenedor padre (No incluyendo los espacios vacios) 
//
//============================================================================================================================================
//
//      Metodos de childs(hijos)
//     -replaceChild()  -  reemplaza un elemento hijo por otro
//      -removeChild()    -   elimina un elemento hijo
//      -hasChildNodes()      -   
//      
//
//=============================================================================================
//
//        Propiedades de parents(padres)
//      -parentElement
//      -parentNode
//
//
//=============================================================================================


//      Propiedades de Siblings(hermanos)
//      -nextSibling
//      -previousSibling
//      -nextElementSibling
//      -previousElementSibling
//
//
//
//
//=======================================================================
//
//      Nodos - Extras
//          -closest()
//
//
//
//
//===============================================================






//
//
//
//
//
//

