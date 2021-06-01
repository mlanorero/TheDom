// Your code here
let button = document.querySelector("#addToDo");

button.addEventListener("click", function() {
	let node = document.createElement("li");
	let add = document.getElementById("addToDo").value;
	let t = document.createTextNode(add);
	document.querySelector("ul").appendChild(t);
});
