// Your code here
let addToDo = document.querySelector("#addToDo");

addToDo.addEventListener("click", function() {
	let li = document.createElement("li");
	li.innerHTML = "Tarea Agregada";
	document.querySelector("ul").appendChild(li);

	let icono = document.createElement("i");
	let span = document.createElement("span");
	span.appendChild(icono);
	li.appendChild(span);

	i.classList.add("fa-trash");
});

let span = document.getElementsByTagName("span");

span.addEventListener("click", function() {
	let ul = document.getElementsByName("ul");
	let li = document.getElementsByName("li");
	ul.removeChild(li);
});
