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

	let p = document.getElementById("btn"); // Find the paragraph element in the page
	p.onclick = showAlert; // Add onclick function to element

	function showAlert(event) {
		alert("hola");
	}
};
