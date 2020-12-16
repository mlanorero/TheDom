let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let created = document.createElement("DIV");
	created.innerHTML = "Hello World";
	created.style.background = "yellow";
	document.body.appendChild(created);
});
