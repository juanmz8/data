//DOM
    //Acceso a los elementos/nodos

    getElementById("ID") //Selecciona un elemento por su ID

        //Seleccionar un elemento a traves de su padre
        const span = document.getElementById("parrafo").querySelector("span")

    querySelector("etiqueta o class") //Devuelve el primer elemento que coincida con el grupo especificado de selectores

    querySelectorAll("etiqueta o class") //Genera una lista de nodos, se utiliza convirtiendolos a un array

        //Convertir a array con metodo
        const parrafosArray = Array.from(document.querySelectorAll(".parrafo"))

        //Convertir a array con spread Operator
        const parrafosSpread = [...document.querySelectorAll(".parrafo")]

    //Modificar atributos

        element.getAtribute("atribute") //Obtiene el atributo de la etiqueta

            console.log(element.getAtribute(type))

        element.setAtribute("atribute","value") //Cambia el atributo de la etiqueta, se especifica el nombre del atributo y luego el cambio a ese mismo.

            elIdDelElemento.setAtribute("type","range") //Por ejemplo le da a un imput (elemento) el tipo rango.

    /*Modificar Clases*/

        element.classList.add("nombreDeClase") //Añade una clase al elemento, sirve para "activar partes del CSS que ocurran con eventos,etc"

        element.classList.remove("nombreDeClase") //Remueve una o más clase al elemento

        element.classList.togle("nombreDeClase",[force]) //Si tiene la clase, se la quita, y sino, se la añade

        element.classList.contains("nombreDeClase") //Devuelve true o false dependiendo si el elemento tiene la clase o no

        element.classList.replace("claseVieja", "claseNueva") //Fuciona remove y add

    /*Atributos a los que podemos acceder de forma directa*/

        //textContent
            console.log(title.textContent) // Se usa para mostrar el texto de una etiqueta o cambiarlo

        //InnerHTML
            console.log(etiqueta.innerHTML) //Muestra las etiquetas que esten dentro de un elemento html (padre)

        //ID
            console.log(etiqueta.id)

        //Value
            console.log(miId.value)

//Eventos
    //Sintaxis
        const button = document.getElementById("button")

        boton.addEventListener(/*el evento entre "" */() => {
            //codigo que se ejecuta al ocurrir el evento
        })

    //Eventos de ratón

    click //Cuando se hace click
    dblclick //Cuando se hace doble click
    mouseenter //Cuando el cursor entra en la zona que tiene el evento
    mouseleave //Cuando el cursor sale de la zona que tiene el evento
    mousedown //Cuando pulsamos el boton izquierdo
    mouseup //Cuando se suelta el boton izquierdo
    mousemove //Cuando se mueve el cursor

    //Eventos de Teclado (por ejemplo para imputs)

    keydown //Cuando pulsamos la tecla
    keyup //Cuando soltamos la tecla
    keypress //Cuando se mantiene apretada la tecla

//Objeto Evento

    //Muestra la informacion del evento [target hace referencia al punto donde se origina el evento]

    Input.addEventListener("keyup", (e) =>{
        console.log(e.target);
    })

    //Evitar el comportamiento predeterminado de elementos

    const link = document.getElementById("link")

    link.addEventListener("click",(e) => {
        e.preventDefault()
      });

//Crear Elementos

    //document.createElement() y document.createTextNode()

        const title = document.createElement("H1");

//Insertar Elementos I

    //elPadre.appendChild() (siempre se colocará al final de todos los hijos)

        document.body.appendChild(title);

//Insertar Elementos II

    //elPadre.insertBefore(position,element) Coloca al nuevo elemento antes que otro

        const listAnimals = document.getElementById("listAnimals")
        const newAnimal = document.createElement("li")
        newAnimal.textContent = "puma"
        listAnimals.insertBefore(newAnimal,listAnimals.children[0])

    //elPadre.insertAdjacentElement(position,element)

        //Posiciones :

            listAnimals.children[0].insertAdjacentElement("beforebegin",newAnimal);

                //beforbegin (antes de que empiece) como hermano anterior, se coloca dentro del padre con children[0]
                //afterbegin (luego de empezar) como primer hijo
                //beforeend (antes del final) como ultimo hijo
                //afterend (despues del final) como hermano siguiente, queda afuera de su padre tambien

    //elPadre.insertAdjacentHTML(position,etiquetas html)
    //elPadre.insertAdjacentText(position,texto entre comillas)

