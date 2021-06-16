// Your code here
let input = document.querySelector("#addToDo");

input.addEventListener("click", function() {
	let li = document.createElement("li");
	li.innerHTML = "Tarea Agregada";
	document.querySelector("ul").appendChild(li);

	let n = document.createElement("i class=fa fa-trash");
	let span = document.createElement("span");
	span.appendChild(n);
	li.appendChild(span);
});
