let addToDo = document.querySelector("#addToDo");

addToDo.addEventListener("keyup", function() {
	let li = document.createElement("li");
	li.innerHTML = "Tarea Agregada";
	document.querySelector("ul").appendChild(li);

    let span = document.createElement("span");
    li.appendChild(span);

    let icono = document.createElement("i");
    span.appendChild(icono);
   
    
    icono.classList.add("fa", "fa-trash");

    
    // Get the <ul> element with id="myList"
    let close = document.querySelectorAll("span");

    for(let i =0; i < close.length; i++){
        close[i].addEventListener('click', function(){
            let ul = document.querySelector("ul");
            ul.parentNode.removeChild(ul);
        })
    }
});