//Insertar Elementos III

    listAnimals.children[0].before(newAnimal);

        //padre.before(nuevo elemento) antes de que empiece,como hermano anterior
        //padre.prepend(nuevo elemento) luego de empezar, como primer hijo
        //padre.append(nuevo elemento) antes del final, como primer hijo
        //padre.after(nuevo elemento) despues del final, como hermano siguiente

        //child.replaceWith(newElemento) Reemplaza un elemento por otro
            document.getElementById("elementoHijo").replaceWith(newElement)


            /*
            Tiene algunas diferencias con replaceChild(old,new), replaceWith parte desde el elemente que se quiere reemplazar
            replaceChild necesita buscar al padre, especificar al hijo y reemplazarlo
             */

//Clonar Elementos

    //element.cloneNode(true ó false) Si tiene true;clona el elemento con los hijos, si tiene false; clona el elemento pero sin los hijos

      listAnimals.after(listAnimals.cloneNode(true))

//Eliminar Elementos

    //element.remove() Elimina el nodo del DOM
        listAnimals.remove();

    //element.removeChild(child) Elimina el nodo hijo del DOM
        listAnimals.removeChild(listAnimals.children[0]);

//Fragmentos de codigo

    //document.createDocumentFragment()

        //Ejemplo 1. Cada vuelta del bucle construimos un elemento li, le damos contenido y despues añadimos el fragmento del documento

            const days = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"]

            const fragment = document.createDocumentFragment()

            for (const day of days) {
                const itemList = document.createElement("LI")
                itemList.textContent = day
                fragment.appendChild(itemList)
            }

            daysList.appendChild(fragmento);

        //Ejemplo 2

            const opciones = document.getElementById("opciones")

            const dias = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"]

            const fragmento = document.createDocumentFragment()

            for (const dia of dias) {
                const itemOption = document.createElement("OPTION")
                itemOption.setAttribute("value",dia.toLocaleLowerCase())
                itemOption.textContent = dia
                fragmento.appendChild(itemOption)
            }

            opciones.appendChild(fragmento);

//Recorrer el DOM

    //Padres (ambas propiedades devuelven lo mismo)

        container.parentNode

            const box1 = document.getElementById("contenedor");
            console.log(box1.parentNode) //Devolveria cual es el padre del contenedor

        container.parentElement

            const contenedor = document.getElementById("contenedor");
            console.log(contenedor.parentElement) //Devolveria cual es el padre del contenedor


                                                                                                                            /*
      Los Nodos del tipo Document y DocumentFragment nunca van a tener un elemento padre, parentNode devolvera siempre null
                                                                                                                            */

    //Hijos (nodos que descienden de un padre)

        .childNodes //Devuelve todos los nodos hijos, saltos de linea,etc
        .children[0,1,2] //Devuelve todos los nodos elementos hijos, es decir etiquetas de html, sin saltos de linea en el codigo,etc (es de uso habitual)

        .firstChild //Devuelve el primer nodo hijo, sea del tipo que sea
        .firstElementChild //Devuelve el primer nodo elemento hijo, solo etiquetas

        .lastChild //Devuelve el ultimo nodo hijo
        .lastElementChild //Devuelve el ultimo nodo elemento hijo

        .hasChildNode //Devuelve true si el nodo tiene hijos y false si no los tiene

                // Metodos de hijos

                    //padre.replaceChild(nuevo,viejo) Remplazar un hijo por otro

                        const container = document.getElementById ("container");
                        const h2Viejo = document.getElementById ("h2Viejo");
                        const h2Nuevo = document.createElement("H2");
                        h2Nuevo.innerHTML = "Nuevo titulo"
                        container.replaceChild(h2Nuevo,h2Viejo);

                    //padre.removeChild(hijo) Eliminar un hijo

                        const box = document.getElementById("contenedor");
                        const h2ParaEliminar = document.getElementById("h2ParaEliminar");
                        box.removeChild(h2ParaEliminar);


    //Hermanos

        container.nextSibling //Devuelve el nodo hermano siguiente (el de abajo)
        container.nextElementSibling //Devuelve el nodo elemento siguiente

        container.previousSibling //Devuelve el nodo hermano anterior (el de arriba)
        container.previousElementSibling //Devuelve el nodo elemento anterior

        container.closest //Selecciona el nodo mas cercano que cumpla con el selector

