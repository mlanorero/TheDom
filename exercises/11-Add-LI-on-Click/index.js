let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	let list = document.createElement("LI");
	let textnode = document.createTextNode("Forth element");
	list.appendChild(textnode);
	document.getElementById("myList").appendChild(list);
});
