let button = document.querySelector("#superDuperButton");

button.addEventListener("click", function() {
	let node = document.createElement("li");
	node.innerHTML = "Forth Element";
	document.querySelector("#myList").appendChild(node); // Append <li> to <ul> with id="myList"
});