//Objetos nativos del Navegador

    //Window , es el objeto global, de el descienden todos
        alert()
        prompt()
        confirm()
        window.open() //abre una ventana de navegador //la ventana puede guardarse en const
        window.close() //cierra una ventana
        window.closed() //Muestra true o false si la ventana se cerró

    //Console, es el objeto que contiene la consola del navegador

        console.log() //Muestra el resultado
        console.dir()
        console.error() //Muestra los errores
        console.table() //La visualizacion es como la de una tabla
        console.warm() //Muestra una advertencia

    //Location, es el objeto que contiene la barra de direcones

        location.hash() //Es una forma de pasar parametros entre paginas, se puede usar para tener un solo HTML para tener varias paginas depentiendo del #
        location.href() //Devuelve la direcion de la pagina, tambien se puede cambiar para redirigir la pagina
        location.protocol() //Devuelve el protocolo de la pagina
        location.host() //Devuelve el dominio principal de la pagina
        location.pathname() //Devuelve los subdirectorios donde esta actualmente l apagina
        location.reload() //Recarga la pagina

    //History, muestra el historial de la pestaña en cada sesion

        back() //Nos lleva una pagina atras
        foward() //Nos lleva una pagina adelante
        go(1) // recibe un numero positivo o negativo para navegar X paginas adelante o atras

    //Date, representan un momento fijo en el tiempo en un formato independiente (año,mes,día,etc).



//Objeto  XMLHttpRequest (AJAX sin JQuery), peticiones asincronas

    const boton = document.getElementById("boton") //creamos un boton para obtener datos

    boton.addEventListener("click",()=>{ //escuchamos el evento click de un botón
        let xhr
        if (window.XMLHttpRequest) xhr = new XMLHttpRequest() //verificamos si el objeto es compatible con el navegador
        else xhr = new ActiveXObject("Microsoft.XMLHTTP") //Compatible para IE 6-9 version

        xhr.open("GET", "https://jsonplaceholder.typicode.com/users") //Open recibe dos parametros, la peticion (get/post) y la direccion del archivo PHP

        xhr.addEventListener("load", (data)=>{
            //load se dispara cuando toda la informacion llegó al objeto, luego se guarda en data.

            const dataJson = JSON.parse(data.target.response)
            //Transformamos la informacion a formato json y se guarda en dataJson

            const list = document.getElementById("list") //Opcional

            for (const infoUser of dataJson){ //Recorremos cada elemento
                const listItem = document.createElement("LI")
                listItem.textContent = `${infoUser.id} - ${infoUser.name}`;//obtenemos el id y el name de dataJson
                list.appendChild(listItem)
            }
        })

        xhr.send() //Envia la peticion
    })

    //Capturar los datos de un formulario enviado por medio de un evento y guardarlos

        const form = document.getElementById("form");

        form.addEventListener("submit", (e) =>{
            e.preventDefault()
            sendData(form)
        })

        const sendData = (data) => {
            let xhr
            if (window.XMLHttpRequest) xhr = new XMLHttpRequest()
            else xhr = new ActiveXObject("Microsoft.XMLHTTP")

            xhr.open("POST", "archivo.php")
            const formData = new FormData(data)

            xhr.send(formData)
        }

//Objeto formData()

    //Sintaxis
        const formData = new FormData(); //Recibe como parametros datos, como los datos de XMLHttpRequest

//CallBacks

//Promesas

    //Sintaxis
    /*
        const promise = new Promise ((resolve, reject) => {
            if (condicion) reject (codigo a ejecutar)
            else resolve (codigo a ejecutrar)
        })

        return promise
    */