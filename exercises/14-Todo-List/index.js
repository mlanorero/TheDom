// Your code here
let addToDo = document.querySelector("#addToDo");

addToDo.addEventListener("click", function() {
	let li = document.createElement("li");
	li.innerHTML = "Tarea Agregada";
	document.querySelector("ul").appendChild(li);

	let icono = document.createElement("i");
	let span = document.createElement("span");

	icono.className = "fa-trash";

	span.appendChild(icono);
	li.appendChild(span);
});

let span = document.createElement("span");

span.addEventListener("click", function() {
	let ul = document.getElementsByName("ul");
	let li = document.getElementsByName("li");
	for (let i = 0; i < li.length; i++) {
		ul.removeChild(li[i]);
	}
});
