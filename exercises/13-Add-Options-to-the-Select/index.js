window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here
	countries.forEach(myFunction);

	function myFunction(item) {
		let node = document.createElement("option");
		document.querySelector("#mySelect").appendChild(node);
		node.innerHTML = item;
	}

	document.getElementById("change").addEventListener("onClick", alert);

	function alert() {
		document.getElementById("change").innerHTML = "hola";
	}
};
