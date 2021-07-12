// Your code here
let addToDo = document.querySelector("#addToDo");

addToDo.addEventListener("onchange", function() {
	let li = document.createElement("li");
	li.innerHTML = "Tarea Agregada";
	document.querySelector("ul").appendChild(li);

	let icono = document.createElement("i");
	let span = document.createElement("span");
	span.appendChild(icono);
	li.appendChild(span);

	i.classList.add("fa-trash");
});

let spans = document.getElementsByTagName("span");

spans.addEventListener("click", function() {
	for(let i=0; i < spans.length; i++){
		let ul = document.getElementsByName("ul");
		let li = document.getElementsByName("li");
		ul.removeChild(li);
	}
});
