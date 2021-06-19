// Your code here
let input = document.querySelector("#addToDo");
let close = document.getElementsByClassName("fa-trash");
let i;

function addEventListener() {
	let li = document.createElement("li");
	li.innerHTML = "Tarea Agregada";
	document.querySelector("ul").appendChild(li);

	let icono = document.createElement("i");
	let span = document.createElement("span");
	//var txt = document.createTextNode("/f1f8");
	icono.className = "fa-trash";
	//i.appendChild(txt);
	span.appendChild(icono);
	li.appendChild(span);
	document.querySelector("ul").appendChild(li);

	for (i = 0; i < close.length; i++) {
		close[i].onclick = function() {
			let icono = document.querySelector("i");
			icono.style.display = "none";
		};
	}
}
