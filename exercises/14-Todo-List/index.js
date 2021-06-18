// Your code here
let input = document.querySelector("#addToDo");

input.addEventListener("click", function() {
	let li = document.createElement("li");
	li.innerHTML = "Tarea Agregada";
	document.querySelector("ul").appendChild(li);

	//let i = document.createElement("i");
	let span = document.createElement("span");
	var txt = document.createTextNode("\f1f8");
	span.className = "fa-trash";
	span.appendChild(txt);
	li.appendChild(span);
	//document.querySelector("ul").appendChild(li);
});